const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

// Middleware. Las funciones middleware se ejecutan DESPUES de recibir una solicitud y ANTES de enviar una respuesta. Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una función que se llama para ejecutar el próximo middleware.
routerProgramacion.use(express.json()); //Esto nos va a permitir procesar el cuerpo de las solicitudes en formato .json, y poder trabajar con ese cuerpo de la solicitud en nuestro código (nos permite trabajar con la propiedad "body", por ejemplo, ya que estaría en formato .json). Esto lo va a realizar antes de cualquiera de las rutas que están abajo y para cualquier tipo de método 'http' (GET, POST, DELETE, etc.), esto último gracias al ".use".

routerProgramacion.get('/', (req, res) => { 
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => { 
  const lenguaje = req.params.lenguaje; 
  
  //Filtramos la lista de cursos en base al lenguaje de programación.
  const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje); 
  if(resultados.length === 0) { 
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`); 
  }

  console.log(req.query.ordenar); 

  if (req.query.ordenar === 'vistas') {
    res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))); 
  } else { 
    res.send(JSON.stringify(resultados));
  }
  
  res.send(JSON.stringify(resultados)); //También podés reemplazar esta línea con "res.json(programacion);"
});

//Digamos que ahora queremos filtrar por lenguaje y tambien por el nivel del curso =>:
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    //return res.status(404).end(); //"end", nos permite terminar la solicitud y enviar una respuesta vacía, en lugar de un mensaje.
  }

  res.send(JSON.stringify(resultados));
});

//Esta solicitud "post", la vas a poder simular en el archivo "index.http".
routerProgramacion.post('/', (req, res) => { //"/", sirve para que el "post" se haga en lo que se encuentre inmediatamente al acceder al 'objeto' (aunque en realidad tada la info estaría en formato .json, pero bueno, tiene notación de objeto) programación. La función flecha sirve para manejar cuando se recibe la solicitud "post" en el camino que se especificó.
  let cursoNuevo = req.body; //Con "req.body" extraemos el cuerpo de la solicitud (o sea, lo que contiene la solicitud, ya que, en una "post" vos queres crear nueva información => dicha 'información' sería el "body" y se extrae así). Si bien el método "body" se puede usar usar con archivos en formato .json, y nosotros tenemos el archivo "cursos.js" (que está en formato .js), peero arriba escribí la línea de código "routerProgramacion.use(express.json());" que básicamente lo convierte a .json antes de que se ejecute el "post".
  programacion.push(cursoNuevo); //Con esto se agregaría (al 'la base de datos' jaj, que bueno, acá es el archivo "cursos.js") la info nueva que se intenta introducir con el "post".
  res.send(JSON.stringify(programacion)); //Le enviamos al cliente el nuevo arreglo, hacemos esto para verificar que realmente se actualizó.
});

//Con "put" será necesario que el user le ingrese todos los datos, no solo el que desea cambiar.
routerProgramacion.put('/:id', (req, res) => { //Para saber qué eslo que hay que actualizar usamos el parámetro url llamado "id"
  const cursoActualizado = req.body;
  const id = req.params.id; //"req.params.id" sirve para tomar la propiedad llamada "id" de la base de datos, y acá la estamos esignado a una constante que tiene el mismo nombre.

  //Como lo que hay en el archivo "cursos.js" son basicamente arrays, => con el método "findIndex" podemos podemos saber el número de la posición que ocupan los bloques de información, en este caso del 'array' "programacion":
  const indice = programacion.findIndex(curso => curso.id == id); //Dentro de los paréntesis dice: para "curso" en el array, si el "id" de ese curso es "==" al "id" que pasamos en las solicitud ("req", y que fué asignado a la "const id") como un parámetro url => si es verdadero (si es verdad/se cumple lo que está del lado derecho de la flecha), dicho valor de id se almacenaría en la "const indice". El operador de igualdad estricta ("===") compara también el tipo de dato, pero acá el id que tenemos en la base de datos es un número y el "id" que se recibe dentro de la 'url' viene como una cadena de caracteres => uso "==", ya que, solo comparará que sean iguales sin importarle si son del mismo tipo de dato.

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(programacion));
});

//"patch" permite actualizar información puntual, sin necesidad de tener que cargar tambien lo que no se modifica (cosa que es necesaria en "put"):
routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id); //Si "curso.id == id" se cumple que es verdadero => el valor del "id" se asigna a la "const indice".
  
  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    
    //"Object.assign", es un método de objetos que nos permite modificar solo algunas propiedades de un objeto:
    Object.assign(cursoAModificar, infoActualizada); //El primer parámetro es el objeto que se va a modificar, y el segundo tambien es un objeto.
  }
  res.send(programacion); //Originalmente en esta línea estaba "res.send(JSON.stringify(programacion));", pero como el método "send", ya convierte "programacion" a formato .json, o sea, no hace falta poner "JSON.stringify".
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {

    //"splice", es método que nos permite cortar ese arreglo en un indice específico y eliminar uno o varios elementos a partir de ese corte:
    programacion.splice(indice, 1); //"indice", indica donde se va a cortar. "1" indica la cantidad de elementos  que se deben eliminar.
  }
  res.send(JSON.stringify(programacion)); //El método "send", ya convierte "programacion" a formato .json, o sea, no hace falta poner "JSON.stringify".
});

module.exports = routerProgramacion;









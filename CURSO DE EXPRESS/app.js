const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');

// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req, res) => { 
  res.send('Mi primer servidor. Cursos.'); 
});

//Creamos otro camino:
app.get('/api/cursos', (req, res) => { 
  res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000; 
app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});














/*TODO LO QUE CONTIENE ESTE COMENTARIO, FUE COMENTADO CON EL FIN DE TRABAJAR CON DISTINTOS ARCHIVOS .js Y ASI PODER TENER UN CODIGO MAS CONSISO Y SIMPLIFICADO.


const express = require('express'); //Importamos "express" para poder usarlo. Cuando lo importamos => tenemos acceso a una función que nos permite crear una aplicación de express.
const app = express(); //Llamamos a la función "express()" y eso nos va a retornar una aplicación de express.

//Normalmente trabajaríamos con una DB en un escenario de la real life, pero como en este curso no trabajamos con una Base de Datos => simulamos una DB ("cursos.js").

const {infoCursos} = require('./cursos.js');
//console.log(infoCursos);


//Creemos 'Routers' (que basicamente nos permiten reusar la parte inicial de una url, sin tener que reescribirla constantemente):
const routerProgramacion = express.Router(); //Cada Router tiene un nombre específico, porque va a tner su camino/path específico asociado. 
app.use('/api/cursos/programacion', routerProgramacion); //Llamamos al método "use", que le dice a 'Express' que utilice un camino específico y lo asocié a un Router específico (en este caso "routerProgramación").

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);

//Ahora vamos a implementar nuestras primeras rutas. En 'Express', es mucho mas fácil leer o saber que tipo de método o camino vamos a manejar y como lo vamos a hacer. Todo lo hacemos a través de la "app":
app.get('/', (req, res) => { //Escribimos "app." seguido del método http que vamos a manejar en la ruta (esto es lo que llamamos 'Routing', conocido como 'Direccionamiento' o 'Enrutamiento'). Dentro de los paréntesis pasamos el camino ("'/'") como una cadena de caracteres; y como segundo argumento una función flecha, que tiene como parámetros "req" y "res" (haciendo alución a la solicitud y a la respuesta).
  res.send('Mi primer servidor. Cursos.'); //Esto es lo que enviamos. Lo que verías en el browser.
});

//Creamos otro camino:
app.get('/api/cursos', (req, res) => { //Generalmente los programadores ponen "api" como un subdominio, si no lo ponés debería funcionar igual; lo dejo porque el curso lo hace de esta forma.
  res.send(JSON.stringify(infoCursos)); //Para aver esto en tu browser you have tu introduce "'localhost:3000/api/cursos'" en la barra de búsqueda.
});

routerProgramacion.get('/', (req, res) => { //AAcá originalmente estaba escrito: "app.get('/api/cursos/programacion', (req, res) => {", pero ahora es más consiso porque uso el 'Router' que definí arriba ("routerProgramacion").
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => { //Originalmente esta linea era: "app.get('/api/cursos/programacion/:lenguaje', (req, res) => {", pero ahora con el Router "routerProgramacion" queda más simplificada la lina de código. //Con ":" le digo que "leguaje" es un parámetro url, que se va a poder extraer de la solicitud/request "req".
  const lenguaje = req.params.lenguaje; //Se toma el objeto de la solicitud "req" y se accede a la propiedad "params" y a "lenguaje" (que es un parámetro en "cursos.js").
  
  //Filtramos la lista de cursos en base al lenguaje de programación.
  const resultados = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje); //Tomamos la información de los cursos y luego solo los cursos de programación ("infoCursos.programacion"), y filtramos ese objeto (con el método "filter()"); entre paréntesis aclaramos que solo vamos a incluir aquellos cursos cuyo lenguaje sea esactamente igual al lenguaje que obtuvimos como parámetro en el request (o sea si es gual a "lenguaje" definido arriba como "const lenguaje = req.params.lenguaje;").

  if(resultados.length === 0) { //Si no se encuentran cursos  => el tamaño/longitud de ese resultado será cero.
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`); //A parte de enviar el mensaje, establecemos/asignamos un "status" a esta respuesta ("404", porque es el código que salta cuando el recurso no fué encontrado/not found).
  }
  //Veamos un poco de parámetros 'query'. Son aquellos que se incluyen al final de la url que se introduce el la barra del browser, separados por un signo de interrogación y tienen un par calve-valor, ejemplo: 'http://localhost:3000/api/cursos/programacion/python?ordenar=vistas'. Donde "ordenar" es la clave y "vistas" es el valor. En nuestro servidor con 'Express', vamos a poder acceder al parámetro "ordenar" para lograr acceder a su valor "vistas". Veamos how hacerlo => vamos a implementar una funcionalidad para poder ordenar los resultados de acuerdo al número de vistas (o sea, en base a un criterio específico).
  console.log(req.query.ordenar); //Acá verifico si el user que ingresó la url en la barra de búsqueda del browser ingresó parámetros 'query' (en este caso si ingresó el parámetro "ordenar").Dicho parámetro es parte del objeto de solicitud (o sea del "req"). En el caso de que se haya introducido "http://localhost:3000/api/cursos/programacion/python?ordenar=vistas" => en el terminal te saldría "vistas".

  if (req.query.ordenar === 'vistas') {
    res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))); //El método "sort" nos permite ordenar una lista en base a un criterio. Y en este caso el criterio se puede definir con una función flecha. En este caso comparamos el número de vistas, dependiendo del signo del resultado es que vamos a lograr que un elemento ("a" o "b") esté primero, el resultado será positivo si "b" es mayor. Verías que se está ordenando de forma descendente (si cambiaras el criterio y pusieras "a.vistas - b.vistas" => se ordenarían de forma ascendente).
  } else { //Si no quisiera poner este "else", debí haber retornado lo que estaba dentro del "if" (algo así: "return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));"), => al cerrar las llaves del "if" bastaría con poner lo que contiene el "else" ("res.send(JSON.stringify(resultados));"), sin que esté dentro de dicho "else".
    res.send(JSON.stringify(resultados));
  }
  
  res.send(JSON.stringify(resultados));
});

//Digamos que ahora queremos filtrar por lenguaje y tambien por el nivel del curso =>:
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultados));
});

routerMatematicas.get('/', (req, res) => { //Originalmente esta lénea era: "app.get('/api/cursos/matematicas', (req, res) => {", pero ahora se está haciendo uso del 'Router' creado arriba "routerMatematicas" y queda más conciso.
  res.send(JSON.stringify(infoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(cursos => cursos.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.send(JSON.stringify(resultados));
});

//Si bien veniamos trabajando con un puerto especifico (poniamos "const PUERTO = 300;"), pero cuando estés en un ambiente real, por ejemplo, si ya estas almacenando o publicando tu aplicación en un servicio externo => el puerto se le va a signar a la aplicación, y puede que no sea el '3000' e incluso puede que se asigne de forma dinámica. En ese caso para tomar el puerto de esas variables de ambiente (environment) que configura el servicio que estás solicitando por tener tu aplicación en vivo => usamos lo siguiente:
const PUERTO = process.env.PORT || 3000; //Esto va a conseguir el valor del puerto, si es que dicho puerto está difinido como una variable en el ambiente (environment) donde se está ejecutando la aplicación de node. Si no está definido => se va a signar el puerto fijo "3000". Cabe aclarar que, vos podés elegir el puerto cuando estás desarrollando solo en tu dispositivo.

app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

*/













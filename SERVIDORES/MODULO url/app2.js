const http = require('http');

const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
const {method} = req; //Tomamos la solicitud (o sea la "req") y usando syntasis de desestructuración de .js extraemos la propiedad "method".

switch(method) { //Uso sentencia switch. Buscá más en internet de cómo funciona.
  case 'GET': //En el caso de que el método sea "GET" => se va a retornar el resultado de manejar la solicitud "GET".
    return manejarSolicitudGET(req, res); //Creo una función para manejer la solicitud "GET", y le paso la solicitud y la respuesta ("req" y "res") para que tenga acceso a esos objetos.
  
  case 'POST':
    return manejarSolicitudPOST(req, res);
  default:
    res.statusCode = 501 //El estado que se mostrará en la terminal.
    res.end(`El método no puede ser manejado por el servidor: ${method}`);
}
});

function manejarSolicitudGET(req, res) {
  const path = req.url; //El atributo "url" de la solicitud, es el camino luego de esa parte principal de lo que toda la 'url'.

  if(path === '/') {
    res.statusCode = 200; //El código sea "200" (que te lo muestra la terminal), que significa que toda la solicitud se pudo procesar adecuadamente. Si bien acá lo pongo, 'statusCode' aparece automáticamente por defecto cuando todo va bien jaj.
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js'); //Respuesta que se obtine.
  } else if (path === '/cursos') { //Digamos que quiero seguir por el camino "cursos".
    res.statusCode = 200; //"200" means 'todo okkkK'.
    return res.end(JSON.stringify(cursos.infoCursos)); //La respuesta que se enviará será la información de los cursos. Se convierte a formato JSON la información, que está almacenado dentro del objeto "cursos", contenido en "cursos.js". 
  } else if (path == '/cursos/programacion') {
    res.statusCode = 200; //Acordate que este estado te lo muestra la terminal, no el browser.
    return res.end(JSON.stringify(cursos.infoCursos.programacion)); //Esto si se muestra en el browser. Como es un obejto uso notación de puntos ("cursos.infoCursos.programacion") para acceder a sus propiedades.
  }
  
  //En el caso de que el user por error ingrese un path que no está siendo manejado por el servidor =>:
  res.statusCode = 404; //"404", esto representa 'recurso no encontrado/not found'.
  res.end('El recurso solicitado no existe...'); //El cliente recibiría esta respuesta, dado el caso.
}


//Vamos a usar la extensión "REST Client" instalada acá en Visual Studio Code, para simular una solicitud 'post' y ver lo que ocurre. Para ello cree "index.http".
function manejarSolicitudPOST(req, res) {
  const path = req.url;

  //Le daremos al user la posibilidad de agregar un curso sobre programación:
  if(path === '/cursos/programacion') {
    let cuerpo = ''; //Defino una variable que contendrá el cuerpo de la solicitud 'post'.
    
    req.on('data', contenido => { //Uso el método "on" (se usa mucho con 'eventos'). Defino que va a ocurrir cuando la solicitud/request ("req") reciba información, en ese caso el evento ya viene predeterminado y se llama "data"; cuando se recibe la información => se convierte ese contenido a cadena de caracteres y es asignada al cuerpo:
      cuerpo += contenido.toString();
    });

    req.on('end', () => { //Cuando ocurra el evento "end" (se termina de recibir la información) => se procesa la información que se asignó a la variable "cuerpo":
      console.log(cuerpo); //Deberías ver en el terminarl, lo que pusiste en el archivo "index.http".
      console.log(typeof cuerpo); //En el terminal deberías salir que es un string.

      cuerpo = JSON.parse(cuerpo); //Se convierte a un objeto de .js.

      console.log(typeof cuerpo); //Ahora te debería salir que es un object.

      console.log(cuerpo.titulo);

      res.end('El servidor recibió una solicitud POST para /cursos/programacion')
    });

    //return res.end('El servidor recibió una solicitud POST para /cursos/programacion'); 
  } 
};

const PUERTO = 3000;
servidor.listen(PUERTO, () => { //Podemos decir que este esta función flechas se ejecutará cuando el servidor comience el prceso de escuchar las solicitudes.
  console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
})


















const http = require('http');

const servidor = http.createServer((req, res) => { //"req", contiene la información de la solicitud HTTP que realizó el cliente al servidor. 
  /*
  //Esto es la 'solicitud':
  console.log('===> req (solicitud');
  //console.log(req);
  //console.log(req.url);
  console.log(req.method); //Este método "method", le va a decir al servidor cuál es el propósito de la solicitud (get, post, put, ... o cualquier otro vervo HTTP). Cuando cargues la página => vas a ver en el terminal GET, por ejemplo.
  console.log(req.headers);
  */

  //Veamos lo que hace la respuesta (res):
  console.log('===> res (respuesta');
  //console.log(res);
  console.log(res.statusCode); //Si ves "200" en el terminal al ejecutar "node app2.js" => means everything istá bien.


  res.end('Hola mundo');
});

const puerto = 3000;

servidor.listen(3000, () => {
  console.log(`El servidor está escuchando en el puerto ${puerto}...`);
})



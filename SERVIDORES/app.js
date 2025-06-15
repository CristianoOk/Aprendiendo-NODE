const http = require('http');

//Creamos un servidor (usando el método "createServer"), que cada vez que reciba una función ejecutará la función que haya dentro de los paréntesis.
const servidor = http.createServer((req, res) => { //El primer parámetro de la función flecha ("req"), contiene la solicitud HTTP; y el segundo representa la respuesta HTTP que se enviará al cliente que realizó la solicitud.
  console.log('Solicitud nueva'); //Cada vez que se actualice la página, podrás ver este mensaje en el terminal.
  res.end('Hola mundo'); //El método "end", nos permite enviar la respuesta al cliente (en este caso es el navegador).
}); 

const puerto = 3000;
servidor.listen(puerto, () => { //"puerto", es el valor del puerto donde vamos a ejecutar nuestro servidor. Y la función flecha es la que se ejecutará cuando se acceda a dicho puerto.
  console.log(`El servidor está escuchando en http://localhost:${puerto}...`);
}); //Al abrir la terminnal y ejecutar "node app.js" te aparecerá "El servidor se está ejecutando..."; y si, después de hacerlo ingresas a tu navegador y escribis "localhost:3000" te aparecerá "Hola mundo", ya que, el servido r se está ejecutando.




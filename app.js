/*
const saludo = require ("./saludos.js"); //Es la syntaxis de importación.
//const {saludarHolaMundo} = require ("./saludos.js"); //Estoy trayendo la propiedad "saludarHolaMundo" (si bien esta propiedad tiene asignada una función que llava el mismo nombre, hay que reconocer que esta es la propiedad, no la función), del objeto que está siendo exportado de "saludos.js". Como la estoy solicitando puedo usar directamente dicha propiedad acá en "app.js".

//console.log(saludarHolaMundo());
console.log(saludo.saludar("freeCodeCamp"));
*/

/*
console.log('¡HOLA MUNDO!');
console.warn('Ocurrió un error...');
console.error(new Error('¡Ocurrió un error!'));

//para lo de abajo ejecutá en la consola>> node app.js 7 9. Te vas a dar cuenta que genera un array, en donde cada elemento que lo compone es cada "palabra" de la sentencia que ejecutaste.
console.log(process.argv);// te mostraría un array tipo: [node, app.js, 7, 9].
console.log(process.argv[3]);// te mostraría el elemnto que está en la posición 3 del array que creó.

//También se puede usar un for para que muestre los elementos desde una cierta posición hasta el último que esté dentro del array, por ejemplo:
for(let i=2; i < process.argv.length; i++) {
  console.log(process.argv[i]);//Probá ejecutando "node app.js 1 5 8 9 6 12", y fijate que pasa.
}
*/

/*
const os = require('os') //Importo el módulo "os".
//  console.log(os.type()); //Me muestra el Sistema Operativo donde se está ejecutando.
os.type()//Nos permite tener acceso al tipo de Sistema Operativo en el cual se está ejecutando la aplicación de "node".
*/

/*
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

//mostrarTema('Node.js');

setTimeout(mostrarTema, 5000, 'Node.js'); //Esta función lo que hace es recibir como primer paramentetro a la función "mostrarTema", como segundo paramentro el tiempo (en milisegundos) que tiene que esperar para mostrar lo que hace la función "mostrarTema" una vez que haces correr la aplicación desde el terminal; y como tercer parametro tiene el argumento que tiene que recibir la función "mostrarTema" para funcionar (si precisara más argumentos => se ponen comas y se los introduce, tantos como se necesiten).
*/


/*
//Acá se mostrará el funcionamiento de la función setImmediate. Lo que hace es ejecutarse de manera asincróna inmediatamente después que el código sincrónico hay terminado su ejecución, sin necesidad que sea escrito al final del código (la sentencia puede estar detallada al inicio, a la mitad o al final, de todos modos se ejecutará al finalizar el código sincrónico).
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Node.js'); //La función recibe como primer parámetro a la función "mostrarTema", y como segundo parámetro el argumento de la función "mostrarTema".
console.log('Después de setImmediate()');
*/


/*
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}
setInterval(mostrarTema, 1500,'Node.js'); //Ejecuta la función "mostrarTema", cada 1500 milisegundos, infinitamente; si queres pararlo una vez que lo ejecutaste desde la terminal => podes usar "ctrl + c" y termina el proceso.
*/


const fs = require('fs')

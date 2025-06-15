const promesaCumplida = false;

//Así se define una promesa:
const miPromesa = new Promise((resolve, reject) => { //La promesa necesita como argumento una función (en este caso le pasamos una función flecha); la función flecha tiene como parámetros "resolve" y "reject", que a su vez son funciones (pude haber usado cualquier nombre distinto).
  setTimeout(() => { //Acordate que la función "setTimeout" (lo usamos porque las promesas son procesos asíncronos), funciona para que haga algo que tenga adentro (en este caso una función flecha) cuando transcurra un determinado tiempo (en este caso "3000" milisegundos, 3 segundos).
    if (promesaCumplida) { //Si se cumple que "promesaCumplida" es true => se llamará a la función "resolve".
      resolve('¡Promesa cumplida!'); //Adentro de los paréntesis ponemos lo que queremos que devuelva la función "resolve" como valor.
    } else {
      reject('Promesa rechazada...') //Si la promesa es rechazada => "miPromesa" queda con el valor que aparece dentro de estos paréntesis (en este caso un string que dice "'Promesa rechazada...'").
    }
  }, 3000);
});

/*
//Si se 'resuelve' la promesa "miPromesa" => funciona el método "then", o sea, cuando promesa es exitosa; en el caso de que la promesa sea 'rechazada' el "then" no sucede.
miPromesa.then((valor) => { //La función flecha recive como parametro el valor que tendrá "miPromesa" después de haberse cumplido EXITOSAMENTE. ¡Ojo!, el método "then" reconoce que lo que le pasas como argumento a la función flecha que vive dentro de él, es el valor que recibe la promesa al ser cumplida y no rechazada => la función flecha esta recibiendo dicho value como paramentro y le asigna el nombre de "valor", pero tranquilamente la pudo haber recibido/identificado como "laMERAMERA-JAJAJA" (o sea, con cualquier name), porque solo necesito darle un nombre al recibirla para poder identificarlo si se necesita dicho parámetro en algún momento dentro de la misma función flecha (que como verás lo uso en el "console.log()").
  console.log(valor);
});
*/


/* ESTO ESTA COMENTADO, 'CAUSE ABAJO HAY UNA FORMA MAS COMPACTA DE HACER LO MISMO QUE CONTIENE TODO ESTE COMENTARIO.
//Por el motivo de que lo que está comentado arriba solo funciona cuando la promesa es cumplida y no cuando es rechazada, creamos lo siguiente:
const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada); //Se ejecutará uno u otro según sea el caso. Se pasa como primer argumento a la función que se tiene que llamar si se cumple la promesa, y como segundo parámetro a la función que se ejecutaría si se rechaza la promesa.
*/

miPromesa
  .then((razonRechazo) => {
    console.log(razonRechazo);
  })
  /*
  .then(null, (razonRechazo) => {
    console.log(razonRechazo);
  })*/
  //Acá usaremos el método "catch", que podríamos decir que es un contraste de "then", ya que, funciona automáticamente para el caso de que la promesa sea rechazada; mientras que si usase "then" para el rechazo deberia poner como primer parámetro "null".
  .catch((razonRechazo) => {
      console.log(razonRechazo);
    })





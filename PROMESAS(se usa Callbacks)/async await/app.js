function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp`);
    setTimeout(() => {
      if(producto === 'taza') {
        resolve('Ordenando una taza con el logo de freeCodeCamp...');
      } else {
        reject('Este producto no está disponible actualmente.');
      }
    },2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise(resolve => { //Te podes dar cuenta que omití el parámetro "reject" pués no iba a hacer uso de él.
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000);
  })
}


/*
//Ahora vamos a encadenar promesas, y así asegurarnos de que se van ejecutar en el orden que necesito que lo hagan (porque recordá que las promesas son asíncronas). Esto se llama 'Chanining Promises'.
ordenarProducto('taza')
  .then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta); //Creo que sin esta línea, igual te mostraía la respuesta. Probá.
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(error => {
    console.log(error);
  })
//ABAJO HACEMOS LO MISMO QUE ESTA EN ESTE COMENTARIO, PERO USANDO 'async await'
*/


//El 'async await', permite que una promesa espere a que se cumpla otra para recien ejecutarse, porque son asincrónicas.
async function realizarPedido(producto) {
  try{ //Sirve para que se ejecute lo que hay dentro. Si por ejemplo, la promesa por la que espera es resuelta => avanza, sino, salta al "catch".
    const respuesta = await ordenarProducto(producto); //El "await" hace que espere que se cumpla la promesa "ordenarProducto" para hacer lo que se pide y avanzar de forma sincrónica con las lineas de abajo.
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch(error) { //Lo que hace este "catch" es tomar el rechazo de la promesa "ordenarProducto", cuando no es resuelta evidentemente. Acordate que el parámetro "error" que está recibiendo es el valor que entrega la promesa cuando es 'reject', y elegí resivirla con dicho nombre ("error") pero pude haber escogido cualquier otro nombre, ya que, el "catch" siempre recibe los rechazos de las promesas.
    console.log(error);
  }
}

realizarPedido('taza');
//realizarPedido('Tarzán'); 



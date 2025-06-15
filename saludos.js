function saludar(nombre) {
  return `Hola ${nombre}`
}

function saludarHolaMundo() {
  return 'Hola Mundo';
}
//module.exports.saludar = saludar;//"module.exports", es un objeto, el que se exportará. Como es un objeto => le agrego una propiedad("saludar") con un punto precediendo el nombre de la propiedad. "module.exports.saludar = saludar", del lado izquierdo de la iggualdad se tiene el objeto con su propiedad, que lleva el nombre "saludar", y se le asigna la función "saludar" del lado derecho; tienen el mismo nombre tanto la propiedad como la función que se le asigna a dicha propiedad, no necesariamente la propiedad debe llamarse igual que lo que se le asigne.
//module.exports.saludarHolaMundo = saludarHolaMundo;

//Otra forma de escribir lo mismo sería:
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};
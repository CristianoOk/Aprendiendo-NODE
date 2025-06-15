const EventEmitter = require('events'); //Estoy incluyendo/importanto el módulo "events". El "EventEmitter", si bien es una const, le puse el mismo nombre que una clase que viene dentro del módulo "events".

const emisorProductos = new EventEmitter(); //Uso la palabra clave "new", para crear una nueva instancia de la 'clase' "EventEmitter", un nuevo objeto que me permitirá emitir eventos; ese objeto/emisor se llama "emisorProductos".


//Acá lo que básicamente le estamos diciento a "emisorProductos", es que si ocurre el evento "'compra'" => que haga lo que diga la función asociada (en este caso la función flecha).
emisorProductos.on('compra', (total, numProductos)=> { //A través de nuestro emisor llamamos al método "on" para decir: Cuando ocurra el evento que lleva por nombre "'compra'" => definimos la función flecha para manejar ese evento (en lugar de dicha función flecha, pude haber puesto alguna función la que yo quiera que maneje el evento cuando ocurra).
    console.log(`Se realizó una compra por: $${total}`);
    console.log(`Número de productos: ${numProductos}`);
})


//Acá le estoy diciendo que se produzca el evento "'compra'". En consecuencia, si esto nunca se sucede => "emisorProducto.on(..." que se encuentra arriba no hará nada.
emisorProductos.emit('compra', 500, 7); //Hago uso del método "emit". "5oo" y "7", son los parámetros que recibe la función flecha que se ejecuta cuando se emite el evento "'compra'".



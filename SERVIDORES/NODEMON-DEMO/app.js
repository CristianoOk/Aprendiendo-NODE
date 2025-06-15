const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Estoy aprendiendo NodeEEES.js'); //Este mensaje lo podes ir cambiando para ver que se actualiza solo sin necesidad de "to kill" el terminal cada vez que haces un cambio. Para iniciar leé el archivo "notes.txt".
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
});
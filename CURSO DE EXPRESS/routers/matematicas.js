const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos; //Agregar ".inforCursos", sirve para poder obtener los cursos de "matematica" directamente. Al escribir "require('../datos/cursos.js')" se logra importar un objeto, dicho objeto tendría una propiedad llamada "inforCursos" y luego con sintaxis de desestruccturación ("const {matematicas}") se puede obtener la propiedad "matematicas". Sin ".infoCursos", cada vez que necesites usar la propiedad "matematicas" en tu código tendrías que tipear "infoCursos.matematicas".

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) => { 
  res.send(JSON.stringify(matematicas)); //Originalmente se tenía "res.send(JSON.stringify(infoCursos.matematicas));", but como ahora se está importando directamente arriba "const {matematicas} = require('../datos/cursos.js')" => no hace falta usar esta notación, directamente se puede tener "matematicas", sin el "infoCursos".
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(cursos => cursos.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;











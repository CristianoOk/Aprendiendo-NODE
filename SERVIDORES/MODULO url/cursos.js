let infoCursos = {
  'programacion' : [
    {
      id: 1,
      titulo: 'Aprende Python',
      lenguaje: 'Python',
      vistas: 15000,
      nivel: 'basico'
    },
    {
      id: 2,
      titulo: 'Python intermedio',
      lenguaje: 'Python',
      vistas: 13553,
      nivel: 'intermedio'
    },
    {
      id: 3,
      titulo: 'Aprende JavaScript',
      lenguaje: 'JavaScript',
      vistas: 102223,
      nivel: 'basico'
    }
  ],
  'matematicas' : [
    {
      id: 1,
      titulo: 'Aprende Calculo',
      tema: 'calculo',
      vistas: 12427,
      nivel: 'basico'
    },
    {
      id: 2,
      titulo: 'Aprende Algebra',
      tema: 'algebra',
      vistas: 15722,
      nivel: 'intermedio'
    }
  ]
}


module.exports.infoCursos = infoCursos; //En el obejto de exportaciones de este módulo cursos tenemos la propiedad "infoCursos" ("module.exports.infoCursos"), y le asignamos el obejto "infoCursos" (o sea, lo que está después del =).
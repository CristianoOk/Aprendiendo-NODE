/*
//Para ejeutar en la terminal esto deberías escribir: "node json-demo.js" y dar enter.
const curso= require('./curso.json');

console.log(curso);
console.log(curso.titulo);
console.log(curso.temas);
*/


//Ahora veamos como convertir un objeto en .js a un formato "string" del tipo json (string, ya que, los json son simples cadenas de caracteres.):
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
    "JavaScript",
    "Node.js"
    ],
    "esPublico": true
  };
//Ahora pasemos el objeto "infoCurso" a cadena de caracteres en formato JSON:
let infoCursoJSON = JSON.stringify(infoCurso); //Lo que está dentro de paréntesis es lo que se va a convertir en cadena de caracteres, en un formato del tipo JSON (ya que, json es eso una cadena de caracteres).

console.log(infoCursoJSON); //Te va a mostrar la organización que presenta "infoCursoJSON" ahora que tiene asignado "infoCurso" que fué convertido a string.
console.log(typeof infoCursoJSON); //Con esta sentencia va a poder ver que ahora "infoCurso" se convirtió en un string.


//Ahora convertimos la cadena de caracteres y la convertimos a Objeto de .js:
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoJSON);
console.log(typeof infoCursoObjeto);
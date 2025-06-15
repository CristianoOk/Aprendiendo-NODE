//Creamos un objeto url, usando la palabra clave "new":
const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1'); //Usamos la clase "URL", la cual está disponible de forma global gracias al módulo url de 'node'. En un servidor real tendríamos la url (lo que aparece entre paréntesis) de la solicitud; acá inventé una.

console.log(miURL.hostname); //Cuando ejecutés "node app.js" en la terminal, te mostraría "www.ejemplo.org".

console.log(miURL.pathname); //Cuando ejecutés "node app.js" en la terminal, te mostraría "/cursos/programacion".

console.log(miURL.searchParams);
console.log(typeof miURL.searchParams);
console.log(miURL.searchParams.get('ordenar')); //Lo que está dentro de paréntesis, primero accede al ojeto y luego con el método "get" se obtiene el valor de "odernar"; cuando ejecutés la terminal te saldrá que dicho valor es "vistas".
console.log(miURL.searchParams.get('nivel'));













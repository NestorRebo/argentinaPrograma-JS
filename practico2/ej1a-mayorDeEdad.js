/*1. Escribe un programa para cada uno de los siguientes enunciados:
a. Solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18,
muestra por consola el mensaje: "Eres mayor de edad". De lo contrario,
muestra por consola el mensaje: "Eres menor de edad". Guardar en un
archivo llamado mayorDeEdad.js
*/

const readlineSync=require('readline-sync');
const mayorDeEdad=readlineSync.question('ingrese su edad ' );

if (mayorDeEdad < 18) {
     edad = "Eres menor de edad ";
}else{
     edad = "Eres mayor de edad";
}

console.log('%s', edad);

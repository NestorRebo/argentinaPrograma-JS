/*b. Solicite al usuario ingresar un número. Si el número es positivo, muestra
por consola el mensaje: "El numero es positivo". Si el número es igual a
cero, muestra por consola el mensaje: "El numero es cero". Si el número
es negativo, muestra por consola el mensaje: "El numero es negativo".
Guardar el programa en un archivo con nombre positivoNegativo.js
*/

const readlineSync=require('readline-sync');
const numeroElegido = readlineSync.question('ingrese un numero ' );

if (numeroElegido < 0) {
     numero = "El numero es negativo ";
}else if (numeroElegido > 0){
     numero = "El numero es positivo";
}else{
    numero = "El numero es cero"
}

console.log('%s', numero);
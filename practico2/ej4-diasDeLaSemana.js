/*4. Escriba un programa que solicite al usuario ingresar un número del 1 al 7
representando un día de la semana. Guardar el programa en un archivo
diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
- Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
- Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
- Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
- Y así sucesivamente …
- Para cualquier otro número, muestra por consola el mensaje: "Número
inválido".
NOTA: utilizar la sentencia switch-case
*/

const readlineSync=require('readline-sync');
const numeroElegido = readlineSync.question('ingrese un numero del 1 al 7: ' );

switch (numeroElegido){
    case '1':
        dia = "lunes"
    break;

    case '2':
        dia = "martes"
    break;

    case '3':
        dia = "miércoles"
    break;

    case '4':
        dia = "jueves"
    break;

    case '5':
        dia = "viernes"
    break;

    case '6':
        dia = "sabado"
    break;

    case '7':
        dia = "domingo"
    break;
}

console.log('Hoy es %s', dia);
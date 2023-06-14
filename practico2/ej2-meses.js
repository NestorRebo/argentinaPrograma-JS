/*2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al
12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
consistirá de imprimir por consola la cantidad de días que tiene el mes
ingresado bajo el siguiente formato:
"La cantidad de dias del mes de [mes] es [cantidadDeDias]"
Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
de dias del mes de enero es 31”.
NOTAS:
● Nota que el valor de [mes] no es el numero ingresado si no su
correspondiente almacenado en la estructura de datos elegida.
● Para el alcance de este ejercicio, podemos pensar que febrero siempre
tiene 28 días.
*/

const readlineSync=require('readline-sync');
const numeroElegido = readlineSync.question('ingrese un numero ' );

switch (numeroElegido){
    case '1':
        mes = 'Enero';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;
    
    case '2':
        mes = 'Febrero';
        numero = 28;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '3':
        mes = 'Marzo';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;
    
    case '4':
        mes = 'Abril';
        numero = 30;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '5':
        mes = 'Mayo';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '6':
        mes = 'Junio';
        numero = 30;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '7':
        mes = 'Julio';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '8':
        mes = 'Agosto';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '9':
        mes = 'Septiembre';
        numero = 30
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '10':
        mes = 'Octubre';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '11':
        mes = 'Noviembre';
        numero = 30;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;

    case '12':
        mes = 'Diciembre';
        numero = 31;
        console.log('La cantidad de dias del mes %s de dias es %i', mes,numero);
    break;
    
    default:
    console.log("no es un numero valido");
}


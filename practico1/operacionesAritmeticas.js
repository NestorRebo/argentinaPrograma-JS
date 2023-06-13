/* Operadores aritméticos:
a. Crea cuatro variables que contengan valores numéricos.
b. Suma las dos primeras variables y guarda el resultado en otra variable.
c. Resta la cuarta variable de la tercera y almacena el resultado en otra
variable.
d.Multiplica los resultados de los dos últimos pasos juntos, almacenando el
resultado en una variable llamada resultadoFinal. El producto debe ser
44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
e.Escribe un cálculo que verifique si resultadoFinal es un número par.
Almacene el resultado en una variable llamada esPar.
f. Imprima por consola un mensaje con el siguiente formato:
“Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
respuesta a verificar si el resultado final es par es: [esPar]”
g.Deberá guardar este programa en un archivo llamado
operacionesAritmeticas.js
*/

let  num1= 6;
let  num2= 6;
let  num3= 4;
let  num4= 6;
let esPar;


let suma = num1 + num2 + num3 + num4;
console.log(suma);

let resta = num4 - num3;
console.log(resta);

let resultadoFinal = suma * resta;
console.log(resultadoFinal);


esPar = resultadoFinal%2 === 0;
console.log(esPar)

console.log("“Mis variables iniciales fueron: "+ num1 + " , " + num2 + " , " + num3 + " y " + num4 + 
" . La respuesta a verificar si el resultado final es par es: " + esPar);
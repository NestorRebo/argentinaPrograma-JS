/*
Manejo de arreglos: Deberás crear un programa y guardarlo en el archivo
frutas.js que cumpla los siguiente requisitos:
a.Crea un arreglo vacío con el nombre de frutas.
b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de
variables o no.
c.Deberás obtener el última fruta agregada y guardarla en la variable
ultima. Además deberás imprimir su valor por consola, respetando el
siguiente formato
“La ultima fruta agregada fue: [ultima]”
d.Deberás obtener la primera fruta agregada y guardarla en la variable
primera. Además deberás imprimir su valor por consola, respetando el
siguiente formato
“La primera fruta agregada fue: [primera]”
*/

let frutas;

frutas = ["manzana", "banana", "anana", "naranja", "kiwi"];

let ultima = frutas[4];
console.log("La ultima fruta agregada fue: " + ultima);

let primera = frutas[0];
console.log("La primera fruta agregada fue: " + primera);
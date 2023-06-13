/*2. Dada una variable cadena de tipo String queremos saber si sólo tiene letras.
La misma idea que antes pero ahora para chequear si c es una letra usamos:
RegExp(/^\p{L}/,'u').test(c)*/

let cadena = RegExp(/^\p{L}/,'u').test('c');
console.log(cadena);
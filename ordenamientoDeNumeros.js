let array = [2, 5, 0, 2, 3, 4];

for (let i = 0; i < array.length - 1; i++) {
    let posicionDelMinimo = i;
    for (let j = i; j < array.length; j++) {
        if (array[j] < array[posicionDelMinimo]) {
            posicionDelMinimo = j;
        }
    }
    let temp = array[i];
    array[i] = array[posicionDelMinimo];
    array[posicionDelMinimo] = temp;

}
console.log(array);
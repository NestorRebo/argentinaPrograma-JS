let admitidos= ['Maria', 'Juan', 'Andres', 'Lionel', 'Leandro', 'Emilia'];
let admitidosOrdenados = [];
let temp

for (let i = 0; i < admitidos.length - 1; i++) {
    let posicionDelMinimo = i;
    
    for (let j = i; j < admitidos.length; j++) {
        if (admitidos[j] < admitidos[posicionDelMinimo]) {
            posicionDelMinimo = j;
        }
        
}

 //   let temp = admitidos[i];
    let temp = admitidos[i];
    admitidosOrdenados[i] = admitidos[posicionDelMinimo] ;
    admitidos[posicionDelMinimo] = temp;
}



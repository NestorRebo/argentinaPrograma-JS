const readlineSync = require('readline-sync');

let ppt = ["piedra", "papel", "tijera"];

function obtenerJugadaComputadora() {
    
    eleccion = Math.round(Math.random() * 2);
    return ppt[eleccion];
}

jugadaComputador = obtenerJugadaComputadora();

function obtenerJugadaUsuario() {
    let pregunta1 = readlineSync.question('ingrese el numero de su opcion: \n [0] piedra , [1] papel o [2] tijera ')
    return ppt[pregunta1];
}

jugadaUsuario = obtenerJugadaUsuario();

function determinarGanador(jugadaUsuario,jugadaComputador){

    if ((jugadaUsuario == "piedra" && jugadaComputador == "tijera")
    || (jugadaUsuario == "tijera" && jugadaComputador == "papel")
    || (jugadaUsuario == "papel" && jugadaComputador == "piedra")){

        return "JUGADOR GANA LA RONDA";
    }else if(jugadaUsuario == jugadaComputador){
        
        return "EMPATE";
    }else{
        return "COMPUTADORA GANA LA RONDA";
    }
}


console.log('La computadora eligio: ' + jugadaComputador + '.\n El usuario eligio: ' + jugadaUsuario+ '.\n El resultado fue: ' + determinarGanador(jugadaUsuario,jugadaComputador) + '.' );


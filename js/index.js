// Piedra, Papel, Tijera  

const resumenPartida={victorias:0 , nombre:"", rondas:1}
const tabla=document.getElementById("tabla")

const datosTabla=[]

resumenPartida.nombre=prompt("Ingresa tu nombre")
let jugador;
let pc;

let puntosJugador =0

let puntosPc =0
let ronda=1


function aleatoria() {
    return ""+Math.ceil (Math.random()*3)
}




function eleccion (jugador){
switch (jugador) {
    case "1":
        return "Piedra"
        break;
    case "2":
        return "Papel"
        break;
    
    case "3":
        return "Tijera"
        break;

        case "4":
            return "Fin de juego"
            break;

    default:
        return "selecciona una opcion valida"
        break;
}
}

function ganaJugador(){
    puntosJugador++
}
function ganoPc() {
    puntosPc++
}

do{
    resumenPartida.rondas=ronda
console.log ("-------------- " + ronda+ " ----------------")

    console.log ("tus puntos "+puntosJugador)
    resumenPartida.victorias=puntosJugador
    datosTabla.push(resumenPartida)

    console.log ("los puntos del pc son " +puntosPc)

jugador = prompt ("Elije: 1-Piedra, 2-Papel, 3-Tijera 4-cerrar");
console.log("tu eleccion fue: "+ eleccion (jugador))

if (jugador==="1" || jugador==="2" || jugador==="3"){
    ronda++
    pc = aleatoria(); 
console.log("La pc eligio: " + eleccion (pc))



if (jugador == pc){
    console.log("Empate")
}
else if (jugador==1 && pc==3){
    ganaJugador();
    console.log("Ganaste");

}
else if (jugador==2 && pc==1){
    ganaJugador();
    console.log("Ganaste")

} 
else if (jugador==3 && pc==2){
    ganaJugador();
    console.log("Ganaste")
}

else{
    ganoPc();
    console.log("Perdiste");
    
};
}


} while ( jugador!=4){
}
datosTabla.forEach((el)=>{
    tabla.innerHTML+=`
    <tr>
    <td>${el.nombre}</td>
    <td>${el.victorias}</td>
    <td>${el.rondas}</td>
</tr>`
    })
/* se debe elegir la opcion 4 para ejecurtar la tabla */







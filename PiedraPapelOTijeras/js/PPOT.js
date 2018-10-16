while(true)
{

var Usuario = prompt("Escoge piedra, papel o tijeras");
var Computadora = Math.random();
if (Computadora < 0.34) {
    Computadora = "piedra";
} else if(Computadora <= 0.67) {
    Computadora = "papel";
} else if(Computadora <=1){
    Computadora = "tijeras";
}

var comparando = function(eleccion1, eleccion2) {
    if(eleccion1 === eleccion2) {
    alert("Triste empate :(");
}
if(eleccion1 === "piedra") {
    if(eleccion2 === "tijeras") {
        alert("Piedra vence a tijeras");
    } else if(eleccion2==="papel"){
        alert("Lo lamento piedra, gana el papel");
    }
}
if(eleccion1 === "papel") {
    if(eleccion2 === "piedra") {
        alert("Sorry, papel vence piedra");
    } else if(eleccion2 === "tijeras") {
            alert("Tijeras destrozan papel");
    }

}
if(eleccion1 === "tijeras") {
    if(eleccion2 === "piedra") {
        alert("Te mato la piedra :v");
    } else if(eleccion2 === "papel") {
            alert("El papel fue hecho trizas por las tijeras");
        }
    
}
}
console.log(comparando(Usuario, Computadora));
}
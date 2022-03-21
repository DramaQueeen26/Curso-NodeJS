//Primero con var

var nombre = 'Wolverine'; //Var crea una variable en el ámbito global

if(true){
    var nombre = 'Magneto'; //Aquí redeclara la variable y esta toma el nombre de Magneto
}

console.log(nombre);

//YA NO SE USA VAR. NO USAR!!


//Ahora con let

let nombre2 = 'Wolverine'; 

if(true){
    let nombre2 = 'Magneto'; //Aquí redeclara la variable y esta toma el nombre de Magneto solo dentro del condicional
    //Si se le quita el let la variable se reescribe de manera global (también fuera del condicional) En pocas palabras funciona como una variable normal
    console.log(nombre2);
}

console.log(nombre2);

//Ahora con constante

const nombre3 = 'Wolverine'; //Las constantes nunca cambian su valor

if(true){
    const nombre3 = 'Magneto'; //Pero si se vuelve a declarar dentro de un scope(el condicional) si funcionará, parecido a let
    console.log(nombre3);   
}

console.log(nombre3);
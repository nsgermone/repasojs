// with var
var music = 'Rock';

if(music) {
    var music = 'Grunge';
    console.log('Inside if: ', music); // Grunge
}

console.log('Outside if: ', music); // Grunge

// with let
let music = 'Rock';

if(music) {
    var music = 'Grunge';
    console.log('Inside if: ', music); // Grunge
}

console.log('Outside if: ', music); // Rock

// Template Strings
const nombre = 'Juan';

// Function declaration
function saludar(nombre) {
    console.log('Welcome: ' + nombre);
}
saludar('Juan');

// Function expression
const cliente = function(nombreCliente) {
    console.log(`Client data: ${nombreCliente}`);
}
cliente('Nick');

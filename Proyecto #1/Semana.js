let dia1 = 'Lunes'
let dia2 = 'Martes'
let dia3 = 'Miércoles'
let dia4 = 'Jueves'
let dia5 = 'Viernes'
let dia6 = 'Sábado'
let dia7 = 'Domingo'
let diaUsuario = prompt('¿Qué día de la semana es?');

console.log(diaUsuario);

if (diaUsuario == dia7 || diaUsuario == dia6) {
    alert('¡Buen fin de semana!');
} else {
    if (diaUsuario == dia5 || diaUsuario == dia4 || diaUsuario == dia3 || diaUsuario == dia2 || diaUsuario == dia1){
        alert('¡Buena semana!');
    }
}
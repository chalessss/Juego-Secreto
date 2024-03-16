//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario =0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    /*
    Así podemos imprimir en la consola de Google el valor entregador por el usuario
    */
    console.log(numeroUsuario);
    /* 
    El = es para asignar
    El == es para comparar
    */
    if (numeroUsuario == numeroSecreto) {
        // Esta alerta es para cuando el valor es identico
        alert(`Adivinaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('Lo siento, el número es mayor');
        }
        intentos = intentos + 1;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`LLegaste al número máximo de ${maximosIntentos}`);
            break;
        }
        // Esta alerta después del "esle" es para saber que ocurre si falla el valor
        
    }
}
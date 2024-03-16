
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function mostrarMensajeEnLaConsola (){
    console.log('El botón fue oprimido');
}

function mostrarAlerta (){
    let ciudad =prompt('Por favor, ingresa el nombre de una ciudad de Brasil:');
    alert("Estuve en " + ciudad + " y me acordé de ti");
}

function mostrarAlerta (){
    alert('Amo JS');
}

function sumaDosNumeros (){
    let primerNumero =parseInt(prompt('Escriba el primer número:'));
    let segundoNumero =parseInt(prompt('Escriba el segundo número'));
    let resultado = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
}

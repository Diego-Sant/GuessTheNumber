let vitoria = document.getElementById('wins');
let localVitorias = localStorage.getItem('localVitorias') || 0;
vitoria.innerHTML = localVitorias;

let derrota = document.getElementById('loses');
let localDerrotas = localStorage.getItem('localDerrotas') || 0;
derrota.innerHTML = localDerrotas;

let computerNumber;
let usersNumbers = [];
let tentativas = 0;
let maxTentativas = 8;

function reiniciarJogo() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value);
    usersNumbers.push(' ' + userNumber);
    document.getElementById('guesses').innerHTML = usersNumbers;

    if (tentativas < maxTentativas) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = "Seu número é maior";
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas;
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = "Seu número é menor";
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas;
        }
        else {
            document.getElementById('textOutput').innerHTML = "Parabéns! Você acertou!";
            localVitorias++
            localStorage.setItem('localVitorias', localVitorias);
            vitoria.innerHTML = localVitorias;
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = "Você perdeu!, o número era " + computerNumber;
        localDerrotas++
        localStorage.setItem('localDerrotas', localDerrotas);
        derrota.innerHTML = localDerrotas;
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}

function preventOutOfRange(event) {
    const input = event.target;
    const value = parseInt(input.value + event.key);
    if (isNaN(value) || value > 100 || value == "e" || value == 0) {
      event.preventDefault();
    }
}
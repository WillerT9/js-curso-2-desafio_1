let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function validarChute(){
    console.log('O botão foi clicado!');
}

function alertButton(){
    alert('Eu amo JS!');
}

function promptButton(){
    let cidade;
    cidade = prompt('Em que cidade você esteve?');
    alert(`Estive na cidade de ${cidade}, e lembrei de você!`);
}

function somaButton(){
    let numero1;
    let numero2;
    numero1 = parseInt(prompt('Escreva um número inteiro:'));
    numero2 = parseInt(prompt('Escreva um segundo número inteiro:'));
    let soma;
    soma = numero1+numero2;
    alert(`O resultado da soma de ${numero1} + ${numero2} é de ${soma}!`);
}
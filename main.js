const novaTarefa = document.querySelector('.botao-confirmar');

const input = document.querySelector('input');

const valor = input.checked;

console.log(valor);

novaTarefa.addEventListener('click', () => {console.log("Foi clicado")});
//[2].Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const number = document.getElementById('number');
const btn = document.getElementById('btn');
const numberUser = 1;
const lista = document.querySelectorAll('.list');
const numeroInicial = document.querySelector('.selected');
const mensagemResultado = document.getElementById('resultado');
const div = document.querySelector('.text');
const textNumeroEscolhido = document.getElementById('numero-escolhido');
let numeroApostado = parseInt(numeroInicial.innerText);

lista.forEach((element) => element.addEventListener('click',(e) => {  
  const selected = document.querySelector('.selected'); 
  selected.classList.remove('selected');
  e.target.classList.add('selected');
  numeroApostado = parseInt(e.target.innerText);
  textNumeroEscolhido.innerText = `Você escolheu o número: ${e.target.innerText}`;
}
));

btn.addEventListener('click', () => {  
  number.innerText = '';
  mensagemResultado.innerText = '...';
  const result = setTimeout(() => sorteioVini,5000);   
  const style = 'rotateX(720deg)'; 
  div.style.transform = style;
  const msg = () => mensagemResultado.innerText = sorteioVini(numeroApostado);
  const exibirMsg = setTimeout(msg,3000);  
  textNumeroEscolhido.innerText = `Você escolheu o número: ${numeroApostado}`;
});

const sorteioVini = (numeroApostado) => {
  div.style.transform = '';
  const numeroSorteado = Math.floor(Math.random() * 5 + 1);
  const numeroUsuario = numeroApostado;  
  const check = () => numeroUsuario === numeroSorteado ? "Parabéns você ganhou" : "Tente novamente";  
  const sort = () => number.innerText = numeroSorteado;
  const exebirNumeroSorteado = setTimeout(sort, 100);
  return check();
};

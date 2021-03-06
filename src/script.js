var contador = document.querySelector('.badge');

document.querySelector('button').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});
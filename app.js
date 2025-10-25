let botaoPrece = document.getElementById('conteudo__ancoras__botoes')
let imgGaya = document.getElementById('conteudo__img')

botaoPrece.addEventListener('click', () => {
    imgGaya.src = 'gaya-eating.gif';

    setTimeout(() => {
    imgGaya.src = 'gaya.png';
    }, 3000);
});
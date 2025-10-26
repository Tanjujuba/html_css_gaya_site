let botaoPrece = document.getElementById('conteudo__ancoras__botoes')
let imgGaya = document.getElementById('conteudo__img')

botaoPrece.addEventListener('click', () => {
    imgGaya.src = './img/gaya-eating.gif';

    setTimeout(() => {
    imgGaya.src = './img/gaya.png';
    alert('Hmmm! Arigatowwwww!');
    }, 3000);

} );

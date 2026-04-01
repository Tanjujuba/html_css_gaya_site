let botaoPrece = document.querySelector('.conteudo__ancoras__botoes')
let imgGaya = document.getElementById('conteudo__img')

botaoPrece.addEventListener('click', () => {

    if(imgGaya.src == './img/gaya.png') {

        setTimeout(() => {
        imgGaya.src = './img/gaya.png';
        alert('Hmmm! Arigatowwwww!');
        }, 3000);

    } else {

        imgGaya.src = './img/gaya-fighting.gif';
        setTimeout(() => {
        imgGaya.src = './img/gaya-angry.png';
        alert('Dame un Grrr!');
    }, 8000); 

    }  

} );

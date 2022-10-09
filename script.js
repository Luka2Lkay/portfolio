const burger = document.getElementById('burger__menu');
const navUl = document.querySelector('.nav__list');

burger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
    burger.classList.toggle('change');
})

const typed = new Typed (".typing", {
strings: ['Lukhanyo Matshebelele'],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

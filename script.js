const openMenu = document.querySelector('.open__menu');
const closeMenu = document.querySelector('.close__menu');
const navUl = document.querySelector('.nav__list');

const show = () => {
    navUl.style.display = 'grid';
    navUl.style.top = '0';
}

const close = () => {
    navUl.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);





const typed = new Typed (".typing", {
strings: ['Lukhanyo Matshebelele'],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

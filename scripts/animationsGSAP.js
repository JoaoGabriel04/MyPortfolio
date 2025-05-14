const hero = document.getElementById('home');
const subtitleHero = hero.querySelector('h3');
const titleHero = hero.querySelectorAll('h1');
const paragraphHero = hero.querySelector('p');
const buttonHero = hero.querySelector('a');
const imageHero = document.querySelector('.img-container');

const menu = document.getElementById('header');

const firstLine = document.getElementById("firstLine");

let tl = gsap.timeline({ defaults: { duration: 1 } });

tl.fromTo(subtitleHero,
    { opacity: 0, x: '-10vw' },
    { opacity: 1, x: '0vw', delay: 1 })
    .fromTo(titleHero,
        { opacity: 0, x: -100 },
        { opacity: 1, x: '0vw', delay: -0.2 })
    .fromTo(paragraphHero,
        { opacity: 0, x: '-10vw' },
        { opacity: 1, x: '0vw', delay: -0.2 })
    .fromTo(buttonHero,
        { opacity: 0, x: '-10vw' },
        { opacity: 1, x: '0vw', delay: -0.2 })
    .fromTo(imageHero,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1 })
    .fromTo(menu,
        { opacity: 0, y: '-10vh' },
        { opacity: 1, y: '0vh' })
    .fromTo(firstLine,
        { opacity: 0, scale: -1 },
        { opacity: 1, scale: 1 });

tl.set(hero, { zIndex: 1 });
tl.set(menu, { zIndex: 9999 });

tl.eventCallback("onComplete", () => {
    hero.style.zIndex = '1';
    menu.style.zIndex = '9999';
});

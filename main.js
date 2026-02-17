const timeline = anime.timeline({ easing: 'easeOutQuad' });

timeline
.add({
    targets: '.title',
    opacity: [0, 1],
    translateY: [-40, 0],
    duration: 800
})
.add({
    targets: '.subtitle',
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600
}, '-=400')
.add({
    targets: '.cta-wrapper',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600
}, '-=400')
.add({
    targets: '.card',
    opacity: [0, 1],
    translateY: [30, 0],
    rotate: function(el, i) {
        const rotaciones = [-5, 0, 5];
        return rotaciones[i];
    },
    delay: anime.stagger(200),
    duration: 800
}, '-=300');



const statButtons = document.querySelectorAll('.estad');

statButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');

        card.classList.add('flip');

        card.querySelectorAll('.fill').forEach(el => el.style.width = '0%');

        const speed = btn.dataset.speed + '%';
        const pop   = btn.dataset.pop + '%';
        const sales = btn.dataset.sales + '%';

        const speedBar = card.querySelector('.speed');
        const popBar   = card.querySelector('.pop');
        const salesBar = card.querySelector('.sales');

        anime({ targets: speedBar, width: speed, duration: 1000, easing: 'easeOutQuart', delay: 400 });
        anime({ targets: popBar,   width: pop,   duration: 1000, easing: 'easeOutQuart', delay: 550 });
        anime({ targets: salesBar, width: sales, duration: 1000, easing: 'easeOutQuart', delay: 700 });
    });
});

const backButtons = document.querySelectorAll('.volver');

backButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        card.classList.remove('flip');
    });
});

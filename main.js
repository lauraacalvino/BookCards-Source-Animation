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

const checkbox = document.querySelector('#stats-toggle');
const statsPanel = document.querySelector('#stats-container');

let activeCard = null; // para saber que card esta activa

// función para mostrar/ocultar el panel de estadisticas
checkbox.addEventListener('change', function() {
    if (this.checked) {
        statsPanel.style.display = 'block';
        anime({
            targets: statsPanel,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuart'
        });
    } else {
        anime({
            targets: statsPanel,
            opacity: 0,
            duration: 300,
            complete: () => {
                statsPanel.style.display = 'none';
                document.querySelectorAll('.fill').forEach(el => el.style.width = '0%');

                // quitamos la clase active de la card
                if (activeCard) {
                    activeCard.classList.remove('active-card');
                    activeCard = null;
                }
            }
        });
    }
});

const statButtons = document.querySelectorAll('.estad');

statButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        const card = btn.parentElement;

        // si hay otra card activa distinta, la desactivamos
        if (activeCard && activeCard !== card) {
            activeCard.classList.remove('active-card');
        }

        // activamos la card actual
        activeCard = card;
        activeCard.classList.add('active-card');

        // activamos el toggle si no estaba
        checkbox.checked = true;
        statsPanel.style.display = 'block';

        anime({
            targets: statsPanel,
            opacity: [0,1],
            translateY: [20,0],
            duration: 400
        });

        // reseteamos las barras antes de animarlas
        document.querySelectorAll('.fill').forEach(el => el.style.width = '0%');

        // obtenemos los valores del botón
        const speed = btn.dataset.speed + '%';
        const pop = btn.dataset.pop + '%';
        const sales = btn.dataset.sales + '%';

        // animamos las barras
        anime({ targets: '#speed', width: speed, duration: 1200 });
        anime({ targets: '#pop', width: pop, duration: 1200, delay: 150 });
        anime({ targets: '#sales', width: sales, duration: 1200, delay: 300 });
    });
});

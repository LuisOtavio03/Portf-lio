// Rolagem suave para os links do menu

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('clik', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smmoth'
        });
    });
});
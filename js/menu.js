document.addEventListener('DOMContentLoaded', function () {
    const menuSection = document.querySelector('.menu-section-hover');
    if (!menuSection) return;
    const cards = menuSection.querySelectorAll('.menu-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            menuSection.classList.add('hover-active');
            cards.forEach(c => c.classList.remove('menu-card-hovered'));
            card.classList.add('menu-card-hovered');
        });
        card.addEventListener('mouseleave', () => {
            menuSection.classList.remove('hover-active');
            cards.forEach(c => c.classList.remove('menu-card-hovered'));
        });
    });
});
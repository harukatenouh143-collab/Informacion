document.addEventListener('DOMContentLoaded', () => {
    // Control del Menú Móvil Corporativo
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    }

    // Comportamiento Exclusivo de Acordeones
    const accordionGroups = document.querySelectorAll('.unit-item, .specialty-area');
    accordionGroups.forEach((targetDetail) => {
        targetDetail.addEventListener('toggle', () => {
            if (!targetDetail.open) return;
            accordionGroups.forEach((detail) => {
                if (detail !== targetDetail && detail.classList.contains('unit-item')) {
                    detail.removeAttribute('open');
                }
            });
        });
    });
});

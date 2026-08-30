document.addEventListener('DOMContentLoaded', () => {
    // Interacción del botón principal
    const btnSubscribe = document.getElementById('btnSubscribe');

    if (btnSubscribe) {
        btnSubscribe.addEventListener('click', () => {
            alert('¡Siempre Listos! Para mayor información, acércate a nuestra sede en el Parque Fernando Monguí durante las actividades de los sábados.');
        });
    }

    // Comportamiento de acordeón exclusivo para las pestañas desplegables
    const detailsElements = document.querySelectorAll('.unit-item');

    detailsElements.forEach((targetDetail) => {
        targetDetail.addEventListener('click', () => {
            detailsElements.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });
});
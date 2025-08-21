function loadFooter(config) {
    // Detecta si estamos en subcarpeta (../ o ../../)
    let pathToFooterFile;
    if (window.location.pathname.split("/").length > 2) {
        pathToFooterFile = '../../includes/footer.html';
    } else {
        pathToFooterFile = '../includes/footer.html';
    }

    fetch(pathToFooterFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            // Cambia contenedor
            const container = document.querySelector('footer .container');
            if (config.containerFooter) {
                container.className = `container ${config.containerFooter}`;
            }

            // Actualiza logo
            const logo = document.getElementById('foot-logo');
            if (logo) {
                logo.src = config.logoSrc || logo.src;
            }

            // Cambia color de links
            const links = document.querySelectorAll('#interest-links a');
            links.forEach(link => {
                link.className = config.fontColor;
            });

            // Fondo + color general
            const element = document.querySelector('footer');
            if (element) {
                element.classList.add(config.fontColor, config.backColorFooter);
            }
        })
        .catch(error => console.error('Error al cargar el footer:', error));
}

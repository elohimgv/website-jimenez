function loadFooter(config) {
	let pathToFooterFile;
	let subString = config.logoSrc.indexOf(".", 2);
    if (subString === 1) {
        pathToFooterFile = '../includes/footer.html';
    } else {
        pathToFooterFile = '../../includes/footer.html';
    }
	fetch(pathToFooterFile)
		.then(response => response.text())
		.then(data => {
			// Inserta el contenido base del footer
			document.getElementById('footer-placeholder').innerHTML = data;

			// Personaliza el footer según los parámetros
			// Modifica las clases del contenedor principal
			const container = document.querySelector('footer .container');
			if (config.containerFooter) {
				container.className = `container ${config.containerFooter}`;
			}

			// Actualiza el logo
			const logo = document.getElementById('foot-logo');
			if (logo) {
				logo.src = config.logoSrc || logo.src;
			}

			// Update the color text
			const links = document.querySelectorAll('#interest-links a');
            links.forEach(link => {
                link.className = config.fontColor; // Change only the class value
            });

			// Selecciona el elemento que contiene las clases especificadas
			const element = document.querySelector('.container.border-top.border-dark');

			// Verifica si el elemento existe antes de modificarlo
			if (element) {
				// Agrega la clase "back-yellow" al elemento
				element.classList.add(config.fontColor, config.backColorFooter);
			}

		})
		.catch(error => console.error('Error al cargar el footer:', error));
}

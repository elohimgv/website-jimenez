function loadFooter(config) {
	fetch('../includes/footer.html')
		.then(response => response.text())
		.then(data => {
			// Inserta el contenido base del footer
			document.getElementById('footer-placeholder').innerHTML = data;

			// Personaliza el footer según los parámetros
			// Modifica las clases del contenedor principal
			const container = document.querySelector('footer .container');
			if (config.containerClass) {
				container.className = `container ${config.containerClass}`;
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

		})
		.catch(error => console.error('Error al cargar el footer:', error));
}

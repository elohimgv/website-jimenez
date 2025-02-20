function loadHead(title, description) {
    // Request to load the head.html file
    fetch('../includes/head.html')
        .then(response => response.text())
        .then(data => {
            // Insert the content of the head file on the placeholder
            document.getElementById('head-placeholder').innerHTML = data;

            // Change dynamically the tag <title>
            document.title = title;

            // Add or update the meta description
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                // If there isn't a meta description, it creates
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description; // Establish the dynamic content
        })
        .catch(error => console.error('Error al cargar el head:', error));
}
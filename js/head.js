/**
 * Carga dinámicamente el <head> de la página
 * @param {string} title       - Título de la página
 * @param {string} path        - Ruta base donde está el favicon u otros assets
 * @param {string} description - Descripción de la página
 */
function loadHead(title, path, description) {
    let pathToHeadFile;

    // Ajusta la ruta dependiendo de dónde estés
    if (path === "../data/") {
        pathToHeadFile = "../includes/head.html";
    } else {
        pathToHeadFile = "../../includes/head.html";
    }

    // Cargar el archivo head.html
    fetch(pathToHeadFile)
        .then(response => response.text())
        .then(data => {
            // Inyectar el head en el placeholder
            document.getElementById("head-placeholder").innerHTML = data;

            // ---- Ajustes dinámicos ----

            // Título
            document.title = title;

            // Descripción
            let metaDescription = document.querySelector("meta[name='description']");
            if (!metaDescription) {
                metaDescription = document.createElement("meta");
                metaDescription.name = "description";
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description;

            // Favicon
            let favicon = document.querySelector("link[rel='icon']");
            if (!favicon) {
                favicon = document.createElement("link");
                favicon.rel = "icon";
                document.head.appendChild(favicon);
            }
            favicon.href = path + "favicon.ico";
        })
        .catch(error => console.error("Error al cargar el head:", error));
}


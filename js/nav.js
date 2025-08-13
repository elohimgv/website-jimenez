function loadNav(links) {
    let pathToNavFile;
    pathToNavFile = '../../includes/nav.html';
    // Request to load the nav.html file
    fetch(pathToNavFile)
        .then(response => response.text())
        .then(data => {
            // Insert content of the nav file on the placeholder
            document.getElementById('nav-placeholder').innerHTML = data;

            // Change dynamically the links
            let linkPathIndex = document.getElementById('index');
            linkPathIndex.href = links.href_index;
           
            let linkPathPresidente = document.getElementById('presidente');
            linkPathPresidente.href = links.href_presidente;

            let linkPathOrganigrama = document.getElementById('org');
            linkPathOrganigrama.href = links.href_organigrama;

            let linkPathGaceta = document.getElementById('gaceta');
            linkPathGaceta.href = links.href_gacetaMunicipal;

            let linkPathCoordinacionArchivos = document.getElementById('coordinacion');
            linkPathCoordinacionArchivos.href = links.href_coordinacionArchivos;

            let linkPathDirectorio = document.getElementById('directorio');
            linkPathDirectorio.href = links.href_directorio;

            let linkPathAvisoPrivacidad = document.getElementById('aviso');
            linkPathAvisoPrivacidad.href = links.href_avisoPrivacidad;

            let linkPathMunicipio = document.getElementById('municipio');
            linkPathMunicipio.href = links.href_municipio;

            let linkPathTransparencia = document.getElementById('transparencia');
            linkPathTransparencia.href = links.href_transparencia;

            let linkPathFinanzas = document.getElementById('finanzas');
            linkPathFinanzas.href = links.href_finanzas;

             let linkPathContacto = document.getElementById('contacto');
            linkPathContacto.href = links.href_contacto;
        })
        .catch(error => console.error('Error al cargar la navbar:', error));
    }
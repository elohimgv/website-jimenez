// Mapa centralizado de rutas
const navLinks = {
  // ----------------------------
  // Nivel 0 (raíz) → /index.html
  // ----------------------------
  accessFile1: {
    link_index: "index.html",
    link_presidente: "gobierno/presidente.html",
    link_organigrama: "gobierno/organigrama.html",
    link_gaceta: "gobierno/gaceta.html",
    link_coordinacion: "gobierno/coordinacion_de_archivos.html",
    link_directorio: "gobierno/directorio.html",
    link_aviso: "gobierno/aviso_de_privacidad.html",
    link_monografia: "municipio/monografia.html",
    link_presidentes: "municipio/presidentes.html",
    link_transparencia: "transparencia/transparencia.html",
    link_finanzas: "finanzas/finanzas.html",
    link_contacto: "contacto.html"
  },
  // ----------------------------
  // Nivel 1 → /transparencia/transparencia.html
  // ----------------------------
  accessFile2: {
    link_index: "../index.html",
    link_presidente: "../gobierno/presidente.html",
    link_organigrama: "../gobierno/organigrama.html",
    link_gaceta: "../gobierno/gaceta.html",
    link_coordinacion: "../gobierno/coordinacion_de_archivos.html",
    link_directorio: "../gobierno/directorio.html",
    link_aviso: "../gobierno/aviso_de_privacidad.html",
    link_monografia: "../municipio/monografia.html",
    link_presidentes: "../municipio/presidentes.html",
    link_transparencia: "/transparencia/transparencia.html",
    link_finanzas: "/finanzas/finanzas.html",
    link_contacto: "../contacto.html"
  },
  // ----------------------------
  // Nivel 2 → /transparencia/a39/f1.html
  // ----------------------------
  accessFile3: {
    link_index: "../../index.html",
    link_presidente: "../../gobierno/presidente.html",
    link_organigrama: "../../gobierno/organigrama.html",
    link_gaceta: "../../gobierno/gaceta.html",
    link_coordinacion: "../../gobierno/coordinacion_de_archivos.html",
    link_directorio: "../../gobierno/directorio.html",
    link_aviso: "../../gobierno/aviso_de_privacidad.html",
    link_monografia: "../../municipio/monografia.html",
    link_presidentes: "../../municipio/presidentes.html",
    link_transparencia: "../../transparencia/transparencia.html",
    link_finanzas: "../../finanzas/finanzas.html",               
    link_contacto: "../../contacto.html"
  },
  // ----------------------------
  // Nivel 3 o más → ej. /x/y/z/archivo.html
  // ----------------------------
  accessFile4: {
    link_index: "../../../index.html",
    link_presidente: "../../../gobierno/presidente.html",
    link_organigrama: "../../../gobierno/organigrama.html",
    link_gaceta: "../../../gobierno/gaceta.html",
    link_coordinacion: "../../../gobierno/coordinacion_de_archivos.html",
    link_directorio: "../../../gobierno/directorio.html",
    link_aviso: "../../../gobierno/aviso_de_privacidad.html",
    link_monografia: "../../../municipio/monografia.html",
    link_presidentes: "../../../municipio/presidentes.html",
    link_transparencia: "../../../transparencia/transparencia.html",
    link_finanzas: "../../../finanzas/finanzas.html",
    link_contacto: "../../../contacto.html"
  }
};

// Función para determinar automáticamente el nivel de carpeta
function detectAccessFile() {
  const path = window.location.pathname; // ej: /gobierno/presidente.html
  const depth = path.split("/").length - 2; 
  // -2 porque el split cuenta la cadena vacía inicial y el archivo final

  if (depth === 0) return "accessFile1";
  if (depth === 1) return "accessFile2";
  if (depth === 2) return "accessFile3";
  return "accessFile4"; // por defecto, cualquier nivel mayor
}

// Función para cargar el nav dinámicamente
function loadNavAuto() {
  const accessKey = detectAccessFile();
  const access = navLinks[accessKey];

  if (!access) {
    console.error("Clave de acceso inválida:", accessKey);
    return;
  }

  fetch("../../includes/nav.html") // Falta ajustar la ruta automáticamente
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;

      Object.entries(access).forEach(([id, href]) => {
        const link = document.getElementById(id);
        if (link) link.href = href;
      });
    })
    .catch(error => console.error("Error al cargar la navbar:", error));
}

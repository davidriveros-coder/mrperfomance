/**
 * config.js — carga los datos del sitio desde config.json.
 * Para editar contenido, usa el panel /admin (o edita config.json directo).
 */
window.SITIO_LISTO = fetch("config.json")
  .then((r) => r.json())
  .then((data) => {
    window.SITIO = data;
    return data;
  });

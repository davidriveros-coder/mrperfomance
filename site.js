/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  site.js — utilidades compartidas por todas las páginas       ║
 * ║  de MR PERFORMANCE. Requiere que config.js se cargue antes.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
let S = (typeof SITIO !== "undefined") ? SITIO : {};

function esc(s) {
  return String(s ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
const $ = (id) => document.getElementById(id);
const waUrl = (msg) => `https://wa.me/${S.whatsapp || ""}?text=${encodeURIComponent(msg)}`;
const iniciales = (nombre) => String(nombre||"").split(" ").filter(Boolean).slice(0,2).map(p=>p[0].toUpperCase()).join("");

// ── Íconos propios (PNG en /iconos). Sin emoji: si no hay PNG para la clave, cae a "!" ──
const ICONOS_IMG = {
  ingeniero:  "iconos/ingeniero.png",
  escaner:    "iconos/escaner.png",
  furgoneta:  "iconos/furgoneta.png",
  bateria:    "iconos/bateria.png",
  diagnostico:"iconos/diagnostico.png",
  mecanica:   "iconos/mecanica.png",
  mantencion: "iconos/mantencion.png",
};
// ── Fotos de producto (PNG en /iconos/baterias). Llenan el círculo como foto, no como ícono ──
const PRODUCTO_FOTOS = {
  "rocket-54ah":    "iconos/baterias/rocket-54ah.png",
  "rocket-70ah":    "iconos/baterias/rocket-70ah.png",
  "bosch-s4-55ah":  "iconos/baterias/bosch-s4-55ah.png",
  "bosch-70ah":     "iconos/baterias/bosch-70ah.png",
  "bosch-90ah":     "iconos/baterias/bosch-90ah.png",
  "bosch-agm-70ah": "iconos/baterias/bosch-agm-70ah.png",
};

// ── Íconos de redes sociales / WhatsApp (PNG en /iconos/redes-sociales) ──
const ICONOS_REDES = {
  instagram: "iconos/redes-sociales/instagram.png",
  facebook:  "iconos/redes-sociales/facebook.png",
  whatsapp:  "iconos/redes-sociales/whatsapp.png",
};
function renderIconoRed(clave) {
  if (ICONOS_REDES[clave]) return `<img src="${ICONOS_REDES[clave]}" alt="${esc(clave)}" loading="lazy" />`;
  return "!";
}

// ── Íconos de contacto (teléfono/email en SVG propio; WhatsApp reutiliza el PNG de redes) ──
const ICONOS_CONTACTO = {
  telefono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,
};
function renderIconoContacto(tipo) {
  if (tipo === "whatsapp") return `<img src="${ICONOS_REDES.whatsapp}" alt="WhatsApp" loading="lazy" />`;
  if (ICONOS_CONTACTO[tipo]) return ICONOS_CONTACTO[tipo];
  return "!";
}
function renderIcono(valor, alt) {
  if (PRODUCTO_FOTOS[valor]) {
    return `<span class="icono-badge icono-foto"><img src="${PRODUCTO_FOTOS[valor]}" alt="${esc(alt || valor)}" loading="lazy" /></span>`;
  }
  if (ICONOS_IMG[valor]) {
    return `<span class="icono-badge"><img src="${ICONOS_IMG[valor]}" alt="${esc(alt || valor)}" loading="lazy" /></span>`;
  }
  return `<span class="icono-badge icono-fallback" role="img" aria-label="${esc(alt || "")}">!</span>`;
}

// ── Colores de marca (CSS custom properties) ──
function aplicarColores() {
  const c = S.colores || {}, root = document.documentElement.style;
  const map = { negro:"--negro", negro_suave:"--negro-suave", rojo:"--rojo", rojo_hover:"--rojo-hover", plata:"--plata", plata_dark:"--plata-dark", blanco:"--blanco", gris:"--gris" };
  Object.entries(map).forEach(([k,v]) => { if (c[k]) root.setProperty(v, c[k]); });
}

// ── SEO — usa S.seo, con overrides opcionales por página ──
function aplicarSEO(override) {
  const seo = Object.assign({}, S.seo, override || {});
  document.title = seo.titulo || S.nombre || "MR PERFORMANCE";
  const setMeta = (sel,val) => { const el=document.querySelector(sel); if(el&&val) el.setAttribute("content",val); };
  const setHref = (sel,val) => { const el=document.querySelector(sel); if(el&&val) el.setAttribute("href",val); };
  setMeta('meta[name="description"]', seo.descripcion);
  setHref('link[rel="canonical"]', seo.url);
  setMeta('meta[property="og:url"]', seo.url);
  setMeta('meta[property="og:title"]', seo.titulo);
  setMeta('meta[property="og:description"]', seo.descripcion);
  setMeta('meta[property="og:image"]', seo.imagen);
}

// ── Links de WhatsApp: cualquier elemento con [data-wa-link] recibe el href ──
function aplicarWaLinks(mensaje) {
  const url = waUrl(mensaje || S.whatsapp_msg || "Hola, quiero cotizar un servicio");
  document.querySelectorAll("[data-wa-link]").forEach(el => { el.href = url; });
}

// ── Footer básico (año, nombre, eslogan) ──
function aplicarFooter() {
  if ($("year")) $("year").textContent = new Date().getFullYear();
  if ($("footer-name")) $("footer-name").textContent = S.nombre || "MR PERFORMANCE";
  if ($("footer-eslogan")) $("footer-eslogan").textContent = S.hero_titulo || "";
}

// ── Nav: sombra al hacer scroll + menú hamburguesa ──
function initNav() {
  const nav = $("nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20));
  const toggle = $("nav-toggle"), links = $("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open"); toggle.setAttribute("aria-expanded", false);
  }));
}

// ── Reveal on scroll ──
function observarReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold:0.12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => obs.observe(el));
}

// ── Rutas limpias: si entran directo por /nosotros, /contacto, etc., scrollea a la sección ──
function irASeccionPorRuta(secciones) {
  const ruta = window.location.pathname.replace(/\/$/, "");
  const id = (secciones || []).find(s => ruta === "/" + s);
  if (!id) return;
  const el = document.getElementById(id);
  if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "auto", block: "start" }));
}

/**
 * config.js — carga los datos del sitio desde config.json (así los puede
 * editar el panel /admin). Si el navegador no puede hacer fetch() — por
 * ejemplo al abrir este archivo con doble clic en vez de por un servidor —
 * usa el respaldo de abajo para que la página nunca quede en blanco.
 * El respaldo puede quedar desactualizado si editas contenido solo desde
 * /admin; eso no afecta el sitio publicado (ahí siempre se usa config.json).
 */
window.SITIO_FALLBACK = {
  "nombre": "MR PERFORMANCE",
  "tagline": "<span class=\"mr\">MR</span><span class=\"perf\">PERFORMANCE</span>",
  "division": "HIGH-END PERFORMANCE DIVISION",
  "hero_titulo": "Mecánica de alto rendimiento y venta de baterías, a la puerta de tu casa",
  "hero_desc": "Diagnóstico electrónico y mecánica a domicilio. Ingenieros especializados, Escáner de última generación.",
  "hero_badge": "Servicio a domicilio · Santiago",

  "hero_stats": [
    { "numero": "+8", "label": "Años de experiencia" }
  ],

  "colores": {
    "negro": "#0D0D0D",
    "negro_suave": "#1A1A1D",
    "rojo": "#C8102E",
    "rojo_hover": "#E30613",
    "plata": "#C0C0C0",
    "plata_dark": "#8A8A8A",
    "blanco": "#F5F5F5",
    "gris": "#B3B3B3"
  },

  "whatsapp": "56962585505",
  "whatsapp_msg": "Hola, quiero cotizar un servicio",
  "telefono": "+56 9 6258 5505",
  "email": "contacto@mrperformance.cl",
  "zona_cobertura": "Región Metropolitana",
  "comunas": [
    "Santiago Centro", "Providencia", "Ñuñoa", "Las Condes",
    "Vitacura", "La Reina", "Macul", "La Florida", "Puente Alto"
  ],

  "redes": {
    "instagram": "https://www.instagram.com/mrperformance0/?hl=es-la",
    "facebook": "https://www.facebook.com/profile.php?id=61591959847435",
    "tiktok": ""
  },

  "diferenciadores": [
    { "icono": "ingeniero", "titulo": "Ingenieros especializados", "desc": "Profesionales certificados y apasionados por la excelencia." },
    { "icono": "escaner", "titulo": "Escáner de última generación", "desc": "Diagnóstico electrónico preciso, marca por marca." },
    { "icono": "furgoneta", "titulo": "Servicio a domicilio", "desc": "Vamos donde estés, sin que muevas tu vehículo." }
  ],

  "servicios": [
    {
      "icono": "diagnostico", "titulo": "Diagnóstico electrónico",
      "desc": "Escaneo completo de fallas con Escáner profesional.",
      "detalle": "Detectamos con precisión luces de check engine, fallas de sensores y códigos de error en minutos.",
      "incluye": [
        "Escaneo completo de códigos de falla (OBD-II)",
        "Revisión de sensores y actuadores",
        "Informe digital con el resultado del escaneo",
        "Recomendación clara de reparación, sin letra chica"
      ]
    },
    {
      "icono": "mecanica", "titulo": "Mecánica general a domicilio",
      "desc": "Reparaciones y ajustes mecánicos sin que salgas de tu casa.",
      "detalle": "Frenos, suspensión, correas, fugas y más — con la misma precisión que un taller especializado.",
      "incluye": [
        "Frenos: pastillas, discos y líquido",
        "Suspensión y dirección",
        "Correas, poleas y fugas",
        "Ajustes y mantenciones menores"
      ]
    },
    {
      "icono": "bateria", "titulo": "Venta e instalación de baterías",
      "desc": "Baterías de calidad certificada.",
      "detalle": "Medimos el estado de tu batería y sistema de carga antes de recomendar el reemplazo.",
      "incluye": [
        "Medición del estado de tu batería actual",
        "Baterías de marcas certificadas",
        "Instalación y prueba del sistema de carga",
        "Retiro de la batería usada"
      ]
    },
    {
      "icono": "mantencion", "titulo": "Revisión y mantención preventiva",
      "desc": "Chequeo completo para evitar fallas antes de que ocurran.",
      "detalle": "Revisión de niveles, filtros, correas y sistemas críticos según el kilometraje de tu vehículo.",
      "incluye": [
        "Chequeo de niveles y fluidos",
        "Revisión de filtros y correas",
        "Inspección de frenos y suspensión",
        "Informe de estado según kilometraje"
      ]
    }
  ],

  "servicios_pagina": {
    "hero_badge": "Todos nuestros servicios",
    "hero_titulo": "Servicios de mecánica y diagnóstico, sin letra chica",
    "hero_desc": "Elige el servicio que necesitas y revisa exactamente qué incluye antes de cotizar por WhatsApp."
  },

  "proceso": [
    { "numero": "01", "titulo": "Cuéntanos qué le pasa a tu vehículo", "desc": "Completa el formulario o escríbenos directo por WhatsApp." },
    { "numero": "02", "titulo": "Te enviamos una cotización", "desc": "Un ingeniero revisa tu caso y te responde con precio y tiempo estimado." },
    { "numero": "03", "titulo": "Coordinamos día y hora", "desc": "Vamos a tu domicilio con el Escáner y las herramientas listas." }
  ],

  "historia": "En Mr. Performance, fundada por Mauricio Concha y Ricardo Concha, transformamos el cuidado automotriz fusionando la alta ingeniería con un servicio accesible para todos. Somos una empresa liderada por ingenieros apasionados por la excelencia, especializados en mecánica de precisión, mecánica rápida y venta de baterías de alta calidad. Nuestra visión es romper el mito de que el servicio especializado es un lujo: creemos que todo conductor merece un diagnóstico exacto, energía confiable y una reparación segura, sin comprometer su presupuesto.",

  "testimonios": [],

  "marcas_atendidas": ["Toyota", "Chevrolet", "Hyundai", "Nissan", "Suzuki", "Kia", "Mazda", "Ford", "Subaru", "Jeep", "Audi"],

  "horarios": {
    "lunes_viernes": { "texto": "Lunes a Viernes", "desde": "08:00", "hasta": "20:00", "activo": true },
    "sabado": { "texto": "Sábado", "desde": "", "hasta": "", "activo": false },
    "domingo": { "texto": "Domingo y feriados", "desde": "", "hasta": "", "activo": false }
  },
  "urgencias_247": true,

  "productos_pagina": {
    "hero_badge": "Repuestos y baterías certificadas",
    "hero_titulo": "Productos de mecánica, con garantía certificada",
    "hero_desc": "Baterías y repuestos de marcas certificadas — consulta disponibilidad por WhatsApp."
  },

  "baterias": [
    { "icono": "rocket-54ah", "marca": "Rocket", "modelo": "54Ah", "desc": "Para autos pequeños y uso urbano, arranque confiable en frío.", "garantia": "12 meses de garantía" },
    { "icono": "rocket-70ah", "marca": "Rocket", "modelo": "70Ah", "desc": "Mayor capacidad para autos medianos y camionetas livianas.", "garantia": "12 meses de garantía" },
    { "icono": "bosch-s4-55ah", "marca": "Bosch", "modelo": "S4 55Ah", "desc": "Para autos pequeños y uso urbano, alta resistencia a la corrosión.", "garantia": "12 meses de garantía" },
    { "icono": "bosch-70ah", "marca": "Bosch", "modelo": "70Ah", "desc": "Ideal para autos medianos, arranque confiable en frío.", "garantia": "12 meses de garantía" },
    { "icono": "bosch-90ah", "marca": "Bosch", "modelo": "90Ah", "desc": "Mayor capacidad para SUV y camionetas.", "garantia": "12 meses de garantía" },
    { "icono": "bosch-agm-70ah", "marca": "Bosch", "modelo": "AGM 70Ah", "desc": "Tecnología AGM para vehículos con sistema Start-Stop.", "garantia": "12 meses de garantía" }
  ],

  "otros_productos": [
    { "nombre": "Filtros de aceite y aire", "desc": "Compatibles con la mayoría de las marcas." },
    { "nombre": "Aceites y lubricantes", "desc": "Sintéticos y semisintéticos, por litro o cambio completo." },
    { "nombre": "Pastillas de freno", "desc": "Repuesto de calidad para tu vehículo." },
    { "nombre": "Ampolletas y fusibles", "desc": "Recambio rápido para luces y sistemas eléctricos." }
  ],

  "seo": {
    "titulo": "MR PERFORMANCE — Mecánica y diagnóstico electrónico a domicilio",
    "descripcion": "Servicios mecánicos y diagnóstico electrónico a domicilio en Santiago. Ingenieros especializados, Escáner de última generación. Cotiza por WhatsApp.",
    "url": "https://mrperformance.cl",
    "imagen": "https://mrperformance.cl/preview.jpg"
  }
};

window.SITIO_LISTO = fetch("config.json")
  .then((r) => r.json())
  .catch(() => window.SITIO_FALLBACK)
  .then((data) => {
    window.SITIO = data;
    return data;
  });

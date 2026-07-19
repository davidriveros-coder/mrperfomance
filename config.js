/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              CONFIGURACIÓN DE MR PERFORMANCE                  ║
 * ║  Edita SOLO este archivo para personalizar el sitio.          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
const SITIO = {

  // ── IDENTIDAD ──────────────────────────────────────────────────
  nombre:       "MR PERFORMANCE",
  tagline:      "<span class=\"mr\">MR</span><span class=\"perf\">PERFORMANCE</span>",
  division:     "HIGH-END PERFORMANCE DIVISION",
  hero_titulo:  "Mecánica de alto rendimiento, a la puerta de tu casa",
  hero_desc:    "Diagnóstico electrónico y mecánica a domicilio. Ingenieros especializados, Escáner de última generación.",
  hero_badge:   "Servicio a domicilio · Santiago",

  // Estadísticas del panel del hero (Escáner). Edita libremente.
  hero_stats: [
    { numero:"+15", label:"Años de experiencia" },
    { numero:"4.9★", label:"Calificación clientes" },
  ],

  // ── COLORES (CSS custom properties) — taller premium ───────────
  colores: {
    negro:        "#0D0D0D",
    negro_suave:  "#1A1A1D",
    rojo:         "#C8102E",
    rojo_hover:   "#E30613",
    plata:        "#C0C0C0",
    plata_dark:   "#8A8A8A",
    blanco:       "#F5F5F5",
    gris:         "#B3B3B3",
  },

  // ── CONTACTO ────────────────────────────────────────────────────
  // TODO: reemplaza con el número real, formato 56912345678 (sin + ni espacios)
  whatsapp:      "56900000000",
  whatsapp_msg:  "Hola, quiero cotizar un servicio",
  telefono:      "+56 9 0000 0000",
  email:         "contacto@mrperformance.cl",
  zona_cobertura:"Santiago y alrededores",
  comunas: [
    "Santiago Centro", "Providencia", "Ñuñoa", "Las Condes",
    "Vitacura", "La Reina", "Macul", "La Florida",
  ],

  // ── REDES SOCIALES ─────────────────────────────────────────────
  redes: {
    instagram: "https://instagram.com/mrperformance.cl",
    facebook:  "",
    tiktok:    "",
  },

  // ── DIFERENCIADORES (hero) ──────────────────────────────────────
  // icono: clave de PNG en /iconos. Si la clave no tiene PNG asociado, se muestra "!"
  diferenciadores: [
    { icono:"ingeniero", titulo:"Ingenieros especializados", desc:"Profesionales certificados, no mecánicos improvisados." },
    { icono:"escaner",   titulo:"Escáner de última generación", desc:"Diagnóstico electrónico preciso, marca por marca." },
    { icono:"furgoneta", titulo:"Servicio a domicilio", desc:"Vamos donde estés, sin que muevas tu vehículo." },
  ],

  // ── SERVICIOS ────────────────────────────────────────────────────
  servicios: [
    {
      icono:"diagnostico", titulo:"Diagnóstico electrónico",
      desc:"Escaneo completo de fallas con Escáner profesional.",
      detalle:"Detectamos con precisión luces de check engine, fallas de sensores y códigos de error en minutos.",
      incluye: [
        "Escaneo completo de códigos de falla (OBD-II)",
        "Revisión de sensores y actuadores",
        "Informe digital con el resultado del escaneo",
        "Recomendación clara de reparación, sin letra chica",
      ],
    },
    {
      icono:"mecanica", titulo:"Mecánica general a domicilio",
      desc:"Reparaciones y ajustes mecánicos sin que salgas de tu casa.",
      detalle:"Frenos, suspensión, correas, fugas y más — con la misma precisión que un taller especializado.",
      incluye: [
        "Frenos: pastillas, discos y líquido",
        "Suspensión y dirección",
        "Correas, poleas y fugas",
        "Ajustes y mantenciones menores",
      ],
    },
    {
      icono:"bateria", titulo:"Venta e instalación de baterías",
      desc:"Baterías de calidad certificada.",
      detalle:"Medimos el estado de tu batería y sistema de carga antes de recomendar el reemplazo.",
      incluye: [
        "Medición del estado de tu batería actual",
        "Baterías de marcas certificadas",
        "Instalación y prueba del sistema de carga",
        "Retiro de la batería usada",
      ],
    },
    {
      icono:"mantencion", titulo:"Revisión y mantención preventiva",
      desc:"Chequeo completo para evitar fallas antes de que ocurran.",
      detalle:"Revisión de niveles, filtros, correas y sistemas críticos según el kilometraje de tu vehículo.",
      incluye: [
        "Chequeo de niveles y fluidos",
        "Revisión de filtros y correas",
        "Inspección de frenos y suspensión",
        "Informe de estado según kilometraje",
      ],
    },
  ],

  // ── PÁGINA /servicios (landing propia) ───────────────────────────
  servicios_pagina: {
    hero_badge:  "Todos nuestros servicios",
    hero_titulo: "Servicios de mecánica y diagnóstico, sin letra chica",
    hero_desc:   "Elige el servicio que necesitas y revisa exactamente qué incluye antes de cotizar por WhatsApp.",
  },

  // ── CÓMO FUNCIONA (3 pasos) ──────────────────────────────────────
  proceso: [
    { numero:"01", titulo:"Cuéntanos qué le pasa a tu vehículo", desc:"Completa el formulario o escríbenos directo por WhatsApp." },
    { numero:"02", titulo:"Te enviamos una cotización", desc:"Un ingeniero revisa tu caso y te responde con precio y tiempo estimado." },
    { numero:"03", titulo:"Coordinamos día y hora", desc:"Vamos a tu domicilio con el Escáner y las herramientas listas." },
  ],

  // ── EQUIPO ────────────────────────────────────────────────────────
  // foto: deja vacío ("") para mostrar iniciales; o pon una URL de imagen cuando la tengas
  equipo: [
    { nombre:"Mauricio Concha", cargo:"Ingeniero en Diagnóstico Electrónico",         experiencia:12, foto:"" },
    { nombre:"Ricardo Andrés",  cargo:"Especialista en Mecánica de Alto Rendimiento", experiencia:9,  foto:"" },
    { nombre:"Unboxing",        cargo:"Técnico en Sistemas Eléctricos y Baterías",    experiencia:7,  foto:"" },
  ],

  historia: "El diagnóstico \"a ojo\" ya no alcanza. Por eso cada visita lleva Escáner profesional e ingenieros certificados, no aprendices.",

  // ── TESTIMONIOS ───────────────────────────────────────────────────
  // Vacío hasta tener opiniones reales de clientes. Agrega objetos con este formato:
  // { nombre:"Nombre Apellido", comuna:"Comuna", estrellas:5, texto:"Comentario del cliente." }
  // Mientras esté vacío, la sección de testimonios no se muestra en la página.
  testimonios: [
  ],

  marcas_atendidas: ["Toyota", "Chevrolet", "Hyundai", "Nissan", "Suzuki", "Kia", "Mazda", "Ford"],

  // ── HORARIOS DE ATENCIÓN ─────────────────────────────────────────
  // Formato 24h. "activo:false" = cerrado ese día (salvo urgencias).
  horarios: {
    lunes_viernes: { texto:"Lunes a Viernes", desde:"09:00", hasta:"19:00", activo:true },
    sabado:        { texto:"Sábado",          desde:"09:00", hasta:"14:00", activo:true },
    domingo:       { texto:"Domingo y feriados", desde:"", hasta:"", activo:false },
  },
  urgencias_247: true,

  // ── PÁGINA /productos (landing propia) ───────────────────────────
  productos_pagina: {
    hero_badge:  "Repuestos y baterías certificadas",
    hero_titulo: "Productos de mecánica, con garantía certificada",
    hero_desc:   "Baterías y repuestos de marcas certificadas — consulta disponibilidad por WhatsApp.",
  },

  // Baterías: producto principal de la página /productos
  baterias: [
    { icono:"bateria", marca:"Bosch", modelo:"S4 45Ah", desc:"Para autos pequeños y uso urbano, arranque confiable en frío.", garantia:"12 meses de garantía" },
    { icono:"bateria", marca:"Bosch", modelo:"S4 60Ah", desc:"Ideal para autos medianos, alta resistencia a la corrosión.", garantia:"12 meses de garantía" },
    { icono:"bateria", marca:"Varta", modelo:"Blue Dynamic 70Ah", desc:"Mayor capacidad para SUV y camionetas.", garantia:"18 meses de garantía" },
  ],

  // Otros productos: categorías secundarias sin PNG propio, se muestran con "!"
  otros_productos: [
    { nombre:"Filtros de aceite y aire", desc:"Compatibles con la mayoría de las marcas." },
    { nombre:"Aceites y lubricantes", desc:"Sintéticos y semisintéticos, por litro o cambio completo." },
    { nombre:"Pastillas de freno", desc:"Repuesto de calidad para tu vehículo." },
    { nombre:"Ampolletas y fusibles", desc:"Recambio rápido para luces y sistemas eléctricos." },
  ],

  // ── SEO ────────────────────────────────────────────────────────
  seo: {
    titulo:      "MR PERFORMANCE — Mecánica y diagnóstico electrónico a domicilio",
    descripcion: "Servicios mecánicos y diagnóstico electrónico a domicilio en Santiago. Ingenieros especializados, Escáner de última generación. Cotiza por WhatsApp.",
    url:         "https://mrperformance.cl",
    imagen:      "https://mrperformance.cl/preview.jpg",
  },

};

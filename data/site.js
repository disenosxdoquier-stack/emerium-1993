/* ==========================================================================
   EMERIUM 1993 — DATOS GENERALES DEL SITIO
   --------------------------------------------------------------------------
   Aquí se editan: WhatsApp, redes sociales y todos los textos de la landing.
   Solo cambia lo que está entre comillas "…". No borres comas ni llaves.
   Guía completa: GUIA-CATALOGO.md
   ========================================================================== */

export const site = {
  /* ------------------------------------------------------------------------
     CONTACTO
     ------------------------------------------------------------------------ */

  // ⚠️ NÚMERO DE WHATSAPP — REEMPLAZAR POR EL NÚMERO REAL
  // Escríbelo con el código del país, sin espacios ni símbolos.
  // Ejemplo de formato (Colombia): "573001234567"
  // Mientras diga REEMPLAZAR_CON_NUMERO_REAL, los botones de WhatsApp
  // llevan a la sección de contacto en lugar de abrir WhatsApp.
  whatsappNumber: "REEMPLAZAR_CON_NUMERO_REAL",

  // Mensaje general de los botones "Asesoría privada", "Hablar con un asesor", etc.
  whatsappMessage: "Hola Emerium, quiero asesoría para elegir una joya.",

  // Mensaje automático de una pieza cuando el producto NO tiene su propio
  // whatsappMessage. {nombre} y {material} se reemplazan solos.
  productMessageTemplate:
    "Hola Emerium, me interesa la pieza {nombre} ({material}). ¿Me pueden dar más información?",

  /* ------------------------------------------------------------------------
     REDES SOCIALES
     Pega el enlace completo (https://…). Si queda vacío "", no se muestra.
     ------------------------------------------------------------------------ */
  instagram: "",
  tiktok: "",

  /* ------------------------------------------------------------------------
     MARCA
     ------------------------------------------------------------------------ */
  brand: {
    name: "Emerium",
    year: "1993",
    tagline: "Look different. Feel different.",
    city: "Medellín, Colombia",
  },

  /* ------------------------------------------------------------------------
     CATÁLOGO
     ------------------------------------------------------------------------ */
  catalog: {
    // Cuántas piezas se muestran antes del botón "Ver más piezas".
    pageSize: 9,
  },

  /* ------------------------------------------------------------------------
     TEXTOS DE LA LANDING
     Un salto de línea dentro de un título se escribe \n
     ------------------------------------------------------------------------ */
  content: {
    hero: {
      eyebrow: "Joyería · Medellín, Colombia",
      titleLead: "No llevas una\njoya.",
      titleAccent: "Llevas una\nintención.",
      text: "Oro de 18K y esmeraldas colombianas convertidos en piezas que refuerzan lo que ya existe en ti.",
      primaryCta: "Descubrir piezas",
      secondaryCta: "Conocer Emerium",
      stoneLabel: "Piedra",
      stoneName: "Esmeralda natural",
      image: "assets/hero/hero.jpg",
      imageAlt: "Cadena de oro con dije de piedra natural",
      features: ["Oro 18K", "Esmeraldas naturales", "Piezas con propósito"],
    },

    marquee: [
      "Look different. Feel different.",
      "Emerium 1993",
      "Oro 18K",
      "Esmeraldas colombianas",
    ],

    manifesto: {
      lead: "El oro no cambia lo que eres.",
      title: "Refuerza lo que llevas dentro.",
    },

    collections: {
      eyebrow: "Elige tu energía",
      title: "Colecciones con\nintención",
      text: "Cada pieza representa una fuerza que decides llevar contigo.",
      linkLabel: "Explorar",
    },

    products: {
      eyebrow: "Selección Emerium",
      title: "Piezas que hablan antes que\ntú",
      allLabel: "Todas",
      consultLabel: "Consultar",
      loadMoreLabel: "Ver más piezas",
      emptyText: "Muy pronto nuevas piezas en esta colección. Escríbenos y te mostramos opciones disponibles.",
      customText:
        "¿Buscas una pieza específica? Seleccionamos cadenas, dijes, pulseras, anillos y esmeraldas según tu estilo y presupuesto.",
    },

    essence: {
      eyebrow: "Nuestra esencia",
      title: "La elegancia no\nnecesita ruido.",
      paragraphs: [
        "Emerium nace de una visión clara: crear joyas con carácter, identidad y significado. Seleccionamos oro de 18 quilates y esmeraldas colombianas para acompañar momentos que merecen permanecer.",
        "No creemos en accesorios pasajeros. Creemos en símbolos personales: piezas que se sienten propias desde el primer instante.",
      ],
      image: "assets/hero/esencia.jpg",
      imageAlt: "Mujer luciendo una cadena fina de oro",
      stats: [
        { value: "18K", label: "Oro certificado" },
        { value: "F1", label: "Selección de esmeraldas" },
        { value: "1:1", label: "Atención personalizada" },
      ],
    },

    guarantees: {
      eyebrow: "Est. 1993",
      items: [
        {
          icon: "spark",
          title: "Selección experta",
          text: "Te orientamos para encontrar la pieza correcta.",
        },
        {
          icon: "gem",
          title: "Materiales auténticos",
          text: "Oro de 18K y esmeraldas naturales seleccionadas.",
        },
        {
          icon: "arrow",
          title: "Envíos seguros",
          text: "Atención desde Medellín para todo el país.",
        },
      ],
    },

    cta: {
      title: "Tu próxima pieza empieza\ncon una conversación.",
      text: "Cuéntanos qué buscas. Te asesoramos personalmente por WhatsApp.",
      button: "Hablar con un asesor",
    },

    floating: {
      label: "Asesoría privada",
    },

    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

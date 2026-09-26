/* ==========================================================================
   EMERIUM 1993 — CATÁLOGO DE PRODUCTOS
   --------------------------------------------------------------------------
   Cada bloque { … } es una pieza. Las tarjetas se crean solas a partir
   de esta lista: no hay que tocar el HTML.

   PARA AGREGAR UNA PIEZA: copia un bloque completo (desde { hasta },),
   pégalo debajo del último, cambia los datos y sube su foto a
   assets/products/.

   Campos:
     id              → identificador único, en minúsculas y con guiones
                       (ej. "anillo-esmeralda-oval"). No se repite.
     name            → nombre visible de la pieza.
     material        → línea de material (ej. "Oro 18K · Esmeralda natural").
     badge           → etiqueta sobre la foto (ej. "18K", "Nuevo"). "" = sin etiqueta.
     image           → ruta de la foto. Si lo dejas "", se usa
                       assets/products/<id>.jpg automáticamente.
     description     → frase corta que aparece sobre la foto.
     category        → id de una colección de data/categories.js
                       ("dinero", "amor", "proteccion", "autoestima"…).
     whatsappMessage → mensaje propio para WhatsApp. "" = mensaje automático.
     visible         → true se muestra, false se oculta (sin borrarla).
     featured        → true = pieza destacada (aparece primero).

   Guía completa: GUIA-CATALOGO.md
   ========================================================================== */

export const products = [
  {
    id: "cadena-gucci",
    name: "Cadena Gucci",
    material: "Oro amarillo 18K",
    badge: "18K",
    image: "assets/products/cadena-gucci.jpg", // FOTO TEMPORAL — reemplazar por la real
    description: "Eslabón Gucci en oro amarillo de 18K. Presencia sobria para todos los días.",
    category: "dinero",
    whatsappMessage: "",
    visible: true,
    featured: false,
  },
  {
    id: "pulsera-diamantada",
    name: "Pulsera diamantada",
    material: "Balines en oro 18K",
    badge: "18K",
    image: "assets/products/pulsera-diamantada.jpg", // FOTO TEMPORAL — reemplazar por la real
    description: "Balines diamantados en oro de 18K que capturan la luz con cada movimiento.",
    category: "amor",
    whatsappMessage: "",
    visible: true,
    featured: false,
  },
  {
    id: "topitos-emerium",
    name: "Topitos Emerium",
    material: "Oro 18K · Esmeralda natural",
    badge: "18K",
    image: "assets/products/topitos-emerium.jpg", // FOTO TEMPORAL — reemplazar por la real
    description: "Topos en oro de 18K con esmeralda natural colombiana.",
    category: "proteccion",
    whatsappMessage: "",
    visible: true,
    featured: false,
  },
];

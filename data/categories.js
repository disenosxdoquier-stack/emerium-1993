/* ==========================================================================
   EMERIUM 1993 — COLECCIONES / CATEGORÍAS
   --------------------------------------------------------------------------
   Cada bloque { … } es una colección. Aparece automáticamente en la sección
   "Colecciones con intención" y como filtro del catálogo.

   Campos:
     id          → identificador corto, sin espacios ni tildes (ej. "amor").
                   Es el que se escribe en "category" de cada producto.
     name        → nombre visible.
     description → frase corta debajo del nombre.
     image       → (opcional) foto de fondo en assets/collections/. "" = sin foto.
     visible     → true se muestra, false se oculta.

   El número (01, 02, 03…) se pone solo, según el orden de esta lista.
   Guía completa: GUIA-CATALOGO.md
   ========================================================================== */

export const categories = [
  {
    id: "dinero",
    name: "Dinero",
    description: "Ambición, movimiento y expansión.",
    image: "",
    visible: true,
  },
  {
    id: "amor",
    name: "Amor",
    description: "Conexión, presencia y vínculos reales.",
    image: "",
    visible: true,
  },
  {
    id: "proteccion",
    name: "Protección",
    description: "Fortaleza para avanzar con seguridad.",
    image: "",
    visible: true,
  },
  {
    id: "autoestima",
    name: "Autoestima",
    description: "Una declaración de valor propio.",
    image: "",
    visible: true,
  },
];

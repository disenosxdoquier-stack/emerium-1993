/* ==========================================================================
   Tarjeta de producto — plantilla ÚNICA para todas las piezas.
   Cambiar el diseño aquí lo cambia en todo el catálogo.
   ========================================================================== */

import { h } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { linkToWhatsApp, productMessage } from "../lib/whatsapp.js";

/** Marcador elegante cuando la fotografía no existe o no carga. */
function placeholder() {
  return h(
    "div",
    { class: "product-card__placeholder", "aria-hidden": "true" },
    h("span", { html: icons.stone }),
    "Fotografía próximamente"
  );
}

export function productCard(product, { consultLabel = "Consultar" } = {}) {
  const img = h("img", {
    src: product.image,
    alt: `${product.name} — ${product.material}`.replace(/ — $/, ""),
    loading: "lazy",
    decoding: "async",
    width: 900,
    height: 1200,
  });
  img.addEventListener(
    "error",
    () => {
      console.warn(`[Emerium] No se encontró la foto de "${product.id}": ${product.image}`);
      img.replaceWith(placeholder());
    },
    { once: true }
  );

  const consult = h(
    "a",
    {
      class: "link-underline product-card__consult",
      "aria-label": `${consultLabel} ${product.name} por WhatsApp`,
    },
    consultLabel
  );
  linkToWhatsApp(consult, productMessage(product));

  return h(
    "article",
    { class: "product-card", "data-id": product.id, "data-category": product.category },
    h(
      "div",
      { class: "product-card__media" },
      img,
      product.badge && h("span", { class: "product-card__badge" }, product.badge),
      product.description && h("p", { class: "product-card__desc" }, product.description)
    ),
    h(
      "div",
      { class: "product-card__body" },
      product.featured && h("span", { class: "product-card__featured" }, "✦ Destacada"),
      h("h3", { class: "product-card__name" }, product.name),
      consult,
      product.material && h("p", { class: "product-card__material" }, product.material)
    )
  );
}

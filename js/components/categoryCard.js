/* ==========================================================================
   Tarjeta de colección — sección "Colecciones con intención".
   ========================================================================== */

import { h } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

export function categoryCard(category, { linkLabel = "Explorar", onSelect } = {}) {
  const bg = h("div", { class: "collection-card__bg", "aria-hidden": "true" });
  if (category.image) {
    const img = h("img", { src: category.image, alt: "", loading: "lazy", decoding: "async" });
    img.addEventListener("error", () => img.remove(), { once: true });
    bg.append(img);
  }

  return h(
    "a",
    {
      class: "collection-card",
      href: `?coleccion=${encodeURIComponent(category.id)}#piezas`,
      "data-category": category.id,
      "data-reveal": true,
      onclick: (event) => {
        if (!onSelect) return;
        event.preventDefault();
        onSelect(category.id);
      },
    },
    bg,
    h("span", { class: "collection-card__num" }, category.number),
    h(
      "div",
      null,
      h("h3", { class: "collection-card__name" }, category.name),
      category.description && h("p", { class: "collection-card__desc" }, category.description),
      h("span", { class: "collection-card__link" }, linkLabel, h("span", { html: icons.arrowRight }))
    )
  );
}

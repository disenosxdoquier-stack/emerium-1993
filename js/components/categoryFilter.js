/* ==========================================================================
   Filtros del catálogo — un botón por colección + "Todas".
   ========================================================================== */

import { h } from "../lib/dom.js";

export function categoryFilter(container, { categories, counts, total, allLabel, onChange }) {
  const buttons = [
    { id: "all", name: allLabel, count: total },
    ...categories.map((c) => ({ id: c.id, name: c.name, count: counts.get(c.id) || 0 })),
  ].map((item) =>
    h(
      "button",
      {
        type: "button",
        class: "filter",
        "data-filter": item.id,
        "aria-pressed": "false",
        onclick: () => onChange(item.id),
      },
      item.name,
      h("span", { class: "filter__count" }, String(item.count).padStart(2, "0"))
    )
  );

  container.replaceChildren(...buttons);

  return {
    setActive(id) {
      for (const btn of buttons) btn.setAttribute("aria-pressed", String(btn.dataset.filter === id));
      const active = buttons.find((b) => b.dataset.filter === id);
      if (active && container.scrollWidth > container.clientWidth) {
        container.scrollTo({ left: active.offsetLeft - 24, behavior: "smooth" });
      }
    },
  };
}

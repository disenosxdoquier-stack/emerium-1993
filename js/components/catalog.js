/* ==========================================================================
   Catálogo completo — une filtros, tarjetas, "Ver más" y la URL.
   Lee los datos ya preparados por lib/catalog.js.
   ========================================================================== */

import { filterByCategory, countByCategory } from "../lib/catalog.js";
import { productCard } from "./productCard.js";
import { categoryFilter } from "./categoryFilter.js";

const PARAM = "coleccion";

export function createCatalog({ root, products, categories, texts, pageSize = 9 }) {
  const grid = root.querySelector("[data-product-grid]");
  const empty = root.querySelector("[data-empty]");
  const loadMore = root.querySelector("[data-load-more]");
  const filtersEl = root.querySelector("[data-filters]");
  const validIds = new Set(categories.map((c) => c.id));

  const state = { category: "all", shown: pageSize };

  const filters = categoryFilter(filtersEl, {
    categories,
    counts: countByCategory(products),
    total: products.length,
    allLabel: texts.allLabel,
    onChange: (id) => select(id, { scroll: false }),
  });

  function render({ appendFrom = 0 } = {}) {
    const list = filterByCategory(products, state.category);
    const visible = list.slice(0, state.shown);

    const cards = visible.slice(appendFrom).map((product, i) => {
      const card = productCard(product, { consultLabel: texts.consultLabel });
      card.classList.add("is-entering");
      card.style.animationDelay = `${Math.min(i, 8) * 80}ms`;
      return card;
    });

    if (appendFrom === 0) grid.replaceChildren(...cards);
    else grid.append(...cards);

    empty.hidden = list.length > 0;
    loadMore.hidden = list.length <= state.shown;
    filters.setActive(state.category);
  }

  function syncUrl() {
    const url = new URL(window.location.href);
    if (state.category === "all") url.searchParams.delete(PARAM);
    else url.searchParams.set(PARAM, state.category);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function select(id, { scroll = true } = {}) {
    state.category = validIds.has(id) ? id : "all";
    state.shown = pageSize;
    render();
    syncUrl();
    if (scroll) {
      history.replaceState(null, "", window.location.pathname + window.location.search + "#piezas");
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  loadMore.addEventListener("click", () => {
    const from = state.shown;
    state.shown += pageSize;
    render({ appendFrom: from });
  });

  // Colección inicial desde la URL (?coleccion=amor)
  const initial = new URLSearchParams(window.location.search).get(PARAM);
  state.category = validIds.has(initial) ? initial : "all";
  render();

  return { select };
}

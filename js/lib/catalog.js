/* ==========================================================================
   Catálogo — prepara, valida, ordena y filtra los datos de data/
   Los componentes nunca leen products.js directamente: pasan por aquí.
   ========================================================================== */

const warn = (msg) => console.warn(`[Emerium] ${msg}`);

/** Colecciones visibles, con su número (01, 02…) según el orden de la lista. */
export function prepareCategories(rawCategories = []) {
  const seen = new Set();
  return rawCategories
    .filter((c) => {
      if (!c || !c.id || !c.name) {
        warn("Hay una colección sin id o sin name en data/categories.js; se omite.");
        return false;
      }
      if (seen.has(c.id)) {
        warn(`La colección "${c.id}" está repetida en data/categories.js; se usa la primera.`);
        return false;
      }
      seen.add(c.id);
      return c.visible !== false;
    })
    .map((c, i) => ({
      id: String(c.id),
      name: String(c.name),
      description: c.description || "",
      image: c.image || "",
      number: String(i + 1).padStart(2, "0"),
    }));
}

/** Productos visibles, completos y ordenados (destacados primero). */
export function prepareProducts(rawProducts = [], categories = []) {
  const categoryIds = new Set(categories.map((c) => c.id));
  const seen = new Set();

  const list = rawProducts
    .filter((p, index) => {
      if (!p || !p.id || !p.name) {
        warn(`El producto nº ${index + 1} de data/products.js no tiene id o name; se omite.`);
        return false;
      }
      if (seen.has(p.id)) {
        warn(`El id "${p.id}" está repetido en data/products.js; se muestra solo el primero.`);
        return false;
      }
      seen.add(p.id);
      if (p.category && !categoryIds.has(p.category)) {
        warn(
          `El producto "${p.id}" usa la colección "${p.category}", que no existe (o está oculta) en data/categories.js. Solo aparecerá en "Todas".`
        );
      }
      return p.visible !== false;
    })
    .map((p, index) => ({
      id: String(p.id),
      name: String(p.name),
      material: p.material || "",
      badge: p.badge || "",
      image: p.image && p.image.trim() ? p.image.trim() : `assets/products/${p.id}.jpg`,
      description: p.description || "",
      category: p.category || "",
      whatsappMessage: p.whatsappMessage || "",
      featured: p.featured === true,
      index,
    }));

  // Destacados primero; después, el mismo orden que en products.js.
  return list.sort((a, b) => Number(b.featured) - Number(a.featured) || a.index - b.index);
}

export function filterByCategory(products, categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export function countByCategory(products) {
  const counts = new Map();
  for (const p of products) counts.set(p.category, (counts.get(p.category) || 0) + 1);
  return counts;
}

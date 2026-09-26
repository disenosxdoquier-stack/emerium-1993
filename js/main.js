/* ==========================================================================
   EMERIUM 1993 — arranque de la landing
   Lee data/ y construye la página. No contiene textos ni productos.
   ========================================================================== */

import { site } from "../data/site.js";
import { categories as rawCategories } from "../data/categories.js";
import { products as rawProducts } from "../data/products.js";

import { getPath } from "./lib/dom.js";
import { prepareCategories, prepareProducts } from "./lib/catalog.js";
import { linkToWhatsApp } from "./lib/whatsapp.js";

import { categoryCard } from "./components/categoryCard.js";
import { createCatalog } from "./components/catalog.js";
import {
  renderFeatures,
  renderMarquee,
  renderParagraphs,
  renderStats,
  renderGuarantees,
  renderSocial,
} from "./components/lists.js";

import { initReveal, splitWords } from "./effects/reveal.js";
import { initHeader, initMobileMenu } from "./effects/header.js";
import { initParallax } from "./effects/parallax.js";

const $ = (selector) => document.querySelector(selector);
const content = site.content;

/* 1. Textos: cada [data-content="ruta"] recibe su texto desde site.js */
function bindContent() {
  document.querySelectorAll("[data-content]").forEach((el) => {
    const value = getPath(site, el.dataset.content);
    if (typeof value === "string") el.textContent = value;
    else console.warn(`[Emerium] Falta el texto "${el.dataset.content}" en data/site.js`);
  });
  document.querySelectorAll("img[data-src]").forEach((img) => {
    const src = getPath(site, img.dataset.src);
    if (src) img.src = src;
    if (img.dataset.alt) img.alt = getPath(site, img.dataset.alt) || "";
  });
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

/* 2. Botones de WhatsApp: [data-whatsapp] (+ mensaje propio opcional) */
function bindWhatsApp() {
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    const custom = a.dataset.whatsappMessage && getPath(site, a.dataset.whatsappMessage);
    linkToWhatsApp(a, custom || site.whatsappMessage);
  });
}

/* 3. Listas de contenido */
function renderLists() {
  renderFeatures($('[data-list="hero-features"]'), content.hero.features);
  renderMarquee($("[data-marquee]"), content.marquee);
  renderParagraphs($('[data-list="essence-paragraphs"]'), content.essence.paragraphs);
  renderStats($('[data-list="essence-stats"]'), content.essence.stats);
  renderGuarantees($('[data-list="guarantees"]'), content.guarantees.items);
  renderSocial($("[data-social]"), site);
}

/* 4. Colecciones + catálogo (100% desde data/) */
function renderCatalog() {
  const categories = prepareCategories(rawCategories);
  const products = prepareProducts(rawProducts, categories);

  const catalog = createCatalog({
    root: $("#piezas"),
    products,
    categories,
    texts: content.products,
    pageSize: site.catalog?.pageSize || 9,
  });

  const collections = $("[data-collections]");
  collections.replaceChildren(
    ...categories.map((category, i) => {
      const card = categoryCard(category, {
        linkLabel: content.collections.linkLabel,
        onSelect: (id) => catalog.select(id),
      });
      card.style.setProperty("--reveal-delay", `${i * 110}ms`);
      return card;
    })
  );
  if (!categories.length) $(".collections")?.remove();
}

/* 5. Arranque */
function start() {
  bindContent();
  renderLists();
  renderCatalog();
  bindWhatsApp();
  splitWords($("[data-words]"));

  initHeader();
  initMobileMenu();
  initReveal();
  initParallax();

  document.documentElement.classList.add("app-loaded");

  // Entrada del hero cuando las tipografías están listas (máx. 1,2 s de espera)
  const ready = () => requestAnimationFrame(() => document.documentElement.classList.add("is-ready"));
  Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1200))]).then(ready);
}

start();

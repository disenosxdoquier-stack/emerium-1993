/* ==========================================================================
   Listas de contenido de data/site.js: franja, cifras, garantías, redes…
   ========================================================================== */

import { h } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { whatsappUrl } from "../lib/whatsapp.js";

export function renderFeatures(container, items = []) {
  container.replaceChildren(...items.map((text) => h("li", null, text)));
}

/** Franja en movimiento: dos grupos idénticos para un bucle continuo. */
export function renderMarquee(track, items = []) {
  if (!items.length) {
    track.closest(".marquee")?.remove();
    return;
  }
  const repeated = [];
  while (repeated.length < 10) repeated.push(...items);
  const group = () => h("div", { class: "marquee__group" }, repeated.map((t) => h("span", { class: "marquee__item" }, t)));
  track.replaceChildren(group(), group());
}

export function renderParagraphs(container, paragraphs = []) {
  container.replaceChildren(
    ...paragraphs.map((text, i) => h("p", { "data-reveal": true, style: { "--reveal-delay": `${i * 120}ms` } }, text))
  );
}

export function renderStats(container, stats = []) {
  container.replaceChildren(
    ...stats.map((s, i) =>
      h(
        "div",
        { class: "stat", "data-reveal": true, style: { "--reveal-delay": `${i * 120}ms` } },
        h("dt", null, s.label),
        h("dd", null, s.value)
      )
    )
  );
}

export function renderGuarantees(container, items = []) {
  container.replaceChildren(
    ...items.map((g, i) =>
      h(
        "li",
        { class: "guarantee", "data-reveal": true, style: { "--reveal-delay": `${i * 140}ms` } },
        h("span", { class: "guarantee__icon", html: icons[g.icon] || icons.spark }),
        h("h3", { class: "guarantee__title" }, g.title),
        h("p", { class: "guarantee__text" }, g.text)
      )
    )
  );
}

/** Redes: solo se muestran las que tienen enlace. Nunca un enlace vacío. */
export function renderSocial(container, site) {
  const isUrl = (v) => typeof v === "string" && /^https?:\/\/\S+$/i.test(v.trim());
  const links = [
    { label: "Instagram", url: isUrl(site.instagram) ? site.instagram.trim() : null },
    { label: "TikTok", url: isUrl(site.tiktok) ? site.tiktok.trim() : null },
    { label: "WhatsApp", url: whatsappUrl() },
  ].filter((l) => l.url);

  if (!links.length) {
    container.hidden = true;
    return;
  }
  container.replaceChildren(
    ...links.map((l) => h("li", null, h("a", { href: l.url, target: "_blank", rel: "noopener" }, l.label)))
  );
}

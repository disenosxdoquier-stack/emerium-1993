/* Aparición suave de elementos al entrar en pantalla. */

import { h } from "../lib/dom.js";

/** Divide un titular en palabras para revelarlas una a una. */
export function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.setAttribute("aria-label", el.textContent.trim());
  el.replaceChildren(
    ...words.flatMap((word, i) => [
      h("span", { class: "word", "aria-hidden": "true", style: { "--i": i } }, word),
      i < words.length - 1 ? " " : "",
    ])
  );
}

export function initReveal(root = document) {
  const targets = root.querySelectorAll("[data-reveal], [data-words]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );
  targets.forEach((el) => observer.observe(el));
}

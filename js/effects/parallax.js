/* Parallax sutil del arco del hero al hacer scroll. */

import { prefersReducedMotion } from "../lib/dom.js";

export function initParallax() {
  const orbits = document.querySelector(".orbits");
  if (prefersReducedMotion()) {
    orbits?.pauseAnimations?.();
    return;
  }
  const items = [...document.querySelectorAll("[data-parallax]")];
  if (!items.length) return;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) {
      for (const el of items) el.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

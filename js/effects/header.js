/* Header: fondo al hacer scroll, se oculta al bajar y aparece al subir.
   Menú móvil: abrir/cerrar, bloqueo de scroll, tecla Esc y foco. */

export function initHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (goingDown && y > window.innerHeight * 0.8) header.classList.add("is-hidden");
    else if (goingUp || y < 80) header.classList.remove("is-hidden");
    lastY = y;
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
  update();
}

export function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;
  const label = toggle.querySelector(".visually-hidden");
  menu.inert = true;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    if (label) label.textContent = open ? "Cerrar menú" : "Abrir menú";
    menu.classList.toggle("is-open", open);
    menu.inert = !open;
    document.documentElement.classList.toggle("menu-open", open);
    document.body.classList.toggle("is-locked", open);
    if (open) menu.querySelector("a")?.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

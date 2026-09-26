/* Iconos SVG de línea fina usados por los componentes. */

const svg = (body, viewBox = "0 0 24 24") =>
  `<svg viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icons = {
  spark: svg('<path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z"/>'),
  gem: svg('<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18M15 3l-3 18M9 3L7.5 9M15 3l1.5 6"/>'),
  arrow: svg('<path d="M6 18L18 6M8 6h10v10"/>'),
  arrowRight: svg('<path d="M3 12h18M15 6l6 6-6 6"/>'),
  stone: svg(
    '<path d="M16 2h24l14 16v44L40 78H16L2 62V18z"/><path d="M20 12h16l8 9v38l-8 9H20l-8-9V21z"/><path d="M16 2l4 10M40 2l-4 10M54 18l-10 3M54 62l-10-3M40 78l-4-10M16 78l4-10M2 62l10-3M2 18l10 3"/>',
    "0 0 56 80"
  ),
};

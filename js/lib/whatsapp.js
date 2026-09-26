/* ==========================================================================
   WhatsApp — todos los botones usan el número de data/site.js
   ========================================================================== */

import { site } from "../../data/site.js";

let warned = false;

/** Devuelve solo los dígitos del número, o "" si no es un número válido. */
export function getWhatsAppNumber() {
  const digits = String(site.whatsappNumber || "").replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15 ? digits : "";
}

export function isWhatsAppConfigured() {
  return getWhatsAppNumber() !== "";
}

/** Enlace wa.me con el mensaje, o null si el número aún no está configurado. */
export function whatsappUrl(message = site.whatsappMessage) {
  const number = getWhatsAppNumber();
  if (!number) return null;
  const text = String(message || site.whatsappMessage || "").trim();
  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/** Mensaje de un producto: el suyo propio o la plantilla general. */
export function productMessage(product) {
  if (product.whatsappMessage && product.whatsappMessage.trim()) return product.whatsappMessage;
  return String(site.productMessageTemplate || site.whatsappMessage)
    .replaceAll("{nombre}", product.name)
    .replaceAll("{material}", product.material);
}

/**
 * Convierte un <a> en botón de WhatsApp.
 * Sin número configurado, el enlace lleva a #contacto (nunca queda roto).
 */
export function linkToWhatsApp(anchor, message) {
  const url = whatsappUrl(message);
  if (url) {
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    anchor.removeAttribute("data-whatsapp-pending");
    return;
  }
  anchor.href = "#contacto";
  anchor.removeAttribute("target");
  anchor.setAttribute("data-whatsapp-pending", "");
  if (!warned) {
    warned = true;
    console.warn(
      "[Emerium] WhatsApp sin configurar: escribe el número real en data/site.js → whatsappNumber."
    );
  }
}

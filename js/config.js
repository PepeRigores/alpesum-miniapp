/**
 * Configuración global de la miniapp ALPESUM.
 * Centraliza datos que pueden cambiar (tienda, WhatsApp, contacto).
 * con el objetivo de facilitar su mantenimiento y actualización.
 */
const APP_CONFIG = {
  brand: {
    name: "ALPESUM",
    legalName: "ALPESUM LEVANTE SL",
    tagline: "Soluciones profesionales para automoción y taller",
  },
  store: {
    // URL base de la tienda online actual. No incluir barra final.
    baseUrl: "https://alpesum.com",
    homeUrl: "https://alpesum.com/es/",
  },
  contact: {
    // PENDIENTE DE VALIDACIÓN antes de publicar.
    // Formato internacional sin "+" ni espacios para wa.me (España: 34 + número).
    whatsappNumber: "34644151389",
    phoneDisplay: "644 15 13 89",
    phoneHref: "tel:+34644151389",
    email: "info@alpesum.com",
  },
  links: {
    // Enlaces de la tienda actual.
    termsUrl: "https://alpesum.com/es/content/3-terminos-y-condiciones-de-uso",
    aboutUrl: "https://alpesum.com/es/content/4-sobre-nosotros",
    contactUrl: "https://alpesum.com/es/contactanos",
  },
};

/**
 * Construye un enlace wa.me con mensaje personalizado.
 * @param {string} productName - Nombre del producto consultado.
 * @returns {string} URL de WhatsApp lista para abrir.
 */
function buildWhatsAppUrl(productName) {
  const number = (APP_CONFIG.contact.whatsappNumber || "").replace(/\D/g, "");
  const safeName = (productName || "un producto").trim();
  const message =
    `Hola, estoy interesado en el producto ${safeName} que he visto en el Instagram de ALPESUM. ¿Podrían darme más información?`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

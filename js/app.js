(function initAlpesumMiniapp() {
  "use strict";

  const catalogEl = document.getElementById("product-catalog");
  const yearEl = document.getElementById("current-year");

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === "string") el.textContent = value;
  }

  function setHref(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === "string") el.setAttribute("href", value);
  }

  function applyConfig() {
    const { store, contact, links, brand } = APP_CONFIG;

    document.querySelectorAll("[data-store-url]").forEach((el) => {
      el.setAttribute("href", store.homeUrl);
    });
    document.querySelectorAll("[data-contact-url]").forEach((el) => {
      el.setAttribute("href", links.contactUrl);
    });

    setHref("footer-phone", contact.phoneHref);
    setText("footer-phone", contact.phoneDisplay);
    setHref("footer-whatsapp", buildWhatsAppUrl(brand.name));
    setHref("footer-email", `mailto:${contact.email}`);
    setText("footer-email", contact.email);
    setHref("footer-terms", links.termsUrl);
    setHref("footer-about", links.aboutUrl);
    setHref("footer-store", store.homeUrl);

    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function createBadge(product) {
    if (!product.badge) return "";
    const type = product.featured ? "featured" : "default";
    return `<span class="product-badge badge-${type}">${escapeHtml(product.badge)}</span>`;
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text == null ? "" : String(text);
    return div.innerHTML;
  }

  function createProductCard(product) {
    const article = document.createElement("article");
    article.className = "product-card";
    article.setAttribute("data-product-id", String(product.id));

    const whatsappUrl = buildWhatsAppUrl(product.name);
    const storeUrl = product.storeUrl || APP_CONFIG.store.homeUrl;

    article.innerHTML = `
      <div class="product-media">
        ${createBadge(product)}
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)}"
          loading="lazy"
          decoding="async"
          width="800"
          height="800"
        />
      </div>
      <div class="product-body">
        <h3 class="product-name">${escapeHtml(product.name)}</h3>
        <p class="product-description">${escapeHtml(product.description)}</p>
        <p class="product-price">${escapeHtml(product.price)}</p>
        <div class="product-actions">
          <a
            class="btn btn-primary"
            href="${escapeHtml(storeUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver ${escapeHtml(product.name)} en la tienda de ALPESUM"
          >Ver en tienda</a>
          <a
            class="btn btn-secondary"
            href="${escapeHtml(whatsappUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar ${escapeHtml(product.name)} por WhatsApp"
          >Consultar por WhatsApp</a>
        </div>
      </div>
    `;

    return article;
  }

  function renderProducts() {
    if (!catalogEl || !Array.isArray(PRODUCTS)) return;
    catalogEl.innerHTML = "";
    PRODUCTS.forEach((product) => {
      catalogEl.appendChild(createProductCard(product));
    });
  }

  applyConfig();
  renderProducts();
})();

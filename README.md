# ALPESUM Miniapp

Miniapp web estática, mobile-first, tipo escaparate digital para ALPESUM. Muestra productos destacados y redirige a la tienda online oficial para consultar fichas o realizar compras. No incluye carrito, registro, pagos ni gestión de pedidos.

## Stack

- HTML5
- CSS3
- JavaScript vanilla (ES6+)
- Sin frameworks, sin backend, sin base de datos

## Estructura

```text
alpesum-miniapp/
├── index.html
├── README.md
├── assets/
│   ├── icons/
│   └── images/
│       ├── banners/
│       ├── logo/
│       └── products/
├── css/
│   ├── styles.css
│   └── responsive.css
└── js/
    ├── config.js
    ├── products.js
    └── app.js
```

## Cómo modificar los productos

Edita `js/products.js`. Cada elemento del array `PRODUCTS` tiene esta estructura:

```js
{
  id: 1,
  name: "Nombre del producto",
  description: "Descripción breve del producto",
  price: "XX,XX €",
  image: "assets/images/products/producto-1.webp",
  storeUrl: "URL_DEL_PRODUCTO_EN_ALPESUM",
  featured: false,
  badge: ""
}
```

Recomendaciones:

- **`storeUrl`**: usa la URL completa de la ficha en `https://alpesum.com/...`. Cada producto debe tener su enlace individual.
- **`image`**: coloca la foto en `assets/images/products/`. Usa WebP cuando sea posible para mejorar rendimiento. Puedes usar "00-imagen-provisional.svg" si no tienes aún la imagen definitiva
- **`price`**: formato visible para el usuario, por ejemplo `"45,40 €"`.
- **`featured`**: `true` si quieres destacarlo visualmente con la insignia.
- **`badge`**: texto opcional como `"Oferta"`, `"Destacado"` o vacío `""`.

No es necesario modificar `index.html` para cambiar productos: las tarjetas se generan automáticamente.

## Cómo modificar configuración global

Edita `js/config.js`:

- `store.baseUrl` / `store.homeUrl`: tienda online oficial.
- `contact.whatsappNumber`: número en formato internacional sin `+` ni espacios (ejemplo España: `34644151389`).
- `contact.phoneDisplay` / `contact.phoneHref`: teléfono visible y enlace `tel:`.
- `contact.email`: correo de contacto.
- `links`: enlaces a páginas legales/contacto existentes en la web oficial.

El mensaje de WhatsApp se genera en `buildWhatsAppUrl(productName)` dentro de `config.js`:

```text
Hola, estoy interesado en el producto [NOMBRE DEL PRODUCTO] que he visto en el Instagram de ALPESUM. ¿Podrían darme más información?
```

### Compatibilidad con rutas

El proyecto usa rutas relativas (`./css/...`, `./js/...`, `./assets/...`) para que funcione correctamente tanto en local como cuando se publique bajo la ruta del repositorio en GitHub Pages. No uses rutas absolutas que empiecen por `/`.

## Notas

- Las compras se realizan en la tienda online existente de ALPESUM.
- La arquitectura separa datos (`products.js`), configuración (`config.js`) y presentación (`app.js`/HTML/CSS) para facilitar cambios futuros o migraciones de la tienda.

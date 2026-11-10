/**
 * Catálogo destacado para la miniapp ALPESUM.
 *
 * Cada producto enlaza a su ficha en la tienda online actual.
 * Para cambiar los producto sustituye los valores por la nuevainformación:
 * - name, description, price
 * - image (preferiblemente .webp en assets/images/products/)
 * - storeUrl (URL completa de la ficha en alpesum.com)
 * - featured / badge según necesidad comercial
 *
 * No se añade lógica de compra aquí: esta miniapp solo redirige a la tienda.
 */
const PRODUCTS = [
  {
    id: 1,
    name: "Xenum Super Seal TAPA FUGAS DE ACEITE",
    description: "Xenum Super Seal tapa las fugas de aceite en el motor y la caja de cambios. Contiene componentes sintéticos activos que regeneran las juntas. No cambia las propiedades lubricantes del aceite. No contiene disolventes, ni teflón por eso es un producto a la vanguardia de otras marcas.",
    price: "46,32 €",
    image: "assets/images/products/xenum-super-seal-tapa-fugas-de-aceite.jpg",
    storeUrl: "https://alpesum.com/es/fugas-compresion-super-seal-tapafugas-xenum-/12-xenum-super-seal-tapa-fugas-de-aceite.html",
    featured: true,
    badge: "Destacado",
  },
  {
    id: 2,
    name: "Xenum M-flush Limpiador de Motor",
    description: "Limpiador de aceite para motores diésel y gasolina  altamente efectivo sin ningún tipo de disolvente, elimina de forma segura residuos que se generan dentro del motor, evitando contaminar el nuevo aceite cuando se proceda a su cambio.",
    price: "20,00 €",
    image: "assets/images/products/xenum-m-flush-limpiador-de-motor-diesel-gasolina.jpg",
    storeUrl: "https://alpesum.com/es/aditivos-para-aceite-motor-/96-xenum-m-flush-limpiador-de-motor-diesel-gasolina.html",
    featured: false,
    badge: "",
  },
  {
    id: 3,
    name: "ATORNILLADOR M7",
    description: "Atornillador a bateria, de ultima generacion, comodo y ligero. Indispensable en el taller y en cualquier lugar de trabajo, para trabajos duros y de gran consistencia.",
    price: "337,59 €",
    image: "assets/images/products/atornillador-m7.jpg",
    storeUrl: "https://alpesum.com/es/bateria/69-atornillador-m7.html",
    featured: false,
    badge: "",
  },
  {
    id: 4,
    name: "OSRAM LEDSL105 Baliza",
    description: "La LEDguardianROAD FLARE Signal V16 IoT es una luz de aviso legalmente requerida, certificada, homologada y conectada a la red DGT 3.0 en España. Su uso es obligatorio en España desde el 1 de enero de 2026 y sustituye a los actuales triángulos de advertencia1).",
    price: "39,93 €",
    image: "assets/images/products/osram-ledsl105-baliza-v16-luz-conectada-wifi-certificada-espana-emergencia.jpg",
    storeUrl: "https://alpesum.com/es/inicio/163-osram-ledsl105-baliza-v16-luz-conectada-wifi-certificada-espana-emergencia.html",
    featured: false,
    badge: "Oferta",
  },
  {
    id: 5,
    name: "KIT APAREJO PREMIUM 3,6L. + CATALIZADOR VERY FAST 0,9L.",
    description: "Aparejo BLANCO , GRIS O NEGRO, acrílico de dos componentes con un muy alto poder de relleno, rápido secado y ademas con un fácil lijado.",
    price: "87,12 €",
    image: "assets/images/products/kit-aparejo-premium-36l-catalizador-very-fast-09l.jpg",
    storeUrl: "https://alpesum.com/es/acrilicos/134-kit-aparejo-premium-36l-catalizador-very-fast-09l.html",
    featured: false,
    badge: "Oferta",
  },
  {
    id: 6,
    name: "COLADOR DE PAPEL 190 micras",
    description: "Coladores de papel para acrílicos, con malla de nylon. Permite el colado rápido y obtener una superficie libre de motas.",
    price: "90,70 €",
    image: "assets/images/products/colador-de-papel-190-micras.jpg",
    storeUrl: "https://alpesum.com/es/chapa-y-pintura/48-colador-de-papel-190-micras.html",
    featured: false,
    badge: "Oferta",
  },
  {
    id: 7,
    name: "Xenum In&Out cleaner (1.5litros)",
    description: "Aditivo para diesel diseñado para limpiar y proteger de forma intensiva los componentes del sistema de combustible (bomba, inyectores..) y de escape (turbo -inc geometría variable-, catalizador, FAP...)",
    price: "67,60 €",
    image: "assets/images/products/xenum-inout-cleaner-15litros-aditivo-inout.jpg",
    storeUrl: "https://alpesum.com/es/limpiadores-diesel/26-xenum-inout-cleaner-15litros-aditivo-inout.html",
    featured: false,
    badge: "",
  },
  {
    id: 8,
    name: "NITRILO SIN POLVO FLASH ORANGE POWER",
    description: "CARACTERISTICAS: Guante de alto rendimiento, Longitud de 24 cm., Gofrado Diamantado en ambas caras. SECTORES: Alimentación, Medico sanitario, Mecánica, Pinturas, Limpiezas e Industria.",
    price: "18,00 €",
    image: "assets/images/products/nitrilo-naranja-alpesum-guante-diamantado.jpg",
    storeUrl: "https://alpesum.com/es/epi-/117-nitrilo-naranja-alpesum-guante-diamantado.html",
    featured: false,
    badge: "",
  }
];

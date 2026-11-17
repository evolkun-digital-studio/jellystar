export type Category = "Tees" | "Hoodies" | "Denim" | "Tops" | "Accessories";

export type Stock = "in" | "low" | "out";

export type Product = {
  id: string;
  name: string;
  colorway: string;
  /** Current selling price. When `compareAt` is set this is the sale price. */
  price: number;
  /** Original price — shown struck through when on sale. */
  compareAt?: number;
  category: Category;
  image: string;
  /** Second shot swapped in on hover (Collection grid). */
  hoverImage?: string;
  badge?: "NEW" | "LIMITED" | "BEST SELLER" | "3-PACK" | "SALE";
  featured?: boolean;
  /** Colour names — must exist in `swatches` below. */
  colors?: string[];
  /** Sizes in stock. Omit for "all sizes". Use ["One size"] for accessories. */
  sizes?: string[];
  stock?: Stock;
  tags?: string[];
};

/** Full size run shown in the Collection size picker. */
export const SIZES = ["XS", "S", "M", "L", "XL"] as const;

/** Colour-dot values (mapped onto the design-system variables). */
export const swatches: Record<string, string> = {
  Black: "var(--bg)",
  Charcoal: "var(--bg-3)",
  Grey: "var(--mute)",
  White: "var(--ink)",
  Bone: "var(--paper)",
  Lime: "var(--lime)",
  Pink: "var(--pink)",
  Cyan: "var(--cyan)",
  Blue: "var(--blue)",
};

export const products: Product[] = [
  {
    id: "chrome-logo-tee",
    name: "Chrome Logo Tee",
    colorway: "Washed Black",
    price: 45,
    category: "Tees",
    image: "/images/tee-street.webp",
    hoverImage: "/images/tees-trio.webp",
    badge: "BEST SELLER",
    featured: true,
    colors: ["Black", "Bone", "Charcoal"],
    tags: ["best"],
  },
  {
    id: "orbit-hoodie",
    name: "Orbit Hoodie",
    colorway: "Jet Black",
    price: 95,
    category: "Hoodies",
    image: "/images/hoodie-back.webp",
    hoverImage: "/images/hoodie-white.webp",
    badge: "NEW",
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["best", "new"],
  },
  {
    id: "stardust-hoodie",
    name: "Stardust Hoodie",
    colorway: "Moon White",
    price: 95,
    category: "Hoodies",
    image: "/images/hoodie-white.webp",
    hoverImage: "/images/hoodie-back.webp",
    badge: "LIMITED",
    colors: ["White", "Black"],
    sizes: ["M", "L"],
  },
  {
    id: "shooting-star-denim",
    name: "Shooting Star Denim",
    colorway: "Ash Wash",
    price: 120,
    category: "Denim",
    image: "/images/denim-pocket.webp",
    colors: ["Grey", "Black"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "halftone-star-denim",
    name: "Halftone Star Denim",
    colorway: "Coal Wash",
    price: 130,
    category: "Denim",
    image: "/images/denim-lollipop.webp",
    hoverImage: "/images/denim-pocket.webp",
    badge: "NEW",
    colors: ["Charcoal", "Grey"],
    tags: ["best", "new"],
  },
  {
    id: "core-tee-pack",
    name: "Core Tee Pack",
    colorway: "White / Black / Charcoal",
    price: 110,
    category: "Tees",
    image: "/images/tees-trio.webp",
    hoverImage: "/images/tee-street.webp",
    badge: "3-PACK",
    colors: ["White", "Black", "Charcoal"],
    tags: ["best"],
  },
  {
    id: "halftone-tube-top",
    name: "Halftone Star Tube Top",
    colorway: "Bone / Black",
    price: 38,
    category: "Tops",
    image: "/images/tube-top.webp",
    colors: ["Bone", "Black"],
    sizes: ["XS", "S", "M"],
  },
  // Dummy products (placeholder images reused from existing shots)
  {
    id: "nebula-boxy-tee",
    name: "Nebula Boxy Tee",
    colorway: "Chalk White",
    price: 48,
    category: "Tees",
    image: "/images/tees-trio.webp",
    badge: "NEW",
    colors: ["White", "Lime"],
    tags: ["new"],
  },
  {
    id: "comet-zip-hoodie",
    name: "Comet Zip Hoodie",
    colorway: "Charcoal Fade",
    price: 105,
    compareAt: 125,
    category: "Hoodies",
    image: "/images/hoodie-white.webp",
    badge: "SALE",
    colors: ["Charcoal", "White"],
    tags: ["best", "sale"],
  },
  {
    id: "galaxy-cargo-denim",
    name: "Galaxy Cargo Denim",
    colorway: "Midnight Wash",
    price: 140,
    category: "Denim",
    image: "/images/denim-pocket.webp",
    badge: "LIMITED",
    colors: ["Black", "Blue"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "starlight-baby-tee",
    name: "Starlight Baby Tee",
    colorway: "Bone / Pink",
    price: 34,
    category: "Tops",
    image: "/images/tube-top.webp",
    colors: ["Bone", "Pink"],
    sizes: ["XS", "S", "M", "L"],
  },
  // ---- Extended range ----
  {
    id: "chrome-logo-tee-bone",
    name: "Chrome Logo Tee — Bone",
    colorway: "Bone / Chrome Print",
    price: 45,
    compareAt: 55,
    category: "Tees",
    image: "/images/tee-street.webp",
    hoverImage: "/images/tees-trio.webp",
    badge: "SALE",
    colors: ["Bone", "Black"],
    tags: ["sale"],
  },
  {
    id: "orbit-zip-hoodie",
    name: "Orbit Zip Hoodie",
    colorway: "Jet Black / Lime",
    price: 115,
    category: "Hoodies",
    image: "/images/hoodie-back.webp",
    hoverImage: "/images/hoodie-white.webp",
    badge: "NEW",
    colors: ["Black", "Lime"],
    sizes: ["M", "L", "XL"],
    stock: "low",
    tags: ["new"],
  },
  {
    id: "star-cargo-denim",
    name: "Star Cargo Denim",
    colorway: "Ash Wash",
    price: 135,
    category: "Denim",
    image: "/images/denim-pocket.webp",
    colors: ["Grey"],
    sizes: [],
    stock: "out",
  },
  {
    id: "mini-star-baby-tee",
    name: "Mini Star Baby Tee",
    colorway: "White / Pink Star",
    price: 32,
    category: "Tops",
    image: "/images/tube-top.webp",
    badge: "NEW",
    colors: ["White", "Pink", "Cyan"],
    sizes: ["XS", "S"],
    stock: "low",
    tags: ["best", "new"],
  },
  {
    id: "sparkle-beanie",
    name: "Sparkle Beanie",
    colorway: "Black / Chrome",
    price: 28,
    category: "Accessories",
    image: "/images/hoodie-white.webp",
    colors: ["Black", "Lime", "Pink"],
    sizes: ["One size"],
  },
  {
    id: "shooting-star-shorts",
    name: "Shooting Star Shorts",
    colorway: "Coal Wash",
    price: 46,
    compareAt: 60,
    category: "Denim",
    image: "/images/denim-lollipop.webp",
    badge: "SALE",
    colors: ["Charcoal", "Grey"],
    sizes: ["XS", "S", "M", "L"],
    tags: ["sale"],
  },
  {
    id: "core-long-sleeve",
    name: "Core Long Sleeve",
    colorway: "Charcoal",
    price: 52,
    category: "Tees",
    image: "/images/tees-trio.webp",
    hoverImage: "/images/tee-street.webp",
    badge: "NEW",
    colors: ["Charcoal", "White", "Black"],
    tags: ["new"],
  },
  {
    id: "halftone-bandana",
    name: "Halftone Bandana",
    colorway: "Bone / Black Halftone",
    price: 25,
    category: "Accessories",
    image: "/images/tube-top.webp",
    colors: ["Bone", "Black"],
    sizes: ["One size"],
  },
];

export const categories: ("All" | Category)[] = ["All", "Tees", "Hoodies", "Denim", "Tops", "Accessories"];

/* ---------- selectors ---------- */

const byId = (id: string) => products.find((p) => p.id === id);

export const isSoldOut = (p: Product) => p.stock === "out";

/** Products in a category. */
export function byCategory(cat: Category): Product[] {
  return products.filter((p) => p.category === cat);
}

/** Ranked 01–06 in the "Most wanted" rail. Edit the id order to re-rank. */
export const bestSellers: Product[] = [
  "chrome-logo-tee",
  "orbit-hoodie",
  "halftone-star-denim",
  "mini-star-baby-tee",
  "comet-zip-hoodie",
  "core-tee-pack",
]
  .map(byId)
  .filter((p): p is Product => !!p);

/** In-stock items priced under $50. */
export const under50: Product[] = products.filter((p) => p.price < 50 && !isSoldOut(p));

/** Items tagged "new" (or badged NEW). */
export const newArrivals: Product[] = products.filter((p) => p.badge === "NEW" || p.tags?.includes("new"));

/** Outfits for the "Complete the fit" section. Hotspot x/y are % of the photo. */
export type Look = {
  id: string;
  title: string;
  image: string;
  alt: string;
  items: { product: Product; x: number; y: number }[];
};

function look(id: string, title: string, image: string, alt: string, items: [string, number, number][]): Look {
  return {
    id,
    title,
    image,
    alt,
    items: items
      .map(([pid, x, y]) => {
        const product = byId(pid);
        return product ? { product, x, y } : null;
      })
      .filter((i): i is Look["items"][number] => !!i),
  };
}

export const looks: Look[] = [
  look("orbit-fit", "Orbit fit", "/images/hoodie-back.webp", "Model wearing the Orbit Hoodie with halftone denim", [
    ["orbit-hoodie", 52, 32],
    ["halftone-star-denim", 46, 78],
    ["sparkle-beanie", 50, 8],
  ]),
  look("star-girl-fit", "Star girl fit", "/images/tube-top.webp", "Model wearing the halftone tube top with star denim", [
    ["halftone-tube-top", 50, 36],
    ["shooting-star-shorts", 46, 74],
    ["halftone-bandana", 62, 14],
  ]),
];

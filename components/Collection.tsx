"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { categories, isSoldOut, newArrivals, products, SIZES, type Category, type Product } from "@/lib/products";
import { useCart } from "./CartContext";
import { Sparkle, Tape } from "./Decor";
import Price from "./Price";
import { FILTER_EVENT } from "./ShopByCategory";

type Sort = "featured" | "price-asc" | "price-desc" | "new";

const sortLabels: Record<Sort, string> = {
  featured: "Featured",
  "price-asc": "Price: low–high",
  "price-desc": "Price: high–low",
  new: "New",
};

const PAGE = 4;

function sortList(list: Product[], sort: Sort) {
  const copy = [...list];
  if (sort === "price-asc") copy.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") copy.sort((a, b) => b.price - a.price);
  if (sort === "new") copy.sort((a, b) => Number(newArrivals.includes(b)) - Number(newArrivals.includes(a)));
  return copy;
}

/** One-size items (e.g. ["One size"]) skip the XS–XL picker. */
const oneSize = (p: Product) => p.sizes?.length === 1 && !(SIZES as readonly string[]).includes(p.sizes[0]);
const hasSize = (p: Product, s: string) => !p.sizes || p.sizes.includes(s);

export default function Collection() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [picked, setPicked] = useState<Record<string, string>>({});
  const { add } = useCart();

  const bento = filter === "All" && sort === "featured";
  // Bento: the 2×2 featured card + 8 tiles fill 3 rows; plain grid: 2 rows.
  const initial = bento ? 9 : 8;
  const [shown, setShown] = useState(initial);

  // Reset paging whenever the view changes.
  useEffect(() => setShown(initial), [filter, sort, initial]);

  // Shop-by-category tiles pre-filter the grid.
  useEffect(() => {
    const onFilter = (e: Event) => {
      const cat = (e as CustomEvent<Category>).detail;
      if (categories.includes(cat)) setFilter(cat);
    };
    window.addEventListener(FILTER_EVENT, onFilter);
    return () => window.removeEventListener(FILTER_EVENT, onFilter);
  }, []);

  const list = useMemo(
    () => sortList(filter === "All" ? products : products.filter((p) => p.category === filter), sort),
    [filter, sort]
  );
  const visible = list.slice(0, shown);
  const more = list.length - visible.length;

  return (
    <section className="section collection" id="collection">
      <div className="section__head reveal">
        <div>
          <p className="kicker">[ 03 ] Shop the drop</p>
          <h2 className="h2">
            <span className="glitch" data-text="2026">2026</span> <span className="chrome-text">Collection</span>
          </h2>
        </div>
        <div className="collection__tools">
          <div className="chips" role="tablist" aria-label="Filter products">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`chip ${filter === c ? "chip--active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="chip chip--select">
            <span className="sr-only">Sort products</span>
            <span aria-hidden="true">Sort:</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              {(Object.keys(sortLabels) as Sort[]).map((s) => (
                <option key={s} value={s}>
                  {sortLabels[s]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className={`grid ${bento ? "grid--bento" : ""}`}>
        {visible.map((p, i) => {
          const out = isSoldOut(p);
          const featured = p.featured && bento;
          const single = oneSize(p);
          const size = single ? p.sizes![0] : picked[p.id];
          return (
            <article
              key={p.id}
              className={`card reveal ${featured ? "card--featured" : ""} ${out ? "card--soldout" : ""}`}
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="card__media">
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.colorway}`}
                  fill
                  sizes={featured ? "(max-width: 1100px) 100vw, 50vw" : "(max-width: 680px) 50vw, (max-width: 1100px) 33vw, 25vw"}
                />
                {p.hoverImage && !out && (
                  <Image
                    className="card__img-alt"
                    src={p.hoverImage}
                    alt=""
                    fill
                    sizes={featured ? "(max-width: 1100px) 100vw, 50vw" : "(max-width: 680px) 50vw, (max-width: 1100px) 33vw, 25vw"}
                  />
                )}
                {p.badge && !out && <span className={`sticker sticker--${i % 3}`}>{p.badge}</span>}
                {i % 3 === 0 && !out && <Tape className="card__tape" />}

                {out ? (
                  <span className="soldout-tape" aria-hidden="true">
                    SOLD OUT ✦ SOLD OUT ✦ SOLD OUT
                  </span>
                ) : (
                  <div className="card__buy">
                    {!single && (
                      <div className="card__sizes" role="radiogroup" aria-label={`Size for ${p.name}`}>
                        {SIZES.map((s) => {
                          const ok = hasSize(p, s);
                          return (
                            <button
                              key={s}
                              type="button"
                              role="radio"
                              aria-checked={size === s}
                              disabled={!ok}
                              aria-label={ok ? `Size ${s}` : `Size ${s}, unavailable`}
                              className={`card__size ${size === s ? "is-picked" : ""}`}
                              onClick={() => setPicked((m) => ({ ...m, [p.id]: s }))}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    )}
                    <button
                      className="card__add"
                      disabled={!size}
                      onClick={() => size && add(single ? p.name : `${p.name} (${size})`)}
                      aria-label={size ? `Add ${p.name}, size ${size}, to cart` : `Select a size for ${p.name} first`}
                    >
                      {size ? `+ Add ${single ? "to cart" : size}` : "Pick a size"}
                    </button>
                  </div>
                )}
              </div>
              <div className="card__body">
                <div>
                  <h3>{p.name}</h3>
                  <p>{out ? "Sold out — restock soon" : p.colorway}</p>
                </div>
                <Price product={p} />
              </div>
            </article>
          );
        })}

        {bento && more === 0 && (
          <a href="#drop" className="card card--cta reveal">
            <Sparkle className="card--cta__star" />
            <span className="card--cta__label">Next drop</span>
            <strong>
              View all
              <br />
              drops →
            </strong>
          </a>
        )}
      </div>

      {more > 0 && (
        <div className="collection__more">
          <button className="btn btn--dark" onClick={() => setShown((n) => n + PAGE)} aria-label={`Load ${Math.min(PAGE, more)} more products`}>
            Load more <span aria-hidden="true">({more})</span>
          </button>
        </div>
      )}
    </section>
  );
}

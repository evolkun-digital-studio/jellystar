"use client";

import Image from "next/image";
import { byCategory, type Category } from "@/lib/products";
import { Tape } from "./Decor";

const tiles: { cat: Category; img: string; alt: string; tone: "lime" | "pink" | "cyan" | "blue" }[] = [
  { cat: "Tees", img: "/images/tee-street.webp", alt: "Chrome logo tee worn on the street", tone: "lime" },
  { cat: "Hoodies", img: "/images/hoodie-back.webp", alt: "Back print of the Orbit hoodie", tone: "pink" },
  { cat: "Denim", img: "/images/denim-lollipop.webp", alt: "Halftone star denim close-up", tone: "cyan" },
  { cat: "Tops", img: "/images/tube-top.webp", alt: "Halftone star tube top", tone: "blue" },
];

/** Event the Collection listens for so a tile click pre-filters the grid. */
export const FILTER_EVENT = "jellystar:filter";

export default function ShopByCategory() {
  return (
    <section className="section cats" id="categories" aria-labelledby="cats-title">
      <div className="section__head reveal">
        <div>
          <p className="kicker">[ 02 ] Shop by category</p>
          <h2 className="h2" id="cats-title">
            Pick your <span className="glitch" data-text="orbit">orbit</span>
          </h2>
        </div>
      </div>

      <div className="cats__grid">
        {tiles.map((t, i) => {
          const count = byCategory(t.cat).length;
          return (
            <a
              key={t.cat}
              href="#collection"
              className={`cat cat--${t.tone} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
              aria-label={`Shop ${t.cat} — ${count} items`}
              onClick={() => window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: t.cat }))}
            >
              <div className="cat__img">
                <Image src={t.img} alt={t.alt} fill sizes="(max-width: 960px) 50vw, 25vw" />
              </div>
              <span className="photo__wrap" />
              <span className="cat__band" aria-hidden="true">
                {t.cat} ✦ {t.cat} ✦ {t.cat} ✦ {t.cat}
              </span>
              {i % 2 === 0 && <Tape className="cat__tape" />}
              <span className="cat__foot">
                <span className="cat__count">{String(count).padStart(2, "0")} items →</span>
                <strong className="cat__name">{t.cat}</strong>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

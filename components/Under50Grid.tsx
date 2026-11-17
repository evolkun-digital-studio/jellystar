"use client";

import Image from "next/image";
import { under50 } from "@/lib/products";
import { useCart } from "./CartContext";
import { Starburst } from "./Decor";
import Price from "./Price";

/** Show full rows only (6 desktop / 3 tablet / 2 mobile all divide 6 and 12). */
const items = under50.slice(0, under50.length >= 12 ? 12 : 6);

export default function Under50Grid() {
  const { add } = useCart();
  return (
    <section className="section u50" id="under-50" aria-labelledby="u50-title">
      <div className="section__head reveal">
        <div>
          <p className="kicker">[ 08 ] Pocket money</p>
          <h2 className="h2" id="u50-title">
            Under <span className="chrome-text">$50</span>
          </h2>
        </div>
        <div className="u50__sticker" aria-hidden="true">
          <Starburst className="u50__burst" />
          <span>
            UNDER
            <br />
            $50
          </span>
        </div>
      </div>

      <div className="u50__grid">
        {items.map((p, i) => (
          <article key={p.id} className="mini reveal" style={{ transitionDelay: `${(i % 6) * 50}ms` }}>
            <div className="mini__media">
              <Image src={p.image} alt={`${p.name} — ${p.colorway}`} fill sizes="(max-width: 680px) 50vw, (max-width: 1100px) 33vw, 16vw" />
              <button className="mini__add" onClick={() => add(p.name)} aria-label={`Quick add ${p.name} to cart`}>
                +
              </button>
            </div>
            <div className="mini__body">
              <h3>{p.name}</h3>
              <Price product={p} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

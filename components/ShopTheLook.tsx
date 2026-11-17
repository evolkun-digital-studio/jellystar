"use client";

import Image from "next/image";
import { useState } from "react";
import { looks, type Look } from "@/lib/products";
import { useCart } from "./CartContext";
import { Tape } from "./Decor";

function Outfit({ look, index }: { look: Look; index: number }) {
  const { add } = useCart();
  const [active, setActive] = useState<string | null>(null);
  const total = look.items.reduce((s, i) => s + i.product.price, 0);
  const bundle = Math.round(total * 0.9);

  return (
    <article className="look reveal" style={{ transitionDelay: `${index * 90}ms` }} aria-labelledby={`${look.id}-title`}>
      <div className="look__photo">
        <Image src={look.image} alt={look.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 25vw" />
        <span className="photo__wrap" />
        {index === 0 && <Tape className="look__tape" />}
        {look.items.map((it, n) => (
          <button
            key={it.product.id}
            className={`hotspot ${active === it.product.id ? "is-active" : ""}`}
            style={{ left: `${it.x}%`, top: `${it.y}%` }}
            aria-label={`Item ${n + 1}: ${it.product.name}`}
            aria-describedby={`${look.id}-${it.product.id}`}
            onMouseEnter={() => setActive(it.product.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(it.product.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(it.product.id)}
          >
            {n + 1}
          </button>
        ))}
      </div>

      <div className="look__side">
        <h3 className="look__title" id={`${look.id}-title`}>
          {look.title}
        </h3>
        <ol className="look__list">
          {look.items.map((it, n) => (
            <li
              key={it.product.id}
              id={`${look.id}-${it.product.id}`}
              className={`look__item ${active === it.product.id ? "is-active" : ""}`}
              onMouseEnter={() => setActive(it.product.id)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="look__thumb">
                <Image src={it.product.image} alt="" fill sizes="56px" />
                <span className="look__n">{n + 1}</span>
              </span>
              <span className="look__meta">
                <strong>{it.product.name}</strong>
                <span>${it.product.price}</span>
              </span>
              <button className="look__add" onClick={() => add(it.product.name)} aria-label={`Add ${it.product.name} to cart`}>
                +
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="look__foot">
        <p className="look__total">
          Get the full fit — <strong>${bundle}</strong> <s>${total}</s>
          <span className="look__save">-10%</span>
        </p>
        <button
          className="btn btn--lime"
          onClick={() => look.items.forEach((it) => add(it.product.name))}
          aria-label={`Add all ${look.items.length} items from the ${look.title} to cart`}
        >
          Add all to cart
        </button>
      </div>
    </article>
  );
}

export default function ShopTheLook() {
  return (
    <section className="section stl" id="shop-the-look" aria-labelledby="stl-title">
      <div className="section__head reveal">
        <div>
          <p className="kicker">[ 06 ] Complete the fit</p>
          <h2 className="h2" id="stl-title">
            Shop the <span className="glitch" data-text="look">look</span>
          </h2>
        </div>
        <p className="section__lede">Tap a number to find the piece. Grab the whole fit and save 10%.</p>
      </div>
      <div className="stl__grid">
        {looks.map((l, i) => (
          <Outfit key={l.id} look={l} index={i} />
        ))}
      </div>
    </section>
  );
}

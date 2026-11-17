"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { bestSellers, isSoldOut, swatches } from "@/lib/products";
import { useCart } from "./CartContext";
import { Sparkle } from "./Decor";
import Price from "./Price";

export default function BestSellers() {
  const { add } = useCart();
  const rail = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".bs__slide");
    const w = slide ? slide.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="section bs" id="best-sellers" aria-labelledby="bs-title">
      <div className="section__head reveal">
        <div>
          <p className="kicker">[ 04 ] Most wanted</p>
          <h2 className="h2" id="bs-title">
            <span className="chrome-text">Best</span> <span className="outline-text">sellers</span>
            <Sparkle className="h2__spark" />
          </h2>
        </div>
        <div className="rail-nav">
          <button className="rail-nav__btn" onClick={() => step(-1)} disabled={edge.start} aria-label="Previous best sellers" aria-controls="bs-rail">
            ←
          </button>
          <button className="rail-nav__btn" onClick={() => step(1)} disabled={edge.end} aria-label="Next best sellers" aria-controls="bs-rail">
            →
          </button>
        </div>
      </div>

      <div className="bs__rail" id="bs-rail" ref={rail} onScroll={update} role="list" aria-label="Best sellers, ranked">
        {bestSellers.map((p, i) => {
          const out = isSoldOut(p);
          return (
            <div key={p.id} className="bs__slide reveal" role="listitem" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="bs__rank" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <article className="card bs__card">
                <div className="card__media">
                  <Image src={p.image} alt={`${p.name} — ${p.colorway}`} fill sizes="(max-width: 680px) 72vw, 300px" />
                  <span className={`sticker sticker--${i % 3}`}>#{i + 1}</span>
                  {p.stock === "low" && <span className="tag-low">Only 3 left</span>}
                  {!out && (
                    <button className="card__add" onClick={() => add(p.name)} aria-label={`Add ${p.name} to cart`}>
                      + Add to cart
                    </button>
                  )}
                </div>
                <div className="card__body">
                  <div>
                    <h3>{p.name}</h3>
                    {p.colors && (
                      <ul className="dots" aria-label={`Colours: ${p.colors.join(", ")}`}>
                        {p.colors.map((c) => (
                          <li key={c} className="dot" style={{ background: swatches[c] }} title={c} />
                        ))}
                      </ul>
                    )}
                  </div>
                  <Price product={p} />
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Barcode, Scribble, Sparkle, Starburst, Tape } from "./Decor";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__wrap">
        {/* ---------- LEFT: framed main photo + stacked outline type ---------- */}
        <div className="hero__left">
          <div className="hero__frame" aria-hidden="true" />
          <figure className="photo hero__photo-main">
            <Image
              src="/images/hoodie-white.webp"
              alt="Model in the Jellystar Stardust hoodie with chrome back print"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 32vw"
            />
            <span className="photo__wrap" aria-hidden="true" />
          </figure>
          <Tape className="hero__tape-1" />
          <div className="stack-type" aria-hidden="true">
            <span>JELLYSTAR</span>
            <span>JELLYSTAR</span>
            <span className="is-solid">JELLYSTAR</span>
          </div>
        </div>

        {/* ---------- CENTER: headline + pink card ---------- */}
        <div className="hero__center">
          <p className="eyebrow">
            <Sparkle className="eyebrow__star" /> Streetwear · Limited drops · Worldwide
          </p>

          <h1 className="hero__title">
            <span className="glitch" data-text="NOT">NOT</span>
            <span className="chrome-text">JUST</span>
            <span className="glitch" data-text="CLOTHES">CLOTHES</span>
          </h1>
          <p className="hero__sub">A universe of expression</p>

          <div className="pink-card">
            <p>
              Chrome-print tees, heavyweight hoodies and star-wash denim — clothing for a brighter tomorrow.
              Inspired by the stars. Made for the bold.
            </p>
            <a href="#collection" className="btn btn--dark">
              Explore collection <span aria-hidden="true">→</span>
            </a>
            <div className="pink-card__foot">
              <span>www.jellystar.store</span>
              <span>@jellystar</span>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT: lime bar + side photo + stickers ---------- */}
        <div className="hero__right">
          <div className="hero__limebar" aria-hidden="true" />
          <figure className="photo hero__photo-side">
            <Image
              src="/images/tee-street.webp"
              alt="Black Jellystar chrome logo tee on asphalt"
              fill
              priority
              sizes="(max-width: 900px) 80vw, 26vw"
            />
            <span className="photo__wrap" aria-hidden="true" />
          </figure>
          <Tape className="hero__tape-2" />
          <Tape className="hero__tape-3" />
          <div className="hero__x" aria-hidden="true">
            <Tape className="hero__x-a" />
            <Tape className="hero__x-b" />
          </div>
          <div className="hero__year">
            <strong>2026</strong>
            <span>Collection</span>
          </div>
        </div>

        {/* small polaroid between columns */}
        <figure className="photo hero__photo-small">
          <Image src="/images/hoodie-back.webp" alt="Back of the Orbit hoodie" fill sizes="200px" />
        </figure>

        {/* floating decor */}
        <Starburst className="hero__burst" />
        <Starburst className="hero__burst hero__burst--sm" points={12} />
        <Scribble className="hero__scribble" />
        <Image className="hero__chrome-star" src="/images/star.png" alt="" width={520} height={188} aria-hidden="true" />
        <Sparkle className="hero__spark hero__spark--1" />
        <Sparkle className="hero__spark hero__spark--2" />
        <Barcode className="hero__barcode" />
      </div>

      <div className="hero__bottom">
        <span>[ 01 ]</span>
        <span className="hero__bottom-mid">
          JELLYSTAR® <i aria-hidden="true" /> Wear your universe.
        </span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}

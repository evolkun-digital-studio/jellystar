"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Barcode, Scribble, Sparkle } from "./Decor";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // TODO: connect to your email provider (Klaviyo, Mailchimp, Shopify, etc.)
    setDone(true);
  }

  return (
    <footer className="footer" id="contact">
      <div className="join reveal">
        <Scribble className="join__scribble" />
        <p className="kicker">[ 10 ] Join the galaxy</p>
        <h2 className="join__title">
          <span className="glitch" data-text="GET">GET</span> <span className="outline-text">EARLY</span>{" "}
          <span className="chrome-text">ACCESS</span>
        </h2>
        <p className="section__lede">Drop alerts, restocks and 15% off your first order. No spam — only stars.</p>

        {done ? (
          <p className="join__done">
            <Sparkle className="join__done-star" /> You&apos;re on the list. Watch your inbox.
          </p>
        ) : (
          <form className="join__form" onSubmit={onSubmit}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn--lime" type="submit">
              Subscribe →
            </button>
          </form>
        )}
      </div>

      <div className="footer__grid">
        <div className="footer__brand">
          <Image src="/images/logo.png" alt="Jellystar" width={220} height={60} />
          <p>Clothing for a brighter tomorrow.</p>
          <Barcode className="footer__barcode" seed={21} />
        </div>
        <div>
          <h4>Shop</h4>
          <a href="#collection">Tees</a>
          <a href="#collection">Hoodies</a>
          <a href="#collection">Denim</a>
          <a href="#collection">Tops</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#contact">Shipping</a>
          <a href="#contact">Returns</a>
          <a href="#contact">Size guide</a>
          <a href="#contact">FAQ</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@jellystar.store">hello@jellystar.store</a>
          <a href="https://www.jellystar.store">www.jellystar.store</a>
          <a href="#contact">Instagram</a>
          <a href="#contact">TikTok</a>
        </div>
      </div>

      <div className="footer__giant" aria-hidden="true">
        JELLYSTAR
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} JELLYSTAR®</span>
        <span>Wear your universe.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

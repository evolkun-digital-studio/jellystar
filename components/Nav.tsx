"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#drop", label: "Drops" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="Jellystar home">
          <Image src="/images/logo.png" alt="Jellystar" width={180} height={49} priority />
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <span className="nav__currency">USD</span>
          <a href="#collection" className="nav__cart" aria-label={`Cart, ${count} items`}>
            Cart <span className="nav__count">{count}</span>
          </a>
          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

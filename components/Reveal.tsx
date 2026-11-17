"use client";

import { useEffect } from "react";

/**
 * Adds `is-in` to every `.reveal` element as it scrolls into view.
 * Also watches the DOM so cards added later (load more, sort, filter) — or whose
 * className React rewrote (dropping `is-in`) — get observed and revealed too.
 */
export default function Reveal() {
  useEffect(() => {
    const pending = () => document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      const showAll = () => pending().forEach((el) => el.classList.add("is-in"));
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
      return () => mo.disconnect();
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const scan = () => pending().forEach((el) => io.observe(el));
    scan();

    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, []);
  return null;
}

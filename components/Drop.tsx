"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Starburst, Tape } from "./Decor";

// Change this to your next release date/time.
const DROP_DATE = new Date("2026-12-12T18:00:00+05:30");

function diff(to: Date) {
  const ms = Math.max(0, to.getTime() - Date.now());
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms / 3600000) % 24),
    m: Math.floor((ms / 60000) % 60),
    s: Math.floor((ms / 1000) % 60),
  };
}

export default function Drop() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(DROP_DATE));
    const id = window.setInterval(() => setT(diff(DROP_DATE)), 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells: [string, number | undefined][] = [
    ["Days", t?.d],
    ["Hrs", t?.h],
    ["Min", t?.m],
    ["Sec", t?.s],
  ];

  return (
    <section className="drop" id="drop">
      <div className="drop__scan" aria-hidden="true" />
      <div className="drop__inner">
        <h2 className="drop__giant glitch-xl reveal" data-text="DROP 02">
          DROP 02
        </h2>

        <div className="drop__row">
          <figure className="photo drop__photo reveal">
            <Image src="/images/hoodie-back.webp" alt="Orbit hoodie, back view" fill sizes="(max-width: 900px) 80vw, 34vw" />
            <Tape className="drop__tape" />
          </figure>

          <div className="drop__info reveal">
            <p className="kicker">[ 07 ] Limited drop</p>
            <p className="drop__date">12 December</p>
            <p className="drop__copy">
              The Orbit capsule lands in limited numbers: chrome puff-print hoodies, star-wash denim and a new tee
              colourway. Join the list for 30-minute early access.
            </p>

            <div className="countdown" aria-live="off">
              {cells.map(([label, v]) => (
                <div key={label} className="countdown__cell">
                  <strong>{v === undefined ? "--" : String(v).padStart(2, "0")}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn--lime">
              Get early access <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="drop__sticker" aria-hidden="true">
            <Starburst className="drop__burst" />
            <span>
              15%
              <br />
              OFF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

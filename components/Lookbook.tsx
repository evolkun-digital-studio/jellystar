import Image from "next/image";
import { Barcode, Sparkle } from "./Decor";

const posters = [
  { img: "/images/denim-lollipop.webp", title: ["SWEET", "STAR"], tag: "Halftone Denim", date: "DROP 01", tone: "lime" },
  { img: "/images/tube-top.webp", title: ["STAR", "GIRL"], tag: "Tube Top", date: "DROP 02", tone: "pink" },
  { img: "/images/denim-pocket.webp", title: ["BRAND", "NEW"], tag: "Shooting Star Denim", date: "DROP 03", tone: "cyan" },
  { img: "/images/tees-trio.webp", title: ["CORE", "TRIO"], tag: "Core Tee Pack", date: "ESSENTIALS", tone: "lime" },
];

export default function Lookbook() {
  return (
    <section className="section lookbook" id="lookbook">
      <div className="section__head reveal">
        <div>
          <p className="kicker">[ 05 ] Lookbook</p>
          <h2 className="h2">
            Wear your <span className="outline-text">universe</span>
          </h2>
        </div>
        <p className="section__lede">
          Chrome on cotton, stars on denim. Every piece is printed in small runs — when a drop is gone, it&apos;s gone.
        </p>
      </div>

      <div className="posters">
        {posters.map((p, i) => (
          <article key={i} className={`poster poster--${p.tone} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="poster__img">
              <Image src={p.img} alt={`${p.tag} lookbook`} fill sizes="(max-width: 700px) 78vw, 300px" />
            </div>
            <h3 className="poster__title" aria-label={p.title.join(" ")}>
              <span>{p.title[0]}</span>
              <span>{p.title[1]}</span>
            </h3>
            <span className="poster__band">
              {p.tag} ✦ {p.tag} ✦ {p.tag}
            </span>
            <span className="poster__pill">{p.date}</span>
            <Sparkle className="poster__spark poster__spark--a" />
            <Sparkle className="poster__spark poster__spark--b" />
            <div className="poster__foot">
              <span>jellystar.store</span>
              <Barcode className="poster__barcode" seed={i + 3} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

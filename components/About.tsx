import Image from "next/image";
import { Sparkle, Tape } from "./Decor";

const pillars = [
  { n: "1", title: "Streetwear", text: "Boxy cuts, dropped shoulders and heavyweight cotton built for the everyday." },
  { n: "2", title: "Essentials", text: "Core tees and hoodies in black, white and charcoal that go with everything." },
  { n: "3", title: "Limited drops", text: "Small runs, numbered releases. No restocks on drop pieces." },
  { n: "4", title: "Worldwide", text: "Shipped from our studio to wherever your universe is." },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        <div className="about__visual reveal">
          <figure className="photo about__card">
            <Image src="/images/business-card.webp" alt="Jellystar black business cards with chrome logo" fill sizes="(max-width: 900px) 92vw, 46vw" />
          </figure>
          <Tape className="about__tape" />
          <div className="about__note">
            Clothing
            <br />
            for a brighter
            <br />
            tomorrow
          </div>
        </div>

        <div className="about__text reveal">
          <p className="kicker">[ 09 ] About</p>
          <h2 className="h2">
            Inspired by the stars.
            <br />
            <span className="chrome-text">Made for the bold.</span>
          </h2>
          <p className="section__lede">
            Jellystar started with one shooting star and a chrome logo. Today it&apos;s a streetwear label for people
            who dress loud and live louder — every print is designed in-house and pressed in limited runs.
          </p>

          <ul className="pillars">
            {pillars.map((p) => (
              <li key={p.n}>
                <span className="pillars__n">{p.n}</span>
                <div>
                  <h3>
                    {p.title} <Sparkle className="pillars__star" />
                  </h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

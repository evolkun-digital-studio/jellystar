const words = ["NEW DROP", "WEAR YOUR UNIVERSE", "LIMITED DROPS", "MADE FOR THE BOLD", "WORLDWIDE SHIPPING"];

function Row({ outline }: { outline?: boolean }) {
  const items = [...words, ...words];
  return (
    <div className="marquee__track">
      {[0, 1].map((k) => (
        <div className="marquee__group" key={k} aria-hidden={k === 1}>
          {items.map((w, i) => (
            <span key={i} className={outline ? "is-outline" : ""}>
              {w} <b>✦</b>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Brand highlights">
      <div className="marquee__band marquee__band--lime">
        <Row />
      </div>
      <div className="marquee__band marquee__band--dark">
        <Row outline />
      </div>
    </section>
  );
}

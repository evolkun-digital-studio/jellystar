import type { CSSProperties } from "react";

type DecorProps = { className?: string; style?: CSSProperties };

/** Spiky starburst sticker (neon lime by default). */
export function Starburst({ className, style, points = 18 }: DecorProps & { points?: number }) {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? 50 : 22 + (i % 4 === 1 ? 4 : 0);
    const a = (Math.PI * i) / points - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" aria-hidden="true">
      <polygon points={pts.join(" ")} fill="currentColor" />
    </svg>
  );
}

/** Four-point sparkle, matches the small stars in the Jellystar logo. */
export function Sparkle({ className, style }: DecorProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0c.6 6.2 2.6 10.4 12 12-9.4 1.6-11.4 5.8-12 12-.6-6.2-2.6-10.4-12-12C9.4 10.4 11.4 6.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Hand-drawn orbit loops. */
export function Scribble({ className, style }: DecorProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 340 130" fill="none" aria-hidden="true">
      <ellipse cx="170" cy="62" rx="160" ry="40" transform="rotate(-6 170 62)" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="176" cy="70" rx="152" ry="34" transform="rotate(-2 176 70)" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="166" cy="58" rx="146" ry="44" transform="rotate(-10 166 58)" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Translucent strip of tape. */
export function Tape({ className, style }: DecorProps) {
  return <span className={`tape ${className ?? ""}`} style={style} aria-hidden="true" />;
}

/** Deterministic barcode (no randomness → no hydration mismatch). */
export function Barcode({ className, style, seed = 7 }: DecorProps & { seed?: number }) {
  const bars: { x: number; w: number }[] = [];
  let x = 0;
  let s = seed;
  while (x < 118) {
    s = (s * 9301 + 49297) % 233280;
    const w = 1 + (s % 4);
    bars.push({ x, w });
    x += w + 1 + ((s >> 3) % 3);
  }
  return (
    <svg className={className} style={style} viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true">
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y="0" width={b.w} height="40" fill="currentColor" />
      ))}
    </svg>
  );
}

# JELLYSTAR — Landing Page (Next.js 15)

Streetwear e-commerce landing page. Chrome Jellystar branding styled like a Y2K street poster: neon lime, pink and cyan accents, tape strips, starbursts, RGB-split type, grain and plastic-wrap highlights.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 18.18+ (Node 20+ recommended).

## Structure

```
app/
  layout.tsx       metadata, fonts (Unbounded / Space Grotesk / Space Mono via @fontsource)
  page.tsx         section order
  globals.css      all styles + design tokens (:root)
components/
  Nav.tsx          fixed nav, mobile menu, live cart count
  Hero.tsx         collage hero ("NOT JUST CLOTHES")
  Marquee.tsx      tilted scrolling bands
  Collection.tsx   filterable bento product grid + add-to-cart
  Lookbook.tsx     poster-style lookbook cards
  Drop.tsx         "DROP 02" banner with live countdown
  About.tsx        brand story + pillars
  Footer.tsx       newsletter form + footer
  CartContext.tsx  simple client cart state + toast
  Decor.tsx        SVG starburst, sparkle, scribble, tape, barcode
  Reveal.tsx       scroll-reveal observer
lib/products.ts    product data (names, prices, images, badges)
public/images/     brand assets + product photos
```

## Customize

- **Products / prices:** `lib/products.ts`
- **Next drop date:** `DROP_DATE` in `components/Drop.tsx`
- **Colours / fonts:** CSS variables at the top of `app/globals.css`
- **Newsletter:** wire `onSubmit` in `components/Footer.tsx` to your email provider
- **Cart:** `CartContext.tsx` is a front-end demo; connect it to Shopify / Stripe / your backend

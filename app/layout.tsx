import type { Metadata, Viewport } from "next";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/unbounded/900.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jellystar — Not Just Clothes | Streetwear & Limited Drops",
  description:
    "Jellystar is a streetwear label: chrome-print tees, heavyweight hoodies and star-wash denim in limited drops. Inspired by the stars. Made for the bold.",
  metadataBase: new URL("https://www.jellystar.store"),
  openGraph: {
    title: "Jellystar — Not Just Clothes",
    description: "Chrome-print streetwear in limited drops. Wear your universe.",
    images: ["/images/tees-trio.webp"],
    type: "website",
  },
  icons: { icon: "/images/star.png" },
};

export const viewport: Viewport = { themeColor: "#0c0c0d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import About from "@/components/About";
import BestSellers from "@/components/BestSellers";
import { CartProvider } from "@/components/CartContext";
import Collection from "@/components/Collection";
import Drop from "@/components/Drop";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lookbook from "@/components/Lookbook";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ShopByCategory from "@/components/ShopByCategory";
import ShopTheLook from "@/components/ShopTheLook";
import Under50Grid from "@/components/Under50Grid";

export default function Home() {
  return (
    <CartProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ShopByCategory />
        <Collection />
        <BestSellers />
        <Lookbook />
        <ShopTheLook />
        <Drop />
        <Under50Grid />
        <About />
      </main>
      <Footer />
      <Reveal />
    </CartProvider>
  );
}

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeHero } from "./sections/HomeHero";
import { EditorialWoman } from "./sections/EditorialWoman";
import { EditorialBanner } from "./sections/EditorialBanner";
import { EditorialMan } from "./sections/EditorialMan";
import { FeaturedProducts } from "./sections/FeaturedProducts";
import { NewArrivals } from "./sections/NewArrivals";
import { InstagramSection } from "./sections/InstagramSection";
import { About } from "./sections/About";
import { Location } from "./sections/Location";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />

      <main>
        <HomeHero />
        <EditorialWoman />
        <EditorialBanner />
        <EditorialMan />
        <FeaturedProducts />
        <NewArrivals />
        <InstagramSection />
        <About />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

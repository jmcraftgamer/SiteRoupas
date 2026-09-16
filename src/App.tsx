import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeHero } from "./sections/HomeHero";
import { Categories } from "./sections/Categories";
import { EditorialBanner } from "./sections/EditorialBanner";
import { FeaturedProducts } from "./sections/FeaturedProducts";
import { WomenCollection } from "./sections/WomenCollection";
import { MenCollection } from "./sections/MenCollection";
import { AccessoriesSection } from "./sections/AccessoriesSection";
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
        <Categories />
        <EditorialBanner />
        <FeaturedProducts />
        <WomenCollection />
        <MenCollection />
        <AccessoriesSection />
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

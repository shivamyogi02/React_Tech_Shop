
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer"; // ✅ Import Footer

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Slider */}
      <HeroSlider />

      {/* ✅ Featured Products Section */}
      <section className="mt-10">
        <FeaturedProducts />
      </section>

      {/* ✅ Top Products Section */}
      <section className="mt-10">
        <TopProducts />
      </section>

     

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

import Navbar from "@/layouts/public/Navbar";
import HeroSection from "@/components/home/HeroSection";
import { PublicLayouts } from "@/layouts";
import Footer from "@/layouts/public/Footer";

const Home = () => {
  return (
    <>
      <section className="bg-white">
        <PublicLayouts>
          <HeroSection />
          
        </PublicLayouts>
      </section>
    </>
  );
};

export default Home;

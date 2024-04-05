import Navbar from "@/layouts/public/Navbar";
import HeroSection from "@/components/home/HeroSection";
import { PublicLayouts } from "@/layouts";
import Footer from "@/layouts/public/Footer";

const Home = () => {
  return (
    <>
      <section className="bg-[rgb(231,248,238)]">
        {/* when we give the blank it false, */}
        <PublicLayouts commonHeroClass="hidden">
          <HeroSection />
        </PublicLayouts>
      </section>
    </>
  );
};

export default Home;

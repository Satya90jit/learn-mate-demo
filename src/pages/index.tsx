import Navbar from "@/layouts/public/Navbar";
import { PublicLayouts } from "@/layouts";
import Footer from "@/layouts/public/Footer";
import { CourseSection, HeroSection, HowItWork } from "@/components/home";

const Home = () => {
  return (
    <>
      <section className="bg-white">
        {/* when we give the blank it false, */}
        <PublicLayouts commonHeroClass="hidden">
          <HeroSection />
          <CourseSection />
          <HowItWork />
        </PublicLayouts>
      </section>
    </>
  );
};

export default Home;

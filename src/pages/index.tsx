import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CardSection from "@/components/home/CardSection";
import HeroSection from "@/components/home/HeroSection";

const Home = () => {
  return (
    <>
      <section className="bg-white">
        <Navbar />
        <HeroSection />
        <CardSection />
        <Footer />
      </section>
    </>
  );
};

export default Home;

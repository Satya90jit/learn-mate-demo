import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const about = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center h-screen">
        <div className="text-6xl font-semibold">ABOUT PAGE</div>
      </section>
      <Footer />
    </>
  );
};

export default about;

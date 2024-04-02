import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import React from "react";

const about = () => {
  return (
    <PublicLayouts commonHeroTitle="About">
      <section className="flex justify-center items-center h-screen">
        <div>ABOUT PAGE</div>
      </section>
    </PublicLayouts>
  );
};

export default about;

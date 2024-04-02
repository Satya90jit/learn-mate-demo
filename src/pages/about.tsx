import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import React from "react";

const about = () => {
  return (
    <PublicLayouts>
      <section className="flex justify-center items-center h-screen">
      <CommonHero name="About" />
       
      </section>
    </PublicLayouts>
  );
};

export default about;

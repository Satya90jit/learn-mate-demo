import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import React from "react";

const FaqPage = () => {
  return (
    <PublicLayouts
      title="FAQ PAGE || LEARN_MATE"
      description="This is our faq page"
    >
      <section className="flex justify-center items-center h-screen">
      <CommonHero name="FAQ" />
      </section>
    </PublicLayouts>
  );
};

export default FaqPage;

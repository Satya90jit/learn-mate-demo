import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import React from "react";

const FaqPage = () => {
  return (
    <PublicLayouts
      title="FAQ PAGE || LEARN_MATE"
      description="This is our faq page"
      commonHeroTitle="FAQS"
    >
      <section className="flex justify-center items-center h-screen"></section>
    </PublicLayouts>
  );
};

export default FaqPage;

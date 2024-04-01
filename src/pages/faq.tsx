import { PublicLayouts } from "@/layouts";
import React from "react";

const FaqPage = () => {
  return (
    <PublicLayouts
      title="FAQ PAGE || LEARN_MATE"
      description="This is our faq page"
    >
      <section className="flex justify-center items-center h-screen">
        <div className="text-6xl font-semibold">FAQ PAGE</div>
      </section>
    </PublicLayouts>
  );
};

export default FaqPage;

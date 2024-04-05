import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import React from "react";

const allcourses = () => {
  return (
    <PublicLayouts commonHeroTitle="All Courses">
      <section className="h-screen flex justify-center items-center">
        <div>ALL COURSES</div>
      </section>
    </PublicLayouts>
  );
};

export default allcourses;

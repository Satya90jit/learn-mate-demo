import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import React from "react";

const BlogPage = () => {
  return (
    <PublicLayouts>
      <section className="flex justify-center items-center h-screen">
      <CommonHero name="Blog" />
      </section>
    </PublicLayouts>
  );
};

export default BlogPage;

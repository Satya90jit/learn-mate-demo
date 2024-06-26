import CommonHero from "@/components/common/CommonHero";
import { PublicLayouts } from "@/layouts";
import Navbar from "@/layouts/public/Navbar";
import { UpperNav } from "@/layouts/public/UpperNav";
import Head from "next/head";
import React from "react";

const ContactPage = () => {
  return (
    <PublicLayouts commonHeroTitle="Contact">
      <section className="flex justify-center items-center h-screen"></section>
    </PublicLayouts>
  );
};

export default ContactPage;

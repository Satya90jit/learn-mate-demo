import { PublicLayouts } from "@/layouts";
import Navbar from "@/layouts/public/Navbar";
import Head from "next/head";
import React from "react";

const ContactPage = () => {
  return (
    <PublicLayouts>
      <section className="flex justify-center items-center h-screen">
        <div className="text-6xl font-semibold">CONTACT PAGE</div>
      </section>
    </PublicLayouts>
  );
};

export default ContactPage;

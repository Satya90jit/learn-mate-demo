import InnerNav from "@/layouts/public/InnerNav";
import { UpperNav } from "@/layouts/public/UpperNav";
import { MenuBook } from "@mui/icons-material";
import React from "react";
import AnimateButton from "../core/AnimateButton";

const HeroSection = () => {
  return (
    <>
      <UpperNav />
      <section className="flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-3 h-[50rem] lg:mx-32 mb-14 ">
        <InnerNav />
        <aside className="lg:w-[40%] w-full space-y-7 p-6">
          <h1 className="text-2xl text-green-700 font-semibold">
            Start your favourite course
          </h1>
          <div>
            <p className="text-5xl text-gray-900 font-semibold">
              Now learning from anywhere, and build your{" "}
              <span className="text-green-800">bright career.</span>
            </p>
            <img />
          </div>
          <p className="text-xl text-gray-700 font-medium">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <AnimateButton text={"Start A Course"} />
        </aside>
        <aside className="lg:w-[60%] w-full relative flex justify-end p-6">
          <div className="absolute top-20 lg:left-20 left-5">
            <div className="bg-green-700 rounded-full h-[10rem] w-[10rem] p-4 flex flex-col justify-center items-center space-y-1">
              <MenuBook className="text-white" />
              <h1 className="text-white font-semibold text-4xl">1,235</h1>
              <span className="text-gray-200 font-medium text-xl">courses</span>
            </div>
            <img src="/homeImages/shape-6.webp" />
          </div>
          <img
            src="/homeImages/slider-1.webp"
            className="lg:h-[45rem] h-[20rem] w-full object-contain"
          />
        </aside>
      </section>
    </>
  );
};

export default HeroSection;

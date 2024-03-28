import { MenuBook } from "@mui/icons-material";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center gap-10 h-[50rem] mx-24">
      <aside className="w-[40%] space-y-7">
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
      </aside>
      <aside className="w-[60%] relative flex justify-end">
        <div className="absolute top-14 left-14">
          <div className="bg-green-700 rounded-full h-[10rem] w-[10rem] p-4 flex flex-col justify-center items-center space-y-1">
            <MenuBook className="text-white" />
            <h1 className="text-white font-semibold text-4xl">1,235</h1>
            <span className="text-gray-200 font-medium text-xl">courses</span>
          </div>
          <img src="/homeImages/shape-6.webp" />
        </div>
        <img src="/homeImages/slider-1.webp" />
      </aside>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { CourseCard } from "../common";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
const CourseSection = () => {
  //custom arrow button
  const CustomArrow = ({ onClick, icon: Icon, position }: any) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        position === "left" ? "-left-14" : "-right-10"
      } bg-white text-black h-8 w-8 rounded-full`}
    >
      <Icon />
    </button>
  );
  // array of course category
  const Category = [
    "UI/UX Design",
    "Development",
    "Data Science",
    "Business",
    "Financial",
    "Science",
  ];

  //slider component
  const CourseSlider = () => {
    return (
      <Slider {...settings}>
        {Category?.map((item, index) => {
          return (
            <div className="w-full px-16">
              <p
                key={index}
                className="bg-white px-8 py-4 rounded-lg border hover:border-gray-400 cursor-pointer w-full"
              >
                {item}
              </p>
            </div>
          );
        })}
      </Slider>
    );
  };

  //setting for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomArrow icon={KeyboardArrowLeftIcon} position="left" />,
    nextArrow: <CustomArrow icon={KeyboardArrowRightIcon} position="right" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="my-16 mx-32">
      <h1 className="text-4xl font-bold text-gray-900">
        All <span className="text-green-600">Courses</span> of Learn Mate
      </h1>
      <aside className="flex justify-center items-center my-10 w-full">
        {/* //don't use grid or flex in the parent div of the slider */}
        <div className="bg-green-100/80 p-8 rounded-lg w-full mx-10 px-36 text-center">
          <CourseSlider />
        </div>
      </aside>
      <aside className="flex justify-center items-center w-full">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 w-full">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </aside>
    </section>
  );
};

export default CourseSection;
//https://www.npmjs.com/package/react-slick
//https://stackblitz.com/edit/vitejs-vite-ownrun?file=src%2FImageSlider.jsx

//react slick and carousel install package

// yarn add react-slick
//yarn add slick-carousel

// in which filed want to add slider just add these

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

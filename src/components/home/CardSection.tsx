import React from "react";
import CourseCard from "../cards/CourseCard";

const CardSection = () => {
  const arr = [
    {
      image: "",
      title: "",
      desc: "",
    },
  ];

  //map use , array , props pass
  return (
    <section className="mx-20 my-12">
      <h1 className="text-gray-800 text-5xl font-semibold my-8 text-center">
        Service section
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default CardSection;

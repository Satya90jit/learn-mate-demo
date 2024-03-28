import React, { useState } from "react";

const CourseCard = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-blue-700 rounded-lg border p-5 space-y-5">
      <img src="/vercel.svg" />
      <div className="text-white">
        <h1 className="text-xl font-semibold">export default CourseCard</h1>
        <p className="text-lg text-gray-200">
          export default CourseCard; export default CourseCard;
        </p>
        <button
          onClick={() => setToggle(true)}
          className="px-8 py-2 rounded-lg bg-blue-200 text-gray-800 mt-4"
        >
          {toggle ? "Purchased" : "Buy Now"}
        </button>
      </div>
    </section>
  );
};

export default CourseCard;

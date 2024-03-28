import React from "react";

const Navbar = () => {
  return (
    <section className="flex justify-around items-center bg-white shadow-lg h-14">
      <img src="/vercel.svg" className="h-8" />
      <div className="flex justify-around gap-8 text-lg text-gray-700 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Pages</p>
        <p>FAQ</p>
      </div>
      <div>
        <input
          className="rounded-lg bg-white text-gray-800 border p-2"
          placeholder="Enter here to search"
        />
      </div>
    </section>
  );
};

export default Navbar;

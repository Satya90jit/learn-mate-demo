import { Search } from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <section className="flex fixed top-0 z-50 justify-around items-center h-14 bg-white w-full shadow-lg">
      <img src="/vercel.svg" className="h-10" />
      <div className="flex justify-center gap-7 items-center">
        <p>Home</p>
        <p>Pages</p>
        <p>Blog</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="p-2 rounded-lg bg-slate-100 text-gray-800 hover:border border-green-400">
        <Search />
        <input
          placeholder="Enter for search..."
          className="bg-slate-100 outline-none"
        />
      </div>
    </section>
  );
};

export default Navbar;

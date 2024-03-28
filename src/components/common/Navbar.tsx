import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="flex justify-around items-center bg-white shadow-lg h-14 w-full">
      <img src="/vercel.svg" className="h-8" />
      <div className="hidden lg:flex justify-around gap-8 text-lg text-gray-700 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <p>Contact</p>
        <p>Pages</p>
        <p>FAQ</p>
      </div>
      <span className="lg:hidden">
        <MenuIcon />
      </span>
      <div className="hidden lg:block">
        <input
          className="rounded-lg bg-white text-gray-800 border p-2"
          placeholder="Enter here to search"
        />
      </div>
    </section>
  );
};

export default Navbar;

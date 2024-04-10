import { Search } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const InnerNav = () => {
  return (
    <section className="absolute top-20 justify-around items-center h-20 border border-green-600 w-[70%] rounded-lg">
      <img src="/mate_logo.png" className="h-10" />
      <div className="flex justify-center gap-7 items-center text-black ">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/allcourses"}>All Courses</Link>
        <Link href={"/faq"}>FAQ</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="flex gap-9 text-black">
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </section>
  );
};

export default InnerNav;

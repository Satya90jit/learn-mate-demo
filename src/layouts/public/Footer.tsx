import {
  CallEnd,
  Email,
  Facebook,
  FacebookOutlined,
  FacebookRounded,
  FacebookSharp,
  Instagram,
  LinkedIn,
  Phone,
  TransferWithinAStationRounded,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <section className="relative flex justify-center items-center bg-[rgb(231,248,238)] p-10 w-full">
      <img
        className="absolute top-1/2 left-4"
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png"
      />
      <aside className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full text-gray-800 mx-28">
        <div>
          <img
            className=" w-32 mb-2"
            src="mate_logo.png"
            alt=""
          />
          <div className="space-y-4">
            <p className="">Caribbean Cuttackmd</p>
            <p className=" text-green-500">Haymarket, Virginia (VA).</p>
            <div className="flex gap-2 text-green-500">
              <Email />
              <a href="mailto:address@gmail.com" className=" text-black">
                address@gmail.com
              </a>
            </div>
            <div className="flex text-green-600">
              <Phone className="mr-2" />
              <a href="tel:970 262-1413" className=" text-black">
                (970) 262-1413
              </a>
            </div>
            <div className="flex gap-7">
              <span className="h-10 w-10 p-3 flex justify-center items-center hover:bg-[#3b5998] transition-all duration-300 ease-in-out group cursor-pointer rounded-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <FacebookOutlined className="group-hover:text-white" />
              </span>
              <span className="h-10 w-10 p-3 flex justify-center items-center hover:bg-[#1da1f2] transition-all duration-300 ease-in-out group cursor-pointer rounded-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <Twitter className="group-hover:text-white" />
              </span>{" "}
              <span className="h-10 w-10 p-3 flex justify-center items-center hover:bg-[#0a66c2] transition-all duration-300 ease-in-out group cursor-pointer rounded-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <LinkedIn className="group-hover:text-white" />
              </span>{" "}
              <span className="h-10 w-10 p-3 flex justify-center items-center hover:bg-[#c32aa3] transition-all duration-300 ease-in-out group cursor-pointer rounded-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <Instagram className="group-hover:text-white" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl mb-10">Category</p>
          <div className="space-y-3">
            <p className="">Creative Writing</p>
            <p className="">Film & Video</p>
            <p className="">Graphic Design</p>
            <p className="">UI/UX Design</p>
            <p className="">Business Analytics</p>
            <p>Marketing</p>
          </div>
        </div>
        <div>
          <p className="text-3xl mb-10">Quick Links</p>
          <div className="space-y-3">
            <p className="">Privacy Policy</p>
            <p className="">Discussion</p>
            <p className="">Terms & Conditions</p>
            <p className="">Customer Support</p>
            <p className="">Course FAQ’s</p>
          </div>
        </div>
        <div>
          <p className="text-3xl mb-10">Subscribe</p>
          <div className="space-y-5">
            <p className="">
              Lorem Ipsum has been them an industry printer took a galley make
              book.
            </p>
            <input
              className="p-3 rounded-lg font-bold text-black text-SM border-hidden outline-none "
              type="text"
              placeholder="Email here"
            />
            <a
              href="#_"
              className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-lg hover:bg-white group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-green-600">
                Subscribe Now
              </span>
            </a>
          </div>
        </div>
      </aside>
      <div></div>
    </section>
  );
};

export default Footer;

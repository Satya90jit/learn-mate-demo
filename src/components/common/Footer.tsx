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
    <section className="flex  justify-center items-center bg-[rgb(231,248,238)] p-10  w-full">
      <aside className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-12 w-full text-gray-800 lg:mx-16 mx-3">
        <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png" />
        <div>
          <img
            className="mb-10"
            src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
            alt=""
          />
          <p className="mb-3">Caribbean Ct</p>
          <p className="mb-3 text-green-500">Haymarket, Virginia (VA).</p>
          <div className="flex gap-2 text-green-500">
            <Email />
            <p className="mb-3 text-black">address@gmail.com</p>
          </div>
          <div className="flex gap-2 text-green-500">
            <Phone />
            <p className="mb-3 text-black">(970) 262-1413</p>
          </div>
          <div className="flex justify-between">
            <FacebookOutlined className="hover:text-blue-700" />
            <Twitter />
            <LinkedIn />
            <Instagram />
          </div>
        </div>
        <div>
          <p className="text-3xl mb-10">Category</p>
          <p className="mb-3">Creative Writing</p>
          <p className="mb-3">Film & Video</p>
          <p className="mb-3">Graphic Design</p>
          <p className="mb-3">UI/UX Design</p>
          <p className="mb-3">Business Analytics</p>
          <p>Marketing</p>
        </div>
        <div>
          <p className="text-3xl mb-10">Quick Links</p>
          <p className="mb-3">Privacy Policy</p>
          <p className="mb-3">Discussion</p>
          <p className="mb-3">Terms & Conditions</p>
          <p className="mb-3">Customer Support</p>
          <p className="mb-3">Course FAQ’s</p>
        </div>{" "}
        <div>
          <p className="text-3xl mb-10">Subscribe</p>
          <p className="mb-3">
            Lorem Ipsum has been them an industry printer took a galley make
            book.
          </p>
          <input
            className="p-3 rounded-lg font-bold text-black text-SM border-hidden mb-3 "
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
      </aside>
      <div></div>
    </section>
  );
};

export default Footer;

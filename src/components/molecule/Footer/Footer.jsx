import React from "react";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-around h-[60px] shadow-2xl items-center px-8">
        <div>
          <a href="/" className=" text-[25px] font-bold">
            LOGO
          </a>
        </div>
        <div className="flex justify-between gap-10  ">
          <ul className="text-[17px] font-bold flex flex-row gap-8">
            <a
              href="/"
              className="hover:underline hover:text-black hover:text-bold"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:underline hover:text-black hover:text-bold"
            >
              About us
            </a>
            <a
              href="/our program"
              className="hover:underline hover:text-black hover:text-bold"
            >
              Our Program
            </a>
            <a
              href="/contact"
              className="hover:underline hover:text-black hover:text-bold"
            >
              contact us
            </a>
          </ul>
          <div className="flex flex-row gap-4">
            <button
              className="hover:bg-black hover:text-white"
              onClick={handleclick}
            >
              Login
            </button>
            <button className="hover:bg-black hover:text-white">
              Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Hero from "../../images/download.jpeg";
import { Link } from "react-router-dom";

const homepage = () => {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <div className="flex flex-row items-center justify-around pt-[100px]">
        <div className="flex flex-col gap-5 pt-10">
          <h1 className="font-extrabold text-[70px] text-gray-600 leading-[1]">
            DELICACY <br /> LOVER
          </h1>
          <p className="text-[20px] text-gray-800">
            Welcome to your Food buying App, <br />
            Get the best taste in your mouth for <br />
            for less in just some clicks.
          </p>
          <h2 className="text-[17px]">You are at the right place</h2>
          <button
            type="button"
            className="bg-orange-600 border-none font-bold text-[25px] text-white hover:text-black hover:bg-slate-300"
          >
            <Link to="/register" className="home__link">
              Get Started
            </Link>
          </button>
        </div>

        <div>
          <img src={Hero} alt="landing_page_image" className="w-[400px]" />
        </div>
      </div>
      <div className="bg-black w-full h-[50px] mt-[200px]"></div>
    </div>
  );
};

export default homepage;

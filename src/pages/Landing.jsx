import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";

export default function Landing() {
  return (
    <div
      className="h-screen w-screen bg-[../public/assets/images/images(3).jpeg]"
    >
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";

export default function Landing() {
  return (
    <div className="landing_page">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}

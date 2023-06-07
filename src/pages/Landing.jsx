import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";
// import { Provider } from "./context/context"


export default function Landing() {
  const [formData, setFormData] = React.useState({
    id: "",
    name: "",
    calories: "",
    category: "",
    image: "",
    price: "",
    description: ""
  });
  return (
    <div className="landing_page">
      {/* <Provider value={{ formData, setFormData }}> */}
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
      {/* </Provider> */}
    </div>
  );
}

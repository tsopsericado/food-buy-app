import { Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import FoodDetails from "./components/foodDetails /FoodDetails";
import Landing from "./pages/Landing";
import UserInfos from "./components/UserInfos";
import Payment from "./components/Payment";
// import Paypal from "./components/Paypal";
import AdminLogin from "./pages/AdminLogin";
import Admins from "./pages/Admins";
import Checkout from "./pages/Checkout";
import { Cartcontext } from "./context/Context";
import Cart from "./pages/cart/Cart";
import SigninSignup from "./components/organism/SignInSignup/SigninSignup";
import Navbar from "./components/Navbar";

const App = () => {
  const [formData, setFormData] = useState();

  return (
    <Cartcontext.Provider value={{ formData, setFormData }}>
      <div className="">
        <Navbar />

        {/* <Router> */}
        {/* <div>
          <ul className="bg-blue-100 flex-row-reverse px-10 py-4 flex space-x-3">
            <li className="py-4 px-4 text-xl italic bg-white rounded">
              <a href="/">Landing</a>
            </li>
            <li className="py-4 px-4 text-xl italic bg-white rounded">
              <a href="/payment">Payment</a>
            </li>
            <li className="py-4 px-4 text-xl italic bg-white rounded ">
              <a href="/adminlogin">Admin Login</a>
            </li>
          </ul>
        </div> */}
        <Routes>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/fooddetails/:id" element={<FoodDetails />} />
          <Route path="/userinfos" element={<UserInfos />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<SigninSignup />} />
          {/* <Route path="/paypal" element={<Paypal />} /> */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* </Router> */}
      </div>
    </Cartcontext.Provider>
  );
};
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import FoodDetails from "./pages/FoodDetails";
import Landing from "./pages/Landing";
import UserInfos from "./components/UserInfos";
import Payment from "./components/Payment";
// import Paypal from "./components/Paypal";
import AdminLogin from "./pages/AdminLogin";
import { MyContext } from "./context/Context";
import Admins from "./pages/Admins";

const App = () => {
  const [formData, setFormData] = useState();

  return (
    <MyContext.Provider value={{ formData, setFormData }}>
      <div>
        <Router>
          <div>
            <ul className="bg-blue-100 flex-row-reverse px-10 flex space-x-3">
              <li className="py-4 px-4 text-xl italic">
                <a href="/">Landing</a>
              </li>
              {/* <li className="py-4 px-4 text-xl italic">
                <a href="/fooddetails/id">FoodDetails</a>
              </li>
              <li className="py-4 px-4 text-xl italic">
                <a href="/userinfos">UserInfos</a>
              </li> */}
              
              <li className="py-4 px-4 text-xl italic">
                <a href="/payment">Payment</a>
              </li>
              <li className="py-4 px-4 text-xl italic">
                <a href="/adminlogin">Admin Login</a>
              </li>
            </ul>
          </div>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/fooddetails/:id" element={<FoodDetails />} />
            <Route path="/userinfos" element={<UserInfos />} />
            <Route path="/payment" element={<Payment />} />
            {/* <Route path="/paypal" element={<Paypal />} /> */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/admins" element={<Admins />} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
};
export default App;

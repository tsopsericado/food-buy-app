import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import FoodDetails from "./pages/FoodDetails";
import Landing from "./pages/Landing";
import UserInfos from "./components/UserInfos";
import Payment from "./components/Payment";
import Paypal from "./components/Paypal";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <ul className="bg-blue-100 flex-row-reverse px-10 flex space-x-3">
            <li className="py-4 px-4 text-xl italic">
              <a href="/">Landing</a>
            </li>
            <li className="py-4 px-4 text-xl italic">
              <a href="/fooddetails/id">FoodDetails</a>
            </li>
            <li className="py-4 px-4 text-xl italic">
              <a href="/userinfos">UserInfos</a>
            </li>
            <li className="py-4 px-4 text-xl italic">
              <a href="/payment">Payment</a>
            </li>
          </ul>
        </div>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/fooddetails/:id" element={<FoodDetails />} />
          <Route path="/userinfos" element={<UserInfos />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paypal" element={<Paypal />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

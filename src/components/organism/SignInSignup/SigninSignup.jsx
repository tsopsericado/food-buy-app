import React, { useEffect, useRef, useState } from "react";
// import "./SignInSignUp.css";
import "./SignInSignUp.css";
import Landing from "../../../pages/Landing";

const SigninSignup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div>
      {showHome ? (
        <Landing />
      ) : show ? (
        <div className="containermain">
          <h1>Hello {localName}</h1>
          <div className="input_space">
            <input
              placeholder="Email"
              type="text"
              ref={email}
              className="inputfield"
            />
          </div>
          <div className="input_space">
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="inputfield"
            />
          </div>
          <button onClick={handleSignIn} className="actionbtn">
            Sign In
          </button>
        </div>
      ) : (
        <div className="container">
          <div className="input_space">
            <input
              placeholder="Name"
              type="text"
              ref={name}
              className="inputfield"
            />
          </div>
          <div className="input_space">
            <input
              placeholder="Email"
              type="text"
              ref={email}
              className="inputfield"
            />
          </div>
          <div className="input_space">
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="inputfield"
            />
          </div>
          <button onClick={handleClick} className="actionbtn">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default SigninSignup;

"use client";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignup = () => {
  const [openedAccountOption, setopenedAccountOption] = useState("login");
  return (
    <div className="w-full bg-white rounded-sm h-[90vh] overflow-y-auto text-black flex flex-col justify-center items-center">
      {openedAccountOption === "signup" && (
        <div className="w-full px-3 text-xs z-10 sm:px-12 flex items-center sticky top-0 right-0 left-0 rounded-sm justify-center py-4 bg-black sm:text-sm font-medium">
          <h1 className="text-white">
            Signup to Download Unlimited full resolution media
          </h1>
        </div>
      )}
      <div
        className={`w-4/5 sm:w-2/4 flex ${
          openedAccountOption === "signup" && "mt-[13.5rem]"
        } items-center justify-between py-4`}
      >
        <button
          onClick={() => setopenedAccountOption("signup")}
          className={`w-full ${
            openedAccountOption === "signup" &&
            "border-b-2 text-violet-700 border-b-violet-700"
          }`}
        >
          Signup
        </button>
        <button
          onClick={() => setopenedAccountOption("login")}
          className={`w-full  ${
            openedAccountOption === "login" &&
            "border-b-2 text-violet-700 border-b-violet-700"
          }`}
        >
          Login
        </button>
      </div>

      <div className="w-full">
        {openedAccountOption === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default LoginSignup;

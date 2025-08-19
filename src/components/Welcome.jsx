import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end flex-grow p-4 mt-5">
      <h4 className="text-2xl font-medium font-rubik">Welcome to PopX</h4>
      <p className="text-gray-500 text-md mt-2 font-rubik">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="mt-6 w-full py-3 rounded-md bg-[#6C25FF] text-white font-medium font-rubik"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="mt-3 w-full py-3 rounded-md bg-[#6C25FF4B] text-[#1D2226] font-medium font-rubik"
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;

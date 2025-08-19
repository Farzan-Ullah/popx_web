import React from "react";
import { useNavigate } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl  font-medium font-[Rubik]">
        Signin to your <br /> PopX account
      </h2>
      <p className="text-gray-500 mt-2 font-[Rubik]">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>

      <form className="flex flex-col mt-6">
        <InputWithLabel
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          required
        />
        <InputWithLabel
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />

        <button
          type="button"
          onClick={() => navigate("/account")}
          className="mt-4 w-full py-3 rounded-md bg-gray-400 text-white font-medium font-[Rubik]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

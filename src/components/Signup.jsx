import React from "react";
import { useNavigate } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-3xl mb-10 font-[Rubik] font-medium">
        Create your
        <br /> PopX account
      </h2>

      <form className="flex flex-col">
        <InputWithLabel
          label="Full Name"
          value="Marry Doe"
          name="fullname"
          required
        />
        <InputWithLabel
          label="Phone Number"
          name="phone"
          value="Marry Doe"
          type="text"
          required
        />
        <InputWithLabel
          label="Email Address"
          name="email"
          value="Marry Doe"
          type="email"
          required
        />
        <InputWithLabel
          label="Password"
          name="password"
          value="Marry Doe"
          required
        />
        <InputWithLabel
          label="Company Name"
          value="Marry Doe"
          name="company"
          type="text"
        />

        <label className="sfont-[Rubik] text-xs">
          Are you an Agency? <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6 mt-2">
          <label>
            <input
              type="radio"
              name="agency"
              className="w-5 h-5 accent-[#6C25FF]"
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              className="w-5 h-5 accent-[#6C25FF]"
            />{" "}
            No
          </label>
        </div>

        <button
          type="button"
          onClick={() => navigate("/account")}
          className="mt-40 w-full py-3 rounded-md bg-[#6C25FF] text-white font-[Rubik]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;

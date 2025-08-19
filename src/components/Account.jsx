import React from "react";
// import { FaCamera } from "react-icons/fa"; // ✅ camera icon
import Icon from "../assets/icon.png";
import profileImg from "../assets/profile.png";

const Account = () => {
  return (
    <div>
      {/* Top Heading Bar */}
      <div className="bg-white shadow-md px-6 py-5">
        <h2 className="text-lg font-[Rubik]">Account Settings</h2>
      </div>

      {/* Profile Section */}
      <div className="mt-5">
        <div className="border-dashed border-b-2 p-4 border-[#CBCBCB]">
          <div className="flex items-start gap-3">
            {/* Profile Image with Camera Icon */}
            <div className="relative w-16 h-16">
              <img
                src={profileImg}
                alt="profile"
                className="w-16 h-16 rounded-full"
              />
              {/* Camera Icon in Bottom-Right */}
              <div className="absolute bottom-0 right-0 bg-white rounded-full shadow-md cursor-pointer">
                <img src={Icon} alt="camera icon" className="w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col mx-2  font-[Rubik]">
              <h2 className="font-medium text-sm  text-[#1D2226]">Marry Doe</h2>
              <p className="text-[#1D2226] text-xs">Marry@gmail.com</p>
            </div>
          </div>

          <p className="mt-4 text-[#1D2226] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;

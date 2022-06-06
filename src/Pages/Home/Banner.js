import React from "react";

const Banner = () => {
  return (
    <div className="border-y-2">
      <div className="banner w-4/5 mx-auto lg:flex">
        <div className="flex-1 flex justify-center flex-col">
          <p className="text-3xl lg:text-left text-center">
            New tool in the shop
          </p>
          <h2 className="text-5xl lg:text-7xl text-yellow-500 text-center lg:text-left">
            Get Your Tools
          </h2>
          <button></button>
        </div>
        <div className="flex-1">
          <img src="https://i.ibb.co/7RwMbsR/background-hd.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

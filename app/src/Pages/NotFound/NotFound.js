import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(
            "https://i.ibb.co/GcpPTjL/pexels-pixabay-162553.jpg?w=1000&h=800"
          )`,
          backgroundColor: "black",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl lg:text-8xl font-bold text-white">
              404 Not Found
            </h1>
            <p className="mb-5">
              <img
                className="w-52 border-0 rounded mx-auto"
                src="https://i.ibb.co/mSvWhQZ/warning.gif"
                alt=""
              />
            </p>
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

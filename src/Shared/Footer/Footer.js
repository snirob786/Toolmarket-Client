import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="w-4/5 mx-auto bg-slate-800 text-white py-5 px-4"></div>
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="text-4xl" />
        </Link>

        <p className="font-bold">
          Tool Market Ltd.
          <br />
          Providing reliable tools since 2018
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

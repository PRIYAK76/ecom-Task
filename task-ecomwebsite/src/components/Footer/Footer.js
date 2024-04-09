import React from "react";
import "./Footer.css";
import { LuInstagram } from "react-icons/lu";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn , FaRegCopyright} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section mt-3 text-white">
      <div className="container py-4 mb-3">
      </div>
      <hr className="border-footer" />
      <div className="container copy-right-text d-flex justify-content-between py-3">
        <div>
          <p className="copy-right-text mt-2">
           <FaRegCopyright/> Copyright 2024 Attire. All rights Reserved
          </p>
        </div>
        <div className="mt-2">
          <LuInstagram className="mx-2 footer-icons" size={22} />
          <BiLogoFacebook className="mx-2 footer-icons" size={22} />
          <FaLinkedinIn className="mx-2 footer-icons" size={22} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

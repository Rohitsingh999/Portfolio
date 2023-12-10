import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.instagram.com/rohitsingh_1111"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/rohit-singh-rawat-5b4053217"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="h-[402px] bg-black">
      {/* FOOTER TOP */}
      <div className="bg-[#F0D250] h-[88px] flex items-center justify-around">
        <h2 className="font-bebas text-[36px]">Siga nossas redes sociais</h2>
        <div className="flex gap-5">
          <FontAwesomeIcon icon={faFacebook} size="3x"/>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <FontAwesomeIcon icon={faInstagram} size="3x"/>
          <FontAwesomeIcon icon={faYoutube}  size="3x"/>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="">

      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="border-5 h-[402px]">
      {/* FOOTER TOP */}
      <div className="bg-[#F0D250] h-[88px]">
        <h2 className="font-bebas text-[36px]">Siga nossas redes sociais</h2>
        <div>
          <FontAwesomeIcon icon={faFacebook} size="3x"/>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <FontAwesomeIcon icon={faInstagram} size="3x"/>
          <FontAwesomeIcon icon={faYoutube}  size="3x"/>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
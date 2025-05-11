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
          <FontAwesomeIcon icon={faFacebook} size="3x" className=" hover:text-white transition-colors "/>
          <FontAwesomeIcon icon={faLinkedin} size="3x" className=" hover:text-white transition-colors "/>
          <FontAwesomeIcon icon={faInstagram} size="3x"className=" hover:text-white transition-colors "/>
          <FontAwesomeIcon icon={faYoutube}  size="3x"className=" hover:text-white transition-colors "/>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="h-[312px] justify-around gap-10 flex flex-col items-center">

        <div className="flex items-center justify-around gap-100 p-10">
          <h2 className="text-white font-bebas text-[36px]">CYCLOVOLT</h2>
          <div>
            <p className="text-white font-montserrat text-[20px]">Termos de Serviço</p>
            <p className="text-white font-montserrat text-[20px]">Cookies</p>
            <p className="text-white font-montserrat text-[20px]">Políticas de Privacidade</p>
          </div>
        </div>
          <p className="text-white font-montserrat text-[20px]">© 2025 CycloVolt. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
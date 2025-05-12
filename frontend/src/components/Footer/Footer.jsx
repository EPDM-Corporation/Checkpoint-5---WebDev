import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* FOOTER TOP */}
      <div className="bg-[#F0D250] h-[70px] md:h-[88px] flex flex-col md:flex-row items-center justify-center md:justify-around gap-2 md:gap-0 p-2">
        <h2 className="font-bebas text-2xl md:text-3xl lg:text-[36px]">Siga nossas redes sociais</h2>
        <div className="flex gap-3 md:gap-5">
          <FontAwesomeIcon icon={faFacebook} size="lg" md="xl" lg="2x" className="hover:text-white transition-colors"/>
          <FontAwesomeIcon icon={faLinkedin} size="lg" md="xl" lg="2x" className="hover:text-white transition-colors"/>
          <FontAwesomeIcon icon={faInstagram} size="lg" md="xl" lg="2x" className="hover:text-white transition-colors"/>
          <FontAwesomeIcon icon={faYoutube} size="lg" md="xl" lg="2x" className="hover:text-white transition-colors"/>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="py-8 md:py-10 lg:h-[312px] flex flex-col items-center justify-center md:justify-around gap-6 md:gap-10">

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-20 p-4 md:p-10 text-center md:text-left">
          <h2 className="text-white font-bebas text-3xl md:text-4xl lg:text-[36px]">CYCLOVOLT</h2>
          <div className="flex flex-col gap-2">
            <p className="text-white font-montserrat text-base md:text-lg lg:text-[20px]">Termos de Serviço</p>
            <p className="text-white font-montserrat text-base md:text-lg lg:text-[20px]">Cookies</p>
            <p className="text-white font-montserrat text-base md:text-lg lg:text-[20px]">Políticas de Privacidade</p>
          </div>
        </div>
        <p className="text-white font-montserrat text-base md:text-lg lg:text-[20px] text-center px-4">
          © 2025 CycloVolt. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
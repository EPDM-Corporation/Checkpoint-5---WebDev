import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-section">
        <p>SIGA NOSSAS REDE SOCIAIS</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <h3>CYCLOVOLT</h3>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="#">Termos de serviço</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Políticas de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CycloVolt. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
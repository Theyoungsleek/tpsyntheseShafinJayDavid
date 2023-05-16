import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo"><img
                            className="image-cegep"
                            src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png"
                            alt="Logo Cegep"
                            
                        /></div>
      <div className="footer__social">
        <a href="https://www.facebook.com/cmontmo" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f">
          
          </i>
          
        </a>
        <a href="https://www.instagram.com/collegemontmorency/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"><img
                            className="image-cegep"
                            src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                            alt="Logo Cegep"
                            
                        /></i>
        </a>
        <a href="https://twitter.com/CMontmo" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

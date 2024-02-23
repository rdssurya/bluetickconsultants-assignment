import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="logo">
          <img src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png" alt='logo'/>
        </div>
        <div className='children'>
          <div>Blogs</div>
          <div>contact@bluetickconsultants.com</div>
        </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import '../Styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand"><img src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png" alt='logo'/></div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          Menu
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li className="navbar-item" onClick={()=> navigate("/")}>Home</li>
            <li className="navbar-item" onClick={()=> navigate("/offer")}>What We Offer</li>
            <li className="navbar-item" onClick={()=> navigate("/blogs")}>Blogs</li>
            <li className="navbar-item" onClick={()=> navigate("/contact")}>Let's Connect</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;


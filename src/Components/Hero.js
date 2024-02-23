import React from 'react';
import "../Styles/Hero.css";
import Header from './Header';
import Footer from './Footer';

const Hero = () => {
  return (
    <>
    <Header />
    <div className='hero-content'>
      <span>
        Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
        significant impact in the Indian and US startup ecosystems.
        Transforming Enterprises
        with cutting-edge, scalable, privacy-focused Generative AI Solutions    
      </span>
      <div className='hero-button' onClick={() => window.open("https://www.bluetickconsultants.com/generative-ai.html")}>
        <span>To Know More About us -{`>`}</span>
      </div>
      <img src='https://generative-ai.bluetickconsultants.com/images/products/interviewgpt.webp' alt="gif"/>
    </div>
    <Footer />
    </>
  );
};

export default Hero;
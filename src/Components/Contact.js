import React from 'react';
import "../Styles/Contact.css";
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <Header />
    <form className='form-div'>
        <div className='form-element'>
            <label className='form-label'>First Name</label>
            <input type="text" required/>
        </div>
        <div className='form-element'>
            <label className='form-label'>Email</label>
            <input type="email" required/>
        </div>
        <div className='form-element'>
            <label className='form-label'>Contact Number</label>
            <input type="tel" pattern="[0-9()+-]*" required/>
        </div>
        <div className='form-element'>
            <label className='form-label'>Subject</label>
            <input type="text" required/>
        </div>
        <div className='form-element'>
            <label className='form-label'>Message</label>
            <textarea type="text" required rows={6} cols={50}></textarea>
        </div>
        <button>
            Submit Form
        </button>
    </form>
    <Footer />
    </>
  );
};

export default Contact;
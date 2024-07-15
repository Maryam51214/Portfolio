import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa';

// import { FiSend } from "react-icons/fi";

import "./contact.css"


const Contact = () => {
  return (
    <section className='content section'>
      <h2 className='section__title'>
        Get In<span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Dont't Be Hesitate !</h3>

          <p className='contact__description'> Feel free to get in touch with me. i am always open to discussing
            new projects,creative ideas or opportunities to be part of your
            vision.</p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>maryam@gmail.com</h4>
              </div>
            </div>
            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>0000000000</h4>
              </div>

            </div>
          </div>

          <div className='contact__socials'>
            <a href='http://facebook.com' className='contact__social-link'>
            <FaFacebookF />
            </a>

            <a href='http://twitter.com' className='contact__social-link'>
            <FaTwitter />
            </a>

            <a href='http://youtube.com' className='contact__social-link'>
            <FaYoutube />
            </a>

            <a href='http://google.com' className='contact__social-link'>
            <FaGoogle />
            </a>

          </div>

        </div>
       <form className='contact__form'>
        <div className='form__input-group'>
           <div className='form__input-div'>
              <input 
              type="text" 
               placeholder='Your Name'
               className='form__conttrol' 
               />
            </div>
            <div className='form__input-div'>
              <input 
              type="email" 
               placeholder='Your Email'
               className='form__conttrol' 
               />
            </div>

            <div className='form__input-div'>
              <input 
              type="text" 
               placeholder='Your Subject'
               className='form__conttrol' 
               />
            </div>

            
          </div>
          <div className='form__input-div'>
              <textarea 
              placeholder='Your Message'
              className='form__control textarea'></textarea>
            </div>
            <button className='button'> Send Message </button>
            <span className='button__icon contact__button-icon'>
            {/* <FiSend /> */}

            </span>
          
        </form>
        </div>
    </section>
  );
};

export default Contact;

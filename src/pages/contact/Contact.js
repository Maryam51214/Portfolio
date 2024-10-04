

import React from 'react';
import { FaGithub, FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from 'react-icons/fa';

import "./contact.css"

const Contact = () => {
  return (
    <section className='content section'>
      <h2 className='section__title'>
        Get In<span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't Be Hesitate!</h3>

          <p className='contact__description'>Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your vision.</p>

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
            <a href='http://facebook.com' className='contact__social-link' target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href='http://twitter.com' className='contact__social-link' target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

            <a href='http://youtube.com' className='contact__social-link' target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>

            <a href='http://google.com' className='contact__social-link' target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>

            {/* Updated GitHub link */}
            <a href='https://github.com/Maryam51214' className='contact__social-link' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input 
                type="text" 
                placeholder='Your Name' 
                className='form__control' 
              />
            </div>
            <div className='form__input-div'>
              <input 
                type="email" 
                placeholder='Your Email' 
                className='form__control' 
              />
            </div>
            <div className='form__input-div'>
              <input 
                type="text" 
                placeholder='Your Subject' 
                className='form__control' 
              />
            </div>
          </div>
          <div className='form__input-div'>
            <textarea 
              placeholder='Your Message'
              className='form__control textarea'
            ></textarea>
          </div>
          <button className='button'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react'
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      

       <img src={Profile} alt="animated border" className='home__img'/>
       
       
      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Maryam.</span><br></br>
            Web Designer
            </h1>

            <p className='home__description'> I'm a web designer & front-end ,back-end developer ,
             <br></br> having full command on css,<br></br>
               focused on crafting clean & user-friendly experinences,<br></br>
              I am passionate about building excellent software to serve others. 
              </p>

              <Link to='/about' className='button'>
              More About Me <span className='button__icon'>
                <FaArrowRight />
                </span></Link>

          </div>
          </div>
          

          <div className='color__block'></div>
          </section>
          
  );
};

export default Home;

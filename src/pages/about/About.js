import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/Maryam_Cv.pdf';
import Skills from'../../components/Skills';
import { resume } from '../../data';
import Resumeitem from '../../components/Resumeitem';
import './about.css';


const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>
          About <span>Me</span>
        </h2>
        <div className='about__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitle'>Personal Infos</h3>
            <ul className='info__list grid'>
              <Info />
            </ul>

            <a href={CV} download='' className='button'>
              Download Cv
              <span className='button__icon'>
                <FaDownload />
              </span>
            </a>
          </div>
          <div className='stats grid'>
            <Stats />
            </div>

        </div>

      </section>
      
      <div className='seperator'></div>

      <section className='skills'>
        
        <h3 className='section__subtitle' subtitle__center>My <span>Skills</span></h3>
       
       <Skills />
      </section>
      <div className='seperator'></div>
      <section className='resume'>
        <div><h3 className='section__subtitle'>
          Experiences & Educataion
        </h3></div>

        <div className='resume__data'>
          {resume.map((val) => {
            if (val.category === 'experience') {
              return <Resumeitem key={val.id} {...val} />;
              
            }
          })}

        </div>

        <div className='resume__data'>
          {resume.map((val) => {
            if (val.category === 'education') {
              return <Resumeitem key={val.id} {...val} />;
              
            }
          })}

        </div>
        
      </section>

    </main>

  );
};

export default About;

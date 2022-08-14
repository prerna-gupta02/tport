import React, { useState } from 'react'
import Header from '../nav/Header'
import './Home.css'
import { BsChevronDown } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import myPic from '../../assets/Tannu.png';
import { Link } from 'react-router-dom';

export default function Home() {
  const [hoveredEye, setHoveredEye] = useState('^');
  const handleMouseEnter = () => {
    setHoveredEye('~');
  }
  const handleMouseLeave = () => {
    setHoveredEye('^');
  }
  return (
    <div className='home'>
        <div className='landing-section'>
            <Header />
            <div className='landing-text'>
                <h1><span>Hello! I'm</span> Tannu Sharma</h1>
                <h3>I'm a <a href='https://in.coursera.org/account/accomplishments/verify/7DJHJQTKPXZR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_blank'>Google-certified UX designer</a></h3>
                <h3>Designing user interfaces over 2 years</h3>
            </div>
            <div className='know-link'>
                <a href="#about">Know more <BsChevronDown /></a>
            </div>
        </div>
        <div className='about-section' id='about'>
          <div className='mypic'>
            <img src={myPic} />
          </div>
          <div className='about-content'>
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About me ^_<span>{hoveredEye}</span></h1>
            <div className='about-content-text'>
            <p>2 years back, I was lucky enough to pirate a copy of the latest version of Adobe XD and my life has never been the same since. My love for designing came from the projects that I did in my school from designing invitation cards to participating in design contests. From that point on I felt that design would be the one thing that would help me stand out in the crowd, it was as if I had found my true calling.</p><p> Being a graduate in Computer Science, taking up college projects helped me grab my first opportunity as UI/UX design team lead in Google Developer Students Club (DCE) and contributed to the fact that it made me a Jack of all trades in the design realm. That meant that I was quickly able to grab and adapt concepts in UI/UX, Logo Design, and Prototyping.</p><p> Fast forward to today, I'm a freelance UI/UX designer, I offer a proven ability to conduct creative analysis and design best-fit solutions. As a detail-oriented individual with a passion for excellence, I'm adept at listening to clients' needs, then analyzing and implementing the best-designed solution. And for the future, I'm looking for more designing interfaces opportunity and to work on amazing projects.</p>
            </div>
          </div>
        </div>
        <div className='contact-section' id='contact'>
          <h1>Connect with me</h1>
          <p>I would be happy to further discuss my experiences</p><p> with you, simply shoot me an email or message</p><p> me on Linkedin! : {')'}</p>
          <div className='form d-flex flex-column'>
            <textarea placeholder='type something...'></textarea>
            <button onSubmit={""} className="btn" >Send</button>
          </div>
          <div className='icons d-flex justify-content-center'>
            <a href='mailto:tannu.sharma470@gmail.com'><SiGmail /></a>
            <a href='https://www.linkedin.com/in/tannu-sharma-38ab521a9/' target='/blank'><FaLinkedinIn /></a>
            <a href='https://github.com/tan404' target='/blank'><FaGithub /></a>
            <a href='https://www.behance.net/tannusharma' target='/blank'><FaBehance /></a>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import Header from '../nav/Header'
//import './Resume.css'
import devTownLogo from '../../assets/devtownlogo.png'
import gdscLogo from '../../assets/gdsc.png'
import impaacLogo from '../../assets/impaac.png'
import mdulogo from '../../assets/mdulogo.png'
import SidhharthaPublicschoolLogo from '../../assets/SidhharthaPublicschool.png'
import PDMLogo from '../../assets/PDM.png'
import { Button } from 'reactstrap'
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <div>
        <Header />
        <div className='resume'>
          <div className='com-r about'>
            <h1>About me</h1>
            <p>Hi, I'm Tannu. I'm a versatile User Experience Designer based in Gurugram, India. As a freelance UI/UX designer, I have a proven ability to conduct creative analysis and design best-fit solutions. As a detail-oriented individual with a passion for excellence, I'm adept at listening to clients' needs, then analyzing and implementing the best-designed solution.</p>
          </div>
          <div className='com-r experience'>
            <h1>Experience</h1>
            <div className='d-flex exp-div'>
              <img src={devTownLogo}/>
              <div>
                <h3>Data Analyst</h3>
                <p>Devtown | Jun 2021 - Aug 2021 • 3 mos</p>
                <p>Analysis of data using various machine learning algorithms and statistical, and mathematical knowledge to develop some projects.</p>
              </div>
            </div>
            <div className='d-flex exp-div'>
              <img src={gdscLogo}/>
              <div>
                <h3>UI/UX Design Team Lead</h3>
                <p>Google Developer Students Club | Aug 2021 - Jun 2022 • 1 year</p>
                <p>Worked on designing content, animations, and marketing for social media. Also organized various events including hackathons (online & offline).</p>
              </div>
            </div>
            <div className='d-flex exp-div'>
              <img src={impaacLogo}/>
              <div>
                <h3>Content Designer</h3>
                <p>Impaac Foundation | Mar 2022 - Apr 2022 • 1 mos</p>
                <p>Worked on designing digital content for social media platforms and made design changes.</p>
              </div>
            </div>
          </div>
          <div className='com-r education'>
            <h1>Education</h1>
            <div className='d-flex edu-div'>
              <img src={mdulogo}/>
              <div>
                <h3>Dronacharya College of Engineering</h3>
                <p>B.Tech | Aug 2019 - Aug 2023</p>
                <p>Branch: Computer Science & Engineering</p>
              </div>
            </div>
            <div className='d-flex edu-div'>
              <img src={SidhharthaPublicschoolLogo}/>
              <div>
                <h3>Sidhhartha Public School</h3>
                <p>PCM (Non-Medical) | 2017 - 2019</p>
                <p>Pursued secondary education (11th - 12th Grade)</p>
              </div>
            </div>
            <div className='d-flex edu-div'>
              <img src={PDMLogo}/>
              <div>
                <h3>PDM Public School</h3>
                <p>PCM (Non-Medical) | 2005 - 2017</p>
                <p>Pursued primary education (till 10th grade)</p>
              </div>
            </div>
          </div>
          <div className='com-r skills'>
            <h1>Skill Summary</h1>
            <div className='skills-div d-flex justify-content-between'>
              <div className='tech-skills'>
                <h3>Technologies</h3>
                <p>UI/UX Design</p>
                <p>Prototyping</p>
                <p>Adobe XD</p>
                <p>Figma</p>
                <p>Illustrator</p>
                <p>Photoshop</p>
                <p>HTML & CSS</p>
              </div>
              <div className='soft-skills'>
                <h3>Soft Skills</h3>
                <p>Event Management</p>
                <p>Focused</p>
                <p>Self-Driven</p>
                <p>Leadership</p>
                <p>Communication</p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bttn'>
            <a href={require("../../assets/Tannu's Resume.pdf")} download="Tannu_Portfolio" className='down-btn'>Download</a>
            <div className='icons d-flex align-items-center'>
              <a href='mailto:tannu.sharma470@gmail.com'><SiGmail /></a>
              <a href='https://www.linkedin.com/in/tannu-sharma-38ab521a9' target='/blank'><FaLinkedinIn /></a>
              <a href='https://github.com/tan404' target='/blank'><FaGithub /></a>
              <a href='https://www.behance.net/tannusharma' target='/blank'><FaBehance /></a>
            </div>
          </div>
    </div>
  )
}

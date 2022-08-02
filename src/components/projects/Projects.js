import React from 'react'
import Header from '../nav/Header'
import './Projects.css'
import sahay from '../../assets/Sahay.png'
import pitchm from '../../assets/Pitchmusic.png'
import highrfive from '../../assets/Highrfive.png'
import dylansCoffee from '../../assets/DylansCoffee.png'
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
        <Header />
        <div className='projects'>
            <div className='project-section d-flex justify-content-between'>
                <div>
                    <Link to='/projects/sahayproject'><img src={sahay} /></Link>
                    <p>SAHAY - A helping hand app</p>
                </div>
                <div>
                    <a href=''><img src={highrfive} /></a>
                    <p>High Five - A hackathon</p><p>organizing website</p>
                </div>
            </div>
            <div className='project-section d-flex justify-content-between'>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <a href=''><img src={dylansCoffee} /></a>
                    <p>Dylan's Coffee Logo</p>
                </div>
                <div>
                    <a href=''><img src={pitchm} /></a>
                    <p>Pitch Music Logo</p>
                </div>
            </div>
            <div className='icons d-flex align-items-center'>
                <a href='' target='/blank'><SiGmail /></a>
                <a href='' target='/blank'><FaLinkedinIn /></a>
                <a href='' target='/blank'><FaGithub /></a>
                <a href='' target='/blank'><FaBehance /></a>
          </div>
        </div>
    </>
  )
}

import React from 'react'
import Header from '../nav/Header'
import './Sahayproject.css'
import sahayimage from '../../assets/Sahayimage.png';
import group144 from '../../assets/sahayicons/Group144.png'
import group145 from '../../assets/sahayicons/Group145.png'
import group147 from '../../assets/sahayicons/Group147.png'
import group148 from '../../assets/sahayicons/Group148.png'
import group150 from '../../assets/sahayicons/Group150.png'
import group160 from '../../assets/sahayicons/Group160.png'
import group217 from '../../assets/sahayicons/Group217.png'
import group237 from '../../assets/sahayicons/Group237.png'
import group238 from '../../assets/sahayicons/Group238.png'
import group245 from '../../assets/sahayicons/Group245.png'
import feathericon from '../../assets/sahayicons/feather-camera.png'
import ionickey from '../../assets/sahayicons/ionic-md-key.png'
import openpencil from '../../assets/sahayicons/open-pencil.png'
import userflow from '../../assets/Userflowsahay.png'
import donorDashboard from '../../assets/Donordashboard.png'
import ngoDashboard from '../../assets/NGOdashboard.png'
import messagepng from '../../assets/Messages.png'
import profilepng from '../../assets/Profile.png'
import listingitems from '../../assets/Listingitems.png'
import iteminfo from '../../assets/Iteminfo.png'
import chat from '../../assets/Chat.png'
import livepost from '../../assets/Livepost.png'
import registration from '../../assets/Registration.png'
import locationpng from '../../assets/Location.png'
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Sahayproject() {
  return (
    <div>
        <Header />
        <div className='sahay-project'>
            <h1 className='main-h'>Sahay Application</h1>
            <p className='main-p'>Sahay is a Hindi word that means helping others. With a vision to build a platform for donating items like clothes, stationery, food, etc, we came up with Sahay, an easy-to-use android application for connecting NGOs and Donors.</p>
            <img src={sahayimage} className='sahayimage' />
            <div className='topography-icons d-flex justify-content-between'>
                <div className='topography'>
                    <h1 className='topo-heading'>Topography</h1>
                    <h2 className='topo-display'>Google Sans Display</h2>
                    <p className='topo-para'>Google sans display is one of the most interesting sans font. It goes from regular all the way to bold. It is also easily readable for every users.</p>
                    <div className='topography-weight d-flex'>
                        <div className='topography-regular'>
                            <h1>Regular</h1>
                            <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii</p><p>1 2 3 4 5 6 7 8 9 0 ! # $ @</p>
                        </div>
                        <div className='topography-medium'>
                            <h1>Medium</h1>
                            <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii</p><p>1 2 3 4 5 6 7 8 9 0 ! # $ @</p>
                        </div>
                        <div className='topography-bold'>
                            <h1>Bold</h1>
                            <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii</p><p>1 2 3 4 5 6 7 8 9 0 ! # $ @</p>
                        </div>
                    </div>
                </div>
                <div className='iconset'>
                    <h1>Icon Set</h1>
                    <p>When we developing the icons, we followed to minimal design, and based on user experience to make them light and intuitive.</p>
                    <div className='icons'>
                        <img src={group144} />
                        <img src={group238} />
                        <img src={group150} />
                        <img src={group148} />
                        <img src={group147} />
                        <img src={feathericon} />
                        <img src={group160} />
                    </div>
                    <div className='icons'>
                        <img src={openpencil} />
                        <img src={group237} />
                        <img src={group217} />
                        <img src={ionickey} />
                        <img src={group245} />
                        <img src={group145} />
                    </div>
                </div>
            </div>
            <div className='userflow'>
                <h1>User Flow</h1>
                <div className='flow-div d-flex'>
                    <p>Working on User Flow, we outlined the main tasks of our application and made the most important functions easily accessible for user.</p>
                    <img src={userflow} />
                </div>
            </div>
            <div className='dashboard'>
                <h1>Dashboards</h1>
                <p>The creation of screens was based on already existing User Flow. It was important to correctly place all the objects on the screen, and select the most important ones.</p>
                <h3>Donor Dashboard</h3>
                <img src={donorDashboard} />
                <h3>NGO's Dashboard</h3>
                <img src={ngoDashboard} />
            </div>
            <div className='screens'>
                <h1>More Screens</h1>
                <div className='screen-grid'>
                    <div>
                        <h5>Messages</h5>
                        <img src={messagepng} />
                    </div>
                    <div>
                        <h5>Profile</h5>
                        <img src={profilepng} />
                    </div>
                    <div>
                        <h5>Listing Items</h5>
                        <img src={listingitems} />
                    </div>
                    <div>
                        <h5>Item info.</h5>
                        <img src={iteminfo} />
                    </div>
                    <div>
                        <h5>Chat</h5>
                        <img src={chat} />
                    </div>
                    <div>
                        <h5>Registration</h5>
                        <img src={registration} />
                    </div>
                    <div>
                        <h5>Location</h5>
                        <img src={locationpng} />
                    </div>
                    <div>
                        <h5>Live Post</h5>
                        <img src={livepost} />
                    </div>
                </div>
                <p>Check out other projects.</p>
                <div className='icons d-flex align-items-center'>
                    <a href='' target='/blank'><SiGmail /></a>
                    <a href='' target='/blank'><FaLinkedinIn /></a>
                    <a href='' target='/blank'><FaGithub /></a>
                    <a href='' target='/blank'><FaBehance /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

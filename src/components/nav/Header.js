import React, {useState} from 'react'
import '../nav/Nav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'
import { Link as Lik, animateScroll as scroll } from "react-scroll";
import { HashLink } from 'react-router-hash-link'
  

export default function Header(args) {
  const navigate = useNavigate();
  const contactHandle = (e) => {
    e.preventDefault();
    navigate('/#contact');
  }
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <Navbar {...args} expand="lg">
        <NavbarBrand className='lg-nav-brand'><Link to='/'>Tannu Sharma</Link></NavbarBrand>
        <NavbarBrand className='mb-nav-brand d-none' href="/">TS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/projects">Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/resume">Resume</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><HashLink to="/#contact">Contact</HashLink></NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  )
}

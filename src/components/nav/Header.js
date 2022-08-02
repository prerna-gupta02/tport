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
import {Link } from 'react-router-dom'
  

export default function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <Navbar {...args} expand="md">
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
              <NavLink><Link to="/">Contact</Link></NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  )
}

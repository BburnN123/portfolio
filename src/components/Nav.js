import React from 'react';
import { Nav, Navbar, NavbarBrand, Image, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../assets/images/logo.png'

function NavHeader(){
    //Using the hook to get the location path name
    const location =  useLocation()
    if(location.pathname === "/portfolio")
    {
        return null;
    }
    else
    {
        return(
            <Navbar style={{padding: "0px"}} bg="dark" expand="lg" >

                <NavbarBrand><Image src={Logo} width="80px"/></NavbarBrand>
                <NavbarToggle aria-controls="navbar-toggle" className="border-0"/>
                <NavbarCollapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link " to="/portfolio"><h3>Home</h3></Link>
                    <Link className="nav-link" to="/about"><h3>About</h3></Link>
                    <Link className="nav-link" to="/project"><h3>Project</h3></Link>
                </Nav>
                
                </NavbarCollapse>

            </Navbar>
        );        
    }
}

export default NavHeader;
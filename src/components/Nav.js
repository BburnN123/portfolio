import React from 'react';
import { Nav, Navbar, NavbarBrand, Image } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png'

function NavHeader(){
    return(
        <Navbar  bg="transparent" expand="lg">
        <NavbarBrand><Image src={Logo} width="80px"/></NavbarBrand>
        <NavbarToggle aria-controls="navbar-toggle" className="border-0"/>
        <NavbarCollapse id="navbar-toggle">
        <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/project">Project</Link>
        </Nav>
        </NavbarCollapse>
        </Navbar>
    );
}

export default NavHeader;
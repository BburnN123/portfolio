import React from 'react';
import { Nav, Navbar, NavbarBrand, Image, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

function NavHeader() {
    //Using the hook to get the location path name
    let location = useLocation();
    console.log(location);
    return (
        <Navbar expand="lg" >

            <NavbarBrand><Image src={Logo} width="80px" /></NavbarBrand>
            <NavbarToggle aria-controls="navbar-toggle" className="border-0" />
            <NavbarCollapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className={`nav-link ${location.pathname === "/portfolio" ? "nav-link-active" : ""}`} to="/portfolio" >Home</Link>
                    <Link className={`nav-link ${location.pathname === "/learning" ? "nav-link-active" : ""}`} to="/learning">Learning</Link>
                    <Link className={`nav-link ${location.pathname === "/project" ? "nav-link-active" : ""}`} to="/project">Project</Link>
                    <Link className={`nav-link ${location.pathname === "/design" ? "nav-link-active" : ""}`} to="/design">Design</Link>
                    <Link className={`nav-link ${location.pathname === "/contact" ? "nav-link-active" : ""}`} to="/contact">Contact</Link>
                </Nav>

            </NavbarCollapse>

        </Navbar>
    );

}

export default NavHeader;
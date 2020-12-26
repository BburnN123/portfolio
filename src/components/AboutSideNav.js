import React from 'react';
import { Nav, Navbar, NavbarBrand, Image, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../assets/images/logo.png'

function AboutSideNav(){
    return(
    <nav className="n-about-sidebar">
        <ul>
            <li>Career Objective</li>
            <li>Experience</li>
            <li>Test</li>
        </ul>
    </nav>
    
    );         
}

export default AboutSideNav;
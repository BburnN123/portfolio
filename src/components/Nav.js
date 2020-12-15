import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Link} from 'react-router-dom';

function NavHeader(){
    return(
        <Navbar className="border-bottom" bg="transparent" expand="lg">
        <NavbarBrand>Test</NavbarBrand>
        <NavbarToggle aria-controls="navbar-toggle" className="border-0"/>
        <NavbarCollapse id="navbar-toggle">
        <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/project">Project</Link>
            <Link className="nav-link" to="/lab">Lab</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </Nav>
        </NavbarCollapse>
        </Navbar>
    );
}

export default NavHeader;
import React from "react";
import {
    Nav, Navbar, NavbarBrand, Image, NavDropdown
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {
    useLocation
} from "react-router-dom";
import Logo from "../assets/images/logo.png";

function NavHeader() {

    //Using the hook to get the location path name
    let location = useLocation();
    return (
        <Navbar expand="lg" >

            <NavbarBrand><Image src={Logo} width="80px" /></NavbarBrand>
            <NavbarToggle aria-controls="navbar-toggle" className="border-0" />
            <NavbarCollapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Nav.Link className={`nav-link ${location.pathname === "/portfolio" ? "nav-link-active" : ""}`} href="/portfolio" >Home</Nav.Link>
                    <Nav.Link className={`nav-link ${location.pathname === "/learning" ? "nav-link-active" : ""}`} href="portfolio/learning">Learning</Nav.Link>
                    <Nav.Link className={`nav-link ${location.pathname === "/project" ? "nav-link-active" : ""}`} href="/project">Project</Nav.Link>
                    <Nav.Link className={`nav-link ${location.pathname === "/design" ? "nav-link-active" : ""}`} href="/design">Design</Nav.Link>
                    <Nav.Link className={`nav-link ${location.pathname === "/contact" ? "nav-link-active" : ""}`} href="/contact">Contact</Nav.Link>
                </Nav>

            </NavbarCollapse>

        </Navbar>
    );

}

export default NavHeader;
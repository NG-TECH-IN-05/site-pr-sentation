import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

function Header() {
  return (
<header>
    <div className="container py-3">
    <Navbar expand="lg" >
      <Navbar.Brand href="/" className="logo"> <span>New Generation</span> Innovator</Navbar.Brand>
      <NavbarToggle arial-controls="basic-navbar-nav"/>
      <NavbarCollapse id="basic-navbar-nav"> 
        <Nav className ="ms-auto">
            <NavLink className="nav-link"href="/"><i className="bi bi-house " style={{ fontSize: "1.5rem" }}></i>  Accueil</NavLink>
            <NavLink className="nav-link"href="/about">  <i className="bi bi-info-circle"style={{ fontSize: "1.5rem" }}></i> A propos</NavLink>
            <NavLink className="nav-link"href="/services"> <i className="bi bi-briefcase"style={{ fontSize: "1.5rem" }}></i> Services</NavLink>
            <NavLink className="nav-link"href="/contact"> <i className="bi bi-envelope"style={{ fontSize: "1.5rem" }}></i> Contact </NavLink>
            <NavLink className="nav-link"href="/contact">  <div className="btn"></div></NavLink>
         </Nav>
         </NavbarCollapse>
    
    </Navbar>
      
    </div>
</header>
  )
}

export default Header

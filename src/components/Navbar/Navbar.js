import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

// function to create navbar 

function MyNavbar() {
    return (
      <Navbar bg="light" expand="lg" className="my-navbar">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home Page</Nav.Link>
            <Nav.Link href="#">Recommendations</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavbar;

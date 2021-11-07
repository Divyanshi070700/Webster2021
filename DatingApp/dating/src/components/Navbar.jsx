import React from 'react'
    import { Container, Navbar, Nav} from 'react-bootstrap';
    import { Component } from 'react';

    class MyNavbar extends Component { 
render() {
    
    
        return (
          <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Finder</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          <Nav.Link href="/ContactUs">FAQ</Nav.Link>
          <Nav.Link href="/">About Us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        );
    
    }
}
export default MyNavbar;
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        );
    
    }
}
export default MyNavbar;
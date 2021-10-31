import React from 'react'
    import { Container, Navbar, Nav} from 'react-bootstrap';
    import { Component } from 'react';

    class MyNavDash extends Component { 
render() {
    
    
        return (
          <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Finder</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Logout</Nav.Link>
          <Nav.Link href="#pricing">Chat</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        );
    
    }
}
export default MyNavDash;
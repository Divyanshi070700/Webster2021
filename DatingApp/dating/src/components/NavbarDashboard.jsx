import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Component } from 'react';

class MyNavDash extends Component {
  render() {


    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Finder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
            <Nav.Link href="/Chat">Chat</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );

  }
}
export default MyNavDash;

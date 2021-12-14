import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navbar.css";
class MyNavbar extends Component {
  render() {
    const auth = localStorage.getItem("isLoggedIn");

    return (
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">Soulmates</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contactus">Contact Us</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
          </Nav>
          <Nav className="me-auto2">
            <Nav.Link href="/">Profile</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
            {/* <Link to="/Login">
              {
                console.log("Header localStorage.getItem isLoggedIn is :" + localStorage.getItem("isLoggedIn"))
              }
              {
                localStorage.getItem(auth) ? "Logout" : "Login"
                // localStorage.getItem("isLoggedIn") === true ? "Logout" : "Login"
              }
            </Link> */}
            {/* if (auth) { // if there is a value named as islogin...
        <Button>Logout</Button>
        } else { 
        <Button>Login</Button>
        } */}


          </Nav>
        </Container>
      </Navbar>
    );

  }
}
export default MyNavbar;
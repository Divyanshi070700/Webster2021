import React from 'react'
    import { Container, Navbar, Nav} from 'react-bootstrap';
    import { Component } from 'react';

    class MyNavbar extends Component { 
        
    state={isAuthenticated: localStorage.getItem('token'),
         isFetched: localStorage.getItem('detailsFetched')
  };

render() {
    
    
        return (
          <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Finder</Navbar.Brand>
        <Nav className="me-auto">
           {this.state.isAuthenticated!=null ?
             <>
            { this.state.isFetched==true ?
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            :
            <Nav.Link href="/fillDetails">Complete Profile</Nav.Link>
            }
            </>
          :
          <Nav.Link href="/dashboard"></Nav.Link>
           }

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
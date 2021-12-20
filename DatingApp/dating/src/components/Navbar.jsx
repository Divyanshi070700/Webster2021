import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconName } from "react-icons/fa";

//     class MyNavbar extends Component { 
        
   
// render() {
    
    
//         return (
//           <Navbar bg="dark" variant="dark">
//         <Container>
//         <Navbar.Brand href="/">Finder</Navbar.Brand>
//         <Nav className="me-auto">
//            {this.state.isAuthenticated!=null ?
//              <>
//             { this.state.isFetched==true ?
//             <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//             :
//             <Nav.Link href="/fillDetails">Complete Profile</Nav.Link>
//             }
//             </>
//           :
//           <Nav.Link href="/dashboard"></Nav.Link>
//            }

//           <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
//           <Nav.Link href="/ContactUs">FAQ</Nav.Link>
//           <Nav.Link href="/">About Us</Nav.Link>
//         </Nav>
import "../styles/Navbar.css";
class MyNavbar extends Component {

  state={isAuthenticated: localStorage.getItem('token'),
    isFetched: localStorage.getItem('DetailsFetched'),
    isSet: localStorage.getItem('PreferenceSet')
};
  render() {
    


    return (
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="/">Soulmates</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {this.state.isAuthenticated!=null ?
             <>
            { this.state.isFetched != null ?
            <>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            { this.state.isSet == null ?
              <Nav.Link href="/setPref">Set Preference</Nav.Link>
              :
              <></>

            }
            </>
            :
            <>
            <Nav.Link href="/fillDetails">Complete Profile</Nav.Link>
            { this.state.isSet == null ?
              <Nav.Link href="/setPref">Set Preference</Nav.Link>
              :
              <></>

            }
            </>
            }
            </>
            
            
            
            
          :
          <Nav.Link href=""></Nav.Link>
           }
            <Nav.Link href="/Contactus">Contact Us</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
          </Nav>
          <Nav className="me-auto2">
            
          { this.state.isFetched != null ?
            <Nav.Link href="">Profile</Nav.Link>
            :
            <Nav.Link href=""></Nav.Link>
            }
            
            


          </Nav>
        </Container>
      </Navbar>
    );

  }
}
export default MyNavbar;
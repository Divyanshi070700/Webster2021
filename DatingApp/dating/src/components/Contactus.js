import React from 'react'
import { Container } from 'react-bootstrap';
import { Component } from 'react';
import { Form, Row, Col, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import MyNavDash from "./NavbarDashboard";	
import MyNavDash from './Navbar';
import "../styles/Contactus.css";
class Contactus extends Component {
    render() {
        return (
            <>
            <MyNavDash/>
          
            
            <Form>
                <Row className="mb-3">
                    <Form.Group style={{ display: 'inline-block', width: 'calc(50% )', margin: '10px auto' , textAlign: 'center'}} controlId="formGridEmail">
                        <Form.Label style={{fontSize: 20}}>Your Email</Form.Label>
                        <Form.Control size='lg' type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group style={{ display: 'inline-block', width: 'calc(50% )', margin: '5px auto' , textAlign: 'center'}} controlId="formGridName">
                        <Form.Label style={{fontSize: 20}}>Your Full Name</Form.Label>
                        <Form.Control size='lg' type="FullName" placeholder="Full Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group style={{ display: 'inline-block', width: 'calc(50% )', margin: '5px auto' , textAlign: 'center'}} className="mb-3" controlId="formGridContactno">
                    <Form.Label style={{fontSize: 20}}>Your Contact No.</Form.Label>
                    <Form.Control size='lg' placeholder="Contact Number" />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group style={{ display: 'inline-block', width: 'calc(50% )', margin: '5px auto' ,textAlign: 'center'}} className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{fontSize: 20}}>Any Message for Us?</Form.Label>
                    <Form.Control as="textarea" rows={3} size='lg' placeholder="Type Here..." />
                </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
        );

    }
}
export default Contactus;
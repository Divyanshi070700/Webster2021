import React from 'react'
import { Container } from 'react-bootstrap';
import { Component } from 'react';
// import { Form, Row, Col, Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {Accordion,Button} from 'react-bootstrap';
// import MyNavDash from "./NavbarDashboard";
import MyNavDash from './Navbar';
import "../styles/faq.css";
class Faq extends Component {
    render() {
        return (
            <>
                <MyNavDash />

                <Accordion >
                    <Accordion.Item eventKey="0" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          
                        </Accordion.Body>
                    </Accordion.Item>
                {/* </Accordion>
                <Accordion> */}
                    <Accordion.Item eventKey="2" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           
                        </Accordion.Body>
                    </Accordion.Item>
                {/* </Accordion>
                <Accordion> */}
                    <Accordion.Item eventKey="4" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #6</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           
                        </Accordion.Body>
                    </Accordion.Item>
                {/* </Accordion>
                <Accordion> */}
                    <Accordion.Item eventKey="6" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #7</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                         
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #8</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #9</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9" className='faqchange'>
                        <Accordion.Header className='faqchange'>Accordion Item #10</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
               
                
            </>
        );

    }
}
export default Faq;
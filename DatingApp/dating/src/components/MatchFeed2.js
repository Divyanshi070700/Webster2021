import { List, Image } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Button } from 'antd';
import { FaBeer } from 'react-icons/fa';
import MyNavbar from './Navbar';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import "../styles/MatchFeed.css";
import Avatar from '@material-ui/core/Avatar';
import Invite from './InviteForm';

export function Matches({mat}) {

    return(
    <List.Item className='list'>
      <Row className='rowlist'>
        <Col style={{ padding:'10px'}}>
        <Avatar alt="" size="100px" src={mat.Pic} float="right"/>
        {/* <Image avatar src={mat.Pic} style={{position:"right", width:"100px", }}/> */}
        </Col>
        <Col>
        <List.Content>
        <List.Header  ><h5><b>{mat.Name}</b></h5></List.Header>
        <List.Description>
         {mat.Bio}
        </List.Description>
      </List.Content>
        </Col>
        <Col>
        <Link to="/videocall">
        <Button style={{ margin:'10px', backgroundColor:'black'}} type="primary" > Call</Button>
        </Link>
        <Link to="/newchat">
        <Button style={{ margin:'10px', backgroundColor:'black'}} type="primary" > Chat</Button>
        </Link>
        
            <Invite/>
        {/* <Button style={{ margin:'10px', backgroundColor:'black'}} type="primary" > Invite</Button> */}
        
        </Col>
      </Row> 
    </List.Item>
   // const numbers = props.numbers;
    );
    
  }
import { List, Image } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Button } from 'antd';
import { FaBeer } from 'react-icons/fa';
import MyNavbar from './Navbar';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import "../styles/MatchFeed.css";

class MatchFeed extends Component {
  render() {
      return (
        <>
        <MyNavbar/>
        <h2 style={{ marginTop:'20px'}}> Your Matches</h2>
          <div style={{alignContent:"center", alignItems:"center", textAlign:"center", width:'80%'}}>
            
            
        <List style={{margin:"15px"}}>
    
    <List.Item className='list'>
      <Row className='rowlist'>
        <Col style={{ padding:'10px'}}>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' style={{position:"left", width:"50px"}}/>
        </Col>
        <Col>
        <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
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
        <Link to="/newchat">
        <Button style={{ margin:'10px', backgroundColor:'black'}} type="primary" > Invite</Button>
        </Link>
        </Col>
      </Row> 
    </List.Item>
    
    <List.Item className='list'>
      <Row className='rowlist'>
        <Col style={{ padding:'10px'}}>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' style={{position:"left", width:"50px"}}/>
        </Col>
        <Col>
        <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
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
        <Link to="/newchat">
        <Button style={{ margin:'10px', backgroundColor:'black'}} type="primary" > Invite</Button>
        </Link>
        </Col>
      </Row> 
    </List.Item>
    <List.Item className='list'>
      <Row className='rowlist'>
        <Col style={{ padding:'10px'}}>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' style={{position:"left", width:"50px"}}/>
        </Col>
        <Col>
        <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
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
        <Link to="/invite">
        <Button style={{ margin:'10px', backgroundColor:'black'}} type="primary" > Invite</Button>
        </Link>
        </Col>
      </Row>
    </List.Item>
  </List>
        </div>
        </>
        );

    }
}
export default MatchFeed;


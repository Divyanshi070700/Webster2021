import React from "react";
// import MyNavDash from "./NavbarDashboard";
import MyNavbar from "./Navbar";
import { Menu, Button } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import background from './background.jpg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "../styles/Dashboard.css";
import chatt from '../images/chatt.png';
import swipes from '../images/swipes.png';
import matches from '../images/matches.jpg';
import calender from '../images/calender.png';
import activityfeed from '../images/activityfeed.jpg';
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    firstName: "User not logged in!!",
       lastName: "",
                    occupation: "",
                    bio: "",
                    age: "",
  };
  
  componentDidMount() {
            let data;
       axios.defaults.headers = {
         "Content-Type": "application/json",
         Authorization: "Token "+localStorage.getItem('token')
       }
       }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <div >
          <MyNavbar />
          
          <div className="cards">
            <Row className="cards2">
              <Col >
                <Card className="cards1">
                  <Card.Img variant="top" src={chatt} />
                  <Card.Body>
                    <Card.Title>Wanna Chat?</Card.Title>
                    <Card.Text className="cards-style">
                      Just making matches isn't enough...Try to make your connections strong..
                    </Card.Text >
                    {/* <Button variant="primary">Go Ahead💬</Button> */}
                    <Link to="/chat">
                      <Button className="btn1" style={{ borderRadius:'50px'}} type="primary" >
                        Go Ahead😊
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cards1">
                  <Card.Img variant="top" src={matches} />
                  <Card.Body>
                    <Card.Title>Matches</Card.Title>
                    <Card.Text className="cards-style">
                      Check out the list of matches you already have in your pocket...
                    </Card.Text>
                    <Link to="/matches">
                      <Button className="btn1" style={{ borderRadius:'50px', backgroundColor:''}} type="primary" >
                        Go Ahead😊
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cards1">
                  <Card.Img variant="top" src={swipes} />
                  <Card.Body>
                    <Card.Title>Start Swiping !!</Card.Title>
                    <Card.Text className="cards-style">
                      Looking or some new Connections? What are you waiting for?
                      Try your Luck...
                    </Card.Text>
                    <Link to="/swipe">
                      <Button className="btn1" style={{ borderRadius:'50px'}} type="primary" >
                        Start Here❤️
                      </Button>
                    </Link>
                    
                    {/* <Button variant="primary">Go Ahead❤️</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cards1">
                  <Card.Img variant="top" src={calender} />
                  <Card.Body>
                    <Card.Title>Calender</Card.Title>
                    <Card.Text className="cards-style">
                      Are you confused about your date plans?
                      How about checking your schedule?
                    </Card.Text>
                    {/* <Button variant="primary">Go Ahead🗓️ </Button> */}
                    <Link to="/calender">
                     <Button className="btn1" style={{ borderRadius:'50px'}} type="primary" >
                        Go Ahead🗓️
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cards1">
                  <Card.Img variant="top" src={activityfeed} />
                  <Card.Body>
                    <Card.Title>Updates</Card.Title>
                    <Card.Text className="cards-style">
                      Check all yours and your friend's posts and updates here..
                    </Card.Text>
                    <Link to="/activity">
                      <Button className="btn1" style={{ borderRadius:'50px'}} type="primary" >
                        Check here📰 

                      </Button>
                    </Link>
                    
                    {/* <Button variant="primary">Go Ahead❤️</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          {/* <div style={{ width: 256 ,float:'left'}}>
       </div>
        <div style={{align: "center", width : '200',float: 'right',marginRight:'350px',paddingTop:'200px'}}>
       <Link to="/swipe">
     <Button type="primary" style={{ color: "white", align: "center",height: '80px', width : '300px',fontSize: '40px',borderRadius:'50px'}}>
        <p>Start Swiping!!</p>
     </Button> */}
          {/* </Link> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}


export default Dashboard;


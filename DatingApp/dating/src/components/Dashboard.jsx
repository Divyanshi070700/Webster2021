import React from "react";
import MyNavDash from "./NavbarDashboard";	
import { Menu,Button } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './DashHome.css'
import { data } from "jquery";
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
       axios.get('http://127.0.0.1:8000/details/user/')
         .then(res => {
            localStorage.setItem('detailsOfUser',res.data);
            data=res.data
            this.setState({
                                  firstName: data[0].firstName,
                        lastName: data[0].lastName,
                        occupation: data[0].Occupation,
                        bio: data[0].Bio,
                        age: data[0].Age,
    
                             });
           console.log(res.data);
           localStorage.setItem('userId',res.data.pk);
           
         })
         
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
        <MyNavDash/>
        
        <div style={{ width: 356 ,float:'left'}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom:0, float: 'left' }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          //theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
        
        </div>
        {/* <div style={{align: "center", width : '200',float: 'right',marginRight:'350px',paddingTop:'200px'}}>
        <Button type="primary" style={{ color: "white", align: "center",height: '100px', width : '400px',fontSize: '50px'}} >
          Start Swiping!
        </Button>
        </div> */}
        <div style={{align: "center", width : '200',float: 'right',marginRight:'350px',paddingTop:'200px'}}>
       <Link to="/swipe">
     <Button type="primary" style={{ color: "white", align: "center",height: '80px', width : '300px',fontSize: '40px',borderRadius:'50px'}}>
        <p>Start Swiping!!</p>
     </Button>
     </Link>
     
      </div>
      <div className="container jumbotron ">
               

                            <hr
                                  style={{
                                       color: "#000000",
                                       backgroundColor: "#000000",
                                       height: 0.5,
                                       borderColor: "#000000",
                                  }}
                               />
                          <h2>Hello {this.state.firstName} {this.state.lastName}</h2>
                          <h3>{this.state.dob}</h3>
                              
                                    <div>
                                       <div className="card shadow-lg">
                                               <blockquote className="text-blockquote mb-0">
                                                   <h1> {this.state.firstName}  {this.state.lastName}</h1>
                                                   <footer className="blockquote-footer">
                                                       {" "}
                                                       <cite title="Source Title">{this.state.occupation}</cite>
                                                   </footer>
                                 <footer className="blockquote-footer">
                                                       {" "}
                                                       <cite title="Source Title">{this.state.bio}</cite>
                                                   </footer>
                                 <footer className="blockquote-footer">
                                                      {" "}
                                                       <cite title="Source Title">{this.state.age}</cite>
                                                   </footer>
                               </blockquote>
                                        
                                       </div>
                                       <span className="border border-primary "></span>
                                   </div> 
                               
                           </div>
      </div>
      </div>
    );
  }
}


export default Dashboard;


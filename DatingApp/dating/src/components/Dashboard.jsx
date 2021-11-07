import React from "react";
import MyNavDash from "./NavbarDashboard";	
import { Menu,Button } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import background from 'E:/Webster/Webster2021/DatingApp/dating/src/background.jpg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
const { SubMenu } = Menu;
class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

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
        
        <div style={{ width: 256 ,float:'left'}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom:0 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
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
      </div>
      </div>
    );
  }
}


export default Dashboard;


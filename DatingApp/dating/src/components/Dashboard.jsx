
//  import React from "react";
//  import axios from "axios";
//  import { Component } from "react";


// class Dashboard extends React.Component {
// 	state = {
// 		details: [],
// 		user: "",
// 		quote: "",
// 	};

// 	componentDidMount() {
// 		let data;

// 		axios
// 			.get("http://localhost:8000/wel/")
// 			.then((res) => {
// 				data = res.data;
// 				this.setState({
// 					details: data,
// 				});
// 			})
// 			.catch((err) => {});
// 	}

// 	renderSwitch = (param) => {
// 		switch (param + 1) {
// 			case 1:
// 				return "primary ";
// 			case 2:
// 				return "secondary";
// 			case 3:
// 				return "success";
// 			case 4:
// 				return "danger";
// 			case 5:
// 				return "warning";
// 			case 6:
// 				return "info";
// 			default:
// 				return "yellow";
// 		}
// 	};

// 	handleInput = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	handleSubmit = (e) => {
// 		e.preventDefault();

// 		axios
// 			.post("http://localhost:8000/wel/", {
// 				name: this.state.user,
// 				detail: this.state.quote,
// 			})
// 			.then((res) => {
// 				this.setState({
// 					user: "",
// 					quote: "",
// 				});
// 			})
// 			.catch((err) => {});
// 	};

// 	render() {
// 		return (
// 			<div className="container jumbotron ">
// 				<form onSubmit={this.handleSubmit}>
// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"
// 								id="basic-addon1">
// 								{" "}
// 								Author{" "}
// 							</span>
// 						</div>
// 						<input type="text" className="form-control"
// 							placeholder="Name of the Poet/Author"
// 							aria-label="Username"
// 							aria-describedby="basic-addon1"
// 							value={this.state.user} name="user"
// 							onChange={this.handleInput} />
// 					</div>

// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text">
// 							Your Quote
// 							</span>
// 						</div>
// 						<textarea className="form-control "
// 								aria-label="With textarea"
// 								placeholder="Tell us what you think of ....."
// 								value={this.state.quote} name="quote"
// 								onChange={this.handleInput}>
// 						</textarea>
// 					</div>

// 					<button type="submit" className="btn btn-primary mb-5">
// 						Submit
// 					</button>
// 				</form>

// 				<hr
// 					style={{
// 						color: "#000000",
// 						backgroundColor: "#000000",
// 						height: 0.5,
// 						borderColor: "#000000",
// 					}}
// 				/>

// 				{this.state.details.map((detail, id) => (
// 					<div key={id}>
// 						<div className="card shadow-lg">
// 							<div className={"bg-" + this.renderSwitch(id % 6) +
// 										" card-header"}>Quote {id + 1}</div>
// 							<div className="card-body">
// 								<blockquote className={"text-" + this.renderSwitch(id % 6) +
// 												" blockquote mb-0"}>
// 									<h1> {detail.detail} </h1>
// 									<footer className="blockquote-footer">
// 										{" "}
// 										<cite title="Source Title">{detail.name}</cite>
// 									</footer>
// 								</blockquote>
// 							</div>
// 						</div>
// 						<span className="border border-primary "></span>
// 					</div>
// 				))}
// 			</div>
// 		);
// 	}
// }
// export default Dashboard;
import React from "react";
//import { Breadcrumb, Button, ButtonGroup, Row, Col, InputGroup, Form, Dropdown } from "@themesberg/react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHome, faPlus, faCog, faCheck, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
    

		
		import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;
 import React from "react";
 import axios from "axios";


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
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
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
    );
  }
}





export default Dashboard;

// import { useState, useEffect, React, Component } from "react";
// import {
//     Form, Select, InputNumber, Switch, Radio,
//     Slider, Button, Upload, 
//   } from 'antd';
//   import * as Icon from '@ant-design/icons'
//   import { connect } from "react-redux";
  
  
  
//   class GetDetails extends React.Component {
// render(){
//     return(
//         <h1>heyy</h1>
//     );
// }

//   }
  
  

// const FindMe = () =>
// {
//     const [location, setLocation]=useState({
//         loaded: false,
//         coordinates: {lat: "", lng: ""}
//     });

//     const onSuccess= (location)=>
//     {
//         setLocation({
//            loaded :true,
//            coordinates:
//            {
//                lat: location.coords.latitude,
//                lng: location.coords.longitude,
//            },
    
//         });
//     };
//     const onError=(error)=>
//     {
//         setLocation({
//             loaded: true,
//             error,
//         });
//     };
//     useEffect(() => {
//         if(!("geolocation" in navigator))
//         {
//             onError({
//                 code:0,
//                 message:"Geolocation not supported",
//             });
//         }
//          navigator.geolocation.getCurrentPosition(onSuccess,onError);
//     },[]);
//     return location;
    
// }

// const Show =()=>
// {
    
//     const location=FindMe();
//     return(
//     <div>{
        
//         location.loaded ? JSON.stringify(location): "sorry"
    
//     }
//     </div>
//     ); 
   
// }
// export default GetDetails;
// export default FindMe;
// ****** */
// ****** */
// ****** */
// ****** */

// Extras are here 
// ****** */


// import React from "react";
// import axios from "axios";
// import { Component } from "react";


// class Dashboard extends React.Component {
//    state = {

//        firstName: "User not logged in!!",
//        lastName: "",
//                     occupation: "",
//                     bio: "",
//                     age: "",
//    };

//    componentDidMount() {
//        let data;
//    axios.defaults.headers = {
//      "Content-Type": "application/json",
//      Authorization: "Token "+localStorage.getItem('token')
//    }
//    axios.get('http://127.0.0.1:8000/details/user/')
//      .then(res => {
//         localStorage.setItem('detailsOfUser',res.data);
//         data=res.data
//         this.setState({
//                               firstName: data[0].firstName,
//                     lastName: data[0].lastName,
//                     occupation: data[0].Occupation,
//                     bio: data[0].Bio,
//                     age: data[0].Age,

//                          });
//        console.log(res.data);
//        localStorage.setItem('userId',res.data.pk);
//      })
//    }

   
// render() {
//        return (
//            <div className="container jumbotron ">
               

//                <hr
//                    style={{
//                        color: "#000000",
//                        backgroundColor: "#000000",
//                        height: 0.5,
//                        borderColor: "#000000",
//                    }}
//                />
//           <h2>Hello {this.state.firstName} {this.state.lastName}</h2>
//           <h3>{this.state.dob}</h3>
               
//                     <div>
//                        <div className="card shadow-lg">
//                                <blockquote className="text-blockquote mb-0">
//                                    <h1> {this.state.firstName}  {this.state.lastName}</h1>
//                                    <footer className="blockquote-footer">
//                                        {" "}
//                                        <cite title="Source Title">{this.state.occupation}</cite>
//                                    </footer>
//                  <footer className="blockquote-footer">
//                                        {" "}
//                                        <cite title="Source Title">{this.state.bio}</cite>
//                                    </footer>
//                  <footer className="blockquote-footer">
//                                        {" "}
//                                        <cite title="Source Title">{this.state.age}</cite>
//                                    </footer>
//                </blockquote>
                           
//                        </div>
//                        <span className="border border-primary "></span>
//                    </div> 
                
//            </div>
//        );
//    }
// }
// export default Dashboard;

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
// import React from "react";
// import { Breadcrumb, Button, ButtonGroup, Row, Col, InputGroup, Form, Dropdown } from "@themesberg/react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faPlus, faCog, faCheck, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
   

       
// 		import { Menu, Icon, Button } from 'antd';

// const { SubMenu } = Menu;

//  import axios from "axios";


// class Dashboard extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   toggleCollapsed = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <div style={{ width: 256 }}>
//         <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
//           <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
//         </Button>
//         <Menu
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode="inline"
//           theme="dark"
//           inlineCollapsed={this.state.collapsed}
//         >
//           <Menu.Item key="1">
//             <Icon type="pie-chart" />
//             <span>Option 1</span>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <Icon type="desktop" />
//             <span>Option 2</span>
//           </Menu.Item>
//           <Menu.Item key="3">
//             <Icon type="inbox" />
//             <span>Option 3</span>
//           </Menu.Item>
//           <SubMenu
//             key="sub1"
//             title={
//               <span>
//                 <Icon type="mail" />
//                 <span>Navigation One</span>
//               </span>
//             }
//           >
//             <Menu.Item key="5">Option 5</Menu.Item>
//             <Menu.Item key="6">Option 6</Menu.Item>
//             <Menu.Item key="7">Option 7</Menu.Item>
//             <Menu.Item key="8">Option 8</Menu.Item>
//           </SubMenu>
//           <SubMenu
//             key="sub2"
//             title={
//               <span>
//                 <Icon type="appstore" />
//                 <span>Navigation Two</span>
//               </span>
//             }
//           >
//             <Menu.Item key="9">Option 9</Menu.Item>
//             <Menu.Item key="10">Option 10</Menu.Item>
//             <SubMenu key="sub3" title="Submenu">
//               <Menu.Item key="11">Option 11</Menu.Item>
//               <Menu.Item key="12">Option 12</Menu.Item>
//             </SubMenu>
//           </SubMenu>
//         </Menu>
//       </div>
//     );
//   }
// }





// export default Dashboard;



//CHAT COMPONENT

// import React, { Component } from 'react';
// import { w3cwebsocket as W3CWebSocket } from "websocket";

// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import Paper from '@material-ui/core/Paper';
// import Avatar from '@material-ui/core/Avatar';
// import axios from 'axios';
// import { withStyles } from "@material-ui/core/styles";
// import MyNavbar from './Navbar';
// import { Box } from '@material-ui/core';
// import {ChatBubble} from '@material-ui/icons'
// import InputEmoji from 'react-input-emoji'
// import {ChatBox} from 'react-chatbox-component';


// const useStyles = theme => ({
//   paper: {
//     // marginTop: theme.spacing(1),
//     // display: 'flex',
//     // flexDirection: 'column',
//     // alignItems: 'left',
//     backgroundColor:theme.palette.secondary.main,
//   },
//   avatar: {
//     // margin: theme.spacing(0.3),
//     // backgroundColor: theme.palette.secondary.main,
//     // //backgroundImage:this.state.Pic
    
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(1, 0, 1),
//   },
//   root: {
//     boxShadow: 'none',
//   }
// });

// class NewChat extends Component {

//   state = {
//     isLoggedIn: true,
//     messages: [],
//     value: '',
//     name: 'fiona',
//     room: 'vacad',
//     av:'',
//     Pic:''
//   }

//   client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat/' + this.state.room + '/');

//   onButtonClicked = (e) => {
//     this.client.send(JSON.stringify({
//       type: "message",
//       message: this.state.value,
//       name: this.state.Pic
//     }));
//     this.state.value = ''
//     e.preventDefault();
//   }
//   mymethod(val){
//     this.setState({ value: val });
//             this.value = this.state.value;
//   }

//   componentDidMount() {
//     let data;
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: "Token "+localStorage.getItem('token')
//     }
//     axios.get('http://127.0.0.1:8000/details/user/')
//       .then(res => {
//         // localStorage.setItem('detailsOfUser',res.data);
//          data=res.data
//          this.setState({
//                                av: data[0].firstName[0],
//                                name:data[0].firstName,
//                                Pic:"http://127.0.0.1:8000"+data[0].pic
 
//                           });
//         console.log(res.data);
//         //localStorage.setItem('userId',res.data.pk);
        
//       })
//     this.client.onopen = () => {
//       console.log('WebSocket Client Connected');
//     };
//     this.client.onmessage = (message) => {
//       const dataFromServer = JSON.parse(message.data);
//       console.log('got reply! ', dataFromServer.type);
//       if (dataFromServer) {
//         this.setState((state) =>
//           ({
//             messages: [...state.messages,
//             {
//               msg: dataFromServer.message,
//               name: dataFromServer.name,
//             }]
//           })
//         );
//       }
//     };
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//         <>
//         <MyNavbar/>
//       <Container component="main" maxWidth="xs">
          
//         {this.state.isLoggedIn ?
//           <div style={{ marginTop: 50, }}>
            
//             <Paper style={{ height: 550, maxHeight: 550, overflow: 'auto', boxShadow: 'none', }}>
//             <Paper elevation={3} style={{ height: 500, width:350, padding:'5px', margin:'20px' ,maxHeight: 500, overflow: 'auto',backgroundcolor:"red" }}>
//               {/* {this.state.messages.map(message => <>
//               <br></br>
//                 <Card className={classes.root}>
//                   <CardHeader
                  
//                     avatar={
//                       <Avatar alt="Remy Sharp" src={message.name} float="right"/>
//                     }
//                     title={message.msg}
//                     style={{backgroundColor:"", padding:"2px"}}
//                   />
                   
//                 </Card>
//               </>)}  */}
//  <ChatBox messages={this.state.messages} />
//             </Paper>
//             </Paper>

//             <form className={classes.form} noValidate onSubmit={this.onButtonClicked}>
//             <InputEmoji
//             id="outlined-helperText"
//             //label="Make a comment"
//             placeholder="Type a message"
//             defaultValue="Default Value"
            
//           value={this.state.value}
//           onChange={this.mymethod.bind(this)}
//           fontFamily="Times"
                   
//         />
//         <br></br>
//         <label htmlFor="chatSubmit"> 
        
//        <Avatar sx={{ bgcolor:"pink" }}  style={{ backgroundColor:"grey" ,position:"absolute", left:"910px", top:"670px"}} alt="Remy Sharp"  float="right"><ChatBubble/></Avatar>
//               </label>
             

//               <Button
//                 type="submit"
//                 width="200px"
//                 variant="contained"
//                 color="dark"
//                 id="chatSubmit"
//                 className={classes.submit}
//               >
//                 </Button>
//             </form>
//           </div>
//           :
//           <div>
//             <CssBaseline />
//             <div className={classes.paper}>
//               <Typography component="h1" variant="h5">
//                 ChattyRooms
//                 </Typography>
//               <form className={classes.form} noValidate onSubmit={value => this.setState({ isLoggedIn: true })}>
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Chatroom Name"
//                   name="Chatroom Name"
//                   autoFocus
//                   value={this.state.room}
//                   onChange={e => {
//                     this.setState({ room: e.target.value });
//                     this.value = this.state.room;
//                   }}
//                 />
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="Username"
//                   label="Username"
//                   type="Username"
//                   id="Username"
//                   value={this.state.name}
//                   onChange={e => {
//                     this.setState({ name: e.target.value });
//                     this.value = this.state.name;
//                   }}
//                 />

//                 <Button
//                   type="submit"
//                   width="200px"
//                   variant="contained"
//                   color="dark"
//                   className={classes.submit}
//                 >
//                   Start Chatting
//                   </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="#" variant="body2">
//                       Forgot password?
//                       </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="#" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </form>
//             </div>
//           </div>}
//       </Container>
//       </>
//     )
//   }
// }
// export default withStyles(useStyles)(NewChat)

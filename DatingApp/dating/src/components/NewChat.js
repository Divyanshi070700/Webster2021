import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import MyNavbar from './Navbar';
import { Box } from '@material-ui/core';
import {ChatBubble} from '@material-ui/icons'
import InputEmoji from 'react-input-emoji'
import {ChatBox} from 'react-chatbox-component';
import { message } from 'antd';
import 'react-chatbox-component/dist/style.css';

const useStyles = theme => ({
  paper: {
    // marginTop: theme.spacing(1),
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'left',
    backgroundColor:theme.palette.secondary.main,
  },
  avatar: {
    // margin: theme.spacing(0.3),
    // backgroundColor: theme.palette.secondary.main,
    // //backgroundImage:this.state.Pic
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  root: {
    boxShadow: 'none',
  }
});

class NewChat extends Component {

  state = {
    isLoggedIn: false,
    messages: [],
    value: '',
    //name: 'fiona',
    //room: 'vacad',
    //av:'',
    //Pic:''
    user:{},
    name:'',
    avatar:'',
    id:'',
    uid:'',

    //id:"",

  }

  client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat/' + this.state.room + '/');

  renderr=(message)=>
  {const sender={
    "name":this.state.name,
    "avatar":this.state.avatar,
    //"avatar": "",
    "uid":this.state.uid,
  }
    this.client.send(JSON.stringify({
      type: "message",
      message: message,
      name: this.state.name,
      sender:sender,
    }));
   // message.preventDefault();
  }
  onButtonClicked = (e) => {
    if(this.state.value !== '')
    this.renderr(this.state.value);
         this.state.value = ''
         e.preventDefault();
       }
  
  mymethod(val){
    this.setState({ value: val });
            this.value = this.state.value;
  }

  componentDidMount() {
    let data;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Token "+localStorage.getItem('token')
    }
    axios.get('http://127.0.0.1:8000/details/user/')
      .then(res => {
        // localStorage.setItem('detailsOfUser',res.data);
         data=res.data
         
         const user={
          "uid":data[0].firstName,
         }

         this.setState({
                       //id:data[0].firstName[0],        
                       name:data[0].firstName,
                       avatar:"http://127.0.0.1:8000"+data[0].pic,
                       //"avatar": "",
                       uid:data[0].firstName,
                     user:user,
                     isLoggedIn:true
                          });
       // console.log("heyy"+res.data);
        //localStorage.setItem('userId',res.data.pk);
        if(this.state.name==data[0].firstName){
        
        console.log("heyy");
        }
      })
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    this.client.onmessage = (message) => {
      console.log(message);
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer.type);
      if (dataFromServer) {
        console.log("heyy");
        
        this.setState((state) =>
          ({
            messages: [...state.messages,
            {
              text: dataFromServer.message,
              //change
              id:this.state.messages.length+1,
              //name: dataFromServer.name,
              //change
              sender:dataFromServer.sender,
              
            }]
          })
        );
      }
    };
  }

  render() {
    const { classes } = this.props;
    return (
        <>
        <MyNavbar/>
    
          
        {this.state.isLoggedIn ?
          <div>
<div className='container'>
  <div className='chat-header'>
    
  </div>
  <ChatBox messages={this.state.messages} user={this.state.user} />
  <form className={classes.form} noValidate onSubmit={this.onButtonClicked}>
            <InputEmoji
             id="outlined-helperText"
             //label="Make a comment"
           placeholder="Type a message"
             defaultValue="Default Value"
            
           value={this.state.value}
           onChange={this.mymethod.bind(this)}
           fontFamily="Times"
                   
         />
         <br></br>
        <label htmlFor="chatSubmit"> 
        
        <Avatar sx={{ bgcolor:"pink" }}  style={{ backgroundColor:"grey" ,position:"absolute", left:"1270px", top:"665px"}} alt="Remy Sharp"  float="right"><ChatBubble/></Avatar>
               </label>
             

              <Button
                 type="submit"
                width="200px"
                variant="contained"
                color="dark"
                id="chatSubmit"
                className={classes.submit}
              >
                </Button>
         </form>
</div>
            
          </div>
          :
          <div>
                     </div>}
      
      </>
    )
  }
}
export default withStyles(useStyles)(NewChat)

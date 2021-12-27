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
    isLoggedIn: true,
    messages: [],
    value: '',
    name: 'fiona',
    room: 'vacad',
    av:'',
    Pic:''
  }

  client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat/' + this.state.room + '/');

  onButtonClicked = (e) => {
    this.client.send(JSON.stringify({
      type: "message",
      message: this.state.value,
      name: this.state.Pic
    }));
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
         this.setState({
                               av: data[0].firstName[0],
                               name:data[0].firstName,
                               Pic:"http://127.0.0.1:8000"+data[0].pic
 
                          });
        console.log(res.data);
        //localStorage.setItem('userId',res.data.pk);
        
      })
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer.type);
      if (dataFromServer) {
        this.setState((state) =>
          ({
            messages: [...state.messages,
            {
              msg: dataFromServer.message,
              name: dataFromServer.name,
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
      <Container component="main" maxWidth="xs">
          
        {this.state.isLoggedIn ?
          <div style={{ marginTop: 50, }}>
            
            <Paper style={{ height: 550, maxHeight: 550, overflow: 'auto', boxShadow: 'none', }}>
            <Paper elevation={3} style={{ height: 500, width:350, padding:'5px', margin:'20px' ,maxHeight: 500, overflow: 'auto',backgroundcolor:"red" }}>
              {this.state.messages.map(message => <>
              <br></br>
                <Card className={classes.root}>
                  <CardHeader
                  
                    avatar={
                      <Avatar alt="Remy Sharp" src={message.name} float="right"/>
                    }
                    title={message.msg}
                    style={{backgroundColor:"", padding:"2px"}}
                  />
                   {/* <Box  style={{padding:"3px",color:"pink",backgroundColor:"red"}}>{message.msg}
                  </Box>
                    */}
                </Card>
              </>)}
            </Paper>
            </Paper>

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
        <label htmlFor="chatSubmit"> 
        
       <Avatar sx={{ bgcolor:"pink" }}  style={{ backgroundColor:"grey" ,position:"absolute", left:"910px", top:"670px"}} alt="Remy Sharp"  float="right"><ChatBubble/></Avatar>
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
          :
          <div>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                ChattyRooms
                </Typography>
              <form className={classes.form} noValidate onSubmit={value => this.setState({ isLoggedIn: true })}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Chatroom Name"
                  name="Chatroom Name"
                  autoFocus
                  value={this.state.room}
                  onChange={e => {
                    this.setState({ room: e.target.value });
                    this.value = this.state.room;
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Username"
                  label="Username"
                  type="Username"
                  id="Username"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
                    this.value = this.state.name;
                  }}
                />

                <Button
                  type="submit"
                  width="200px"
                  variant="contained"
                  color="dark"
                  className={classes.submit}
                >
                  Start Chatting
                  </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                      </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>}
      </Container>
      </>
    )
  }
}
export default withStyles(useStyles)(NewChat)

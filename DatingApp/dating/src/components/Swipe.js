import React, { Component,Link } from "react";
import Deck from "./Deck";
import axios from "axios";
// import MyNavSwipe from "./NavbarSwipe";
import MyNavSwipe from "./Navbar";
import { Button } from "react-bootstrap";


class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, result: undefined, isSet: localStorage.getItem('PreferenceSet') };
  }
  componentDidMount() {
    let userList=[];
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/getSwipe/",
      
      headers: { "Content-Type": "application/json" ,
      Authorization: "Token "+localStorage.getItem('token')},
    })   
    .then(res => {
       
         for(let i = 0; i < res.data.length; i++) {
           
             userList.push({pics: [
      //         "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      // "https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                  "http://127.0.0.1:8000"+res.data[i].pic
             ],
             pk:res.data[i].owner,
             name: res.data[i].firstName,
             age: res.data[i].Age,
             distance: "2 miles away",
             text:res.data[i].Bio
               
             });
         }
         this.setState({ result: userList });
      this.setState({ isLoading: false });
      localStorage.setItem('userlen',userList.length)
           console.log("I was called"+this.state.result[0])
            
         
         
       }
       )
      
  }
  render() {
    const { isLoading, result } = this.state;
    
    if(!isLoading)
      return (
      <>
      <MyNavSwipe/>
      <Deck {...this.state.result}/>
      
      </>);
      else
      return(
<>
      <MyNavSwipe/>
      <h2>Loading...</h2>
      
      </>
      );

    
    
    
      
  }
}

export default Swipe;
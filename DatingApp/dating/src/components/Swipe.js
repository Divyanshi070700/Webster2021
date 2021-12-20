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
       //"https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
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
       if(userList.length==res.data.length) { 
         console.log(res.data.length);
        localStorage.setItem('userlen',userList.length)
       this.setState({ isLoading: false });
       }
      
           console.log("I was called"+this.state.result[0].name)
            
         
         
       }
       )
      
  }
  render() {
    const { isLoading, result } = this.state;
    
    if(!isLoading)
      return (
      <>
      <MyNavSwipe/>
      {
        this.state.isSet!=null?
        <Deck {...this.state.result}/>
      :
      <>
      <h3>Your preferences are not set. Kindly set them for a better experience   </h3> 
      </>
      }
      
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
import React, { Component } from "react";
// import Deck from "./components/Deck";
import Deck from "./Deck";
import axios from "axios";
// import MyNavSwipe from "./NavbarSwipe";
import MyNavSwipe from "./Navbar";


class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, result: undefined };
  }
  componentDidMount() {
    let userList=[];
    axios.get('http://127.0.0.1:8000/details/user/',{
       "Content-Type": "application/json"
       
     })
        .then(res => {
       
         for(let i = 0; i < res.data.length; i++) {
           
             userList.push({pics: [
               "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
               "https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
             ],
             name: res.data[i].firstName,
             age: res.data[i].Age,
             distance: "2 miles away",
             text:res.data[i].Bio
               
             });
         }
         this.setState({ result: userList });
      this.setState({ isLoading: false });
      localStorage.setItem('userlen',userList.length)
           console.log("I was called"+this.state.result[0].name)
            
         
         
       }
       )
      
  }
  render() {
    const { isLoading, result } = this.state;
    if (isLoading) {
      return (
      <>
      <MyNavSwipe/>
      <div className="App">Loading...</div>
      </>);
    }

    return (
      <>
      <MyNavSwipe/>
      <Deck {...this.state.result}/>
      
      </>
      );
  }
}

export default Swipe;

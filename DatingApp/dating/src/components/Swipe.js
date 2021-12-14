import React, { Component } from "react";
// import Deck from "./components/Deck";
import Deck from "./Deck";
// import MyNavSwipe from "./NavbarSwipe";
import MyNavSwipe from "./Navbar";

class Swipe extends Component {
  render() {
    
    return (
      <>
      <MyNavSwipe/>
      <Deck/>
      </>
      );
  }
}

export default Swipe;

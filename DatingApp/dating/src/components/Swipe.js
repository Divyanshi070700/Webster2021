import React, { Component } from "react";
// import Deck from "./components/Deck";
import Deck from "./Deck";
import MyNavSwipe from "./NavbarSwipe";

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

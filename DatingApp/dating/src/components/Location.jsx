import React, { Component } from "react";
// import { render } from "react-dom";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log("Latitude is :", position.coords.latitude);
//       console.log("Longitude is :", position.coords.longitude);
//     });
//   }
// componentDidMount() {
//     if ("geolocation" in navigator) {
//       console.log("Available");
//     } else {
//       console.log("Not Available");
//     }
//   }
    // componentDidMount() {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position)
    //   });
    // }
    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(
    //       function(position) {
    //         console.log(position);
    //       },
    //       function(error) {
    //         console.error("Error Code = " + error.code + " - " + error.message);
    //       }
    //     );
    //   }
    componentDidMount() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
        }
      }
    
  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width='300' height='150' allowfullscreen></iframe>

      </div>
    );
  }
}
export default Location;
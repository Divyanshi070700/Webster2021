import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import DashHome from "./components/DashHome";
import Footer from './components/Footer';
import Faq from './components/faq';
// import Deck from "./components/Deck";
import Swipe from "./components/Swipe";
import Contactus from "./components/Contactus";
import Location from "./components/Location";
import Demo1 from "./components/Demo1";
// import Card from "./components/Card";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import 'reactjs-popup/dist/index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as actions from './store/actions/auth';
// form and modal modules
import "antd/dist/antd.css";
import FetchDetails from "./components/FetchDetails";
import Calender from "./components/Calender";
import Preference from "./components/preference";
import Activity from "./pages/Activity/Activity";
// import { Maps } from "./components/Maps";
class App extends React.Component {

	componentDidMount() {
		this.props.onTryAutoSignup();
	}


	render(){
	  // Create Account! Form
	  
	return (
	  <>
	  <BrowserRouter>
		<Switch>
			<Route exact path="/">
				<HomePage {...this.props}>
					
					</HomePage>
				

				</Route>
			            <Route path="/fillDetails" component={FetchDetails}/>
                        <Route path="/dashboard" component={Dashboard} />
						<Route path="/footer" component={Footer} />
						<Route path="/Swipe" component={Swipe} />
						<Route path="/faq" component={Faq} />
						<Route path="/Contactus" component={Contactus} />
						{/* <Route path="/Activity" component={Activity} />  */}
						<Route exact path="/activity"><Activity /></Route>
						<Route exact path="/calender"><Calender /></Route>
						{/* <Route exact path="/map"><Maps /></Route> */}
						<Route exact path="/location"><Location /></Route>
						<Route exact path="/demo1"><Demo1 /></Route>
                        <Route path="/setPref" component={Preference}/>
					</Switch>
				</BrowserRouter>
				{/* <Footer/> */}
			</>
		);
	}
}
const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

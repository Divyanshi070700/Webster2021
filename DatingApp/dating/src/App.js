
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import DashHome from "./components/DashHome";
import Footer from './components/Footer';
import React, { Component } from "react";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";
import { connect } from "react-redux";
import 'reactjs-popup/dist/index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as actions from './store/actions/auth';
// form and modal modules
import "antd/dist/antd.css";
class App extends React.Component {
  
	componentDidMount(){
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
			<Route path="/nav" component={Navbar}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/dashhome" component={DashHome}/>
			<Route path="/footer" component={Footer}/>
			
			
		</Switch>
		</BrowserRouter>
		{/* <Footer/> */}
	  	</>
	);
  }
  }
const mapStateToProps= state =>{
	return{
		isAuthenticated: state.token !== null
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	}
}
  export default connect(mapStateToProps,mapDispatchToProps)(App);

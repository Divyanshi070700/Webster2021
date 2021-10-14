import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import React, { Component } from "react";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";
import { connect } from "react-redux";
//import RegisterForm from "./components/AccoutAuth/RegisterForm";
function App() {
	return (
		<BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/nav" component={Navbar}/>
						<Route path="/dashboard" component={Dashboard}/>
		</Switch>
		</BrowserRouter>
		);
	}

	
	export default connect()(App);
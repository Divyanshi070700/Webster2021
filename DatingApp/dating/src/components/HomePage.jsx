import MyNavbar from "./Navbar";
import React from 'react'
import {Button,Card} from "react-bootstrap";
import bg from './bg.jpg';
import SignUp from "./SignUp";
import Login from "./Login";
//import Button from "@restart/ui/esm/Button";
import * as actions from '../store/actions/auth';
import { connect } from "react-redux";
import Footer from "./Footer";
import "./HomePage.css";
class HomePage extends React.Component {
    
render(){
   // const location=GetDetails();
    return (
        <>
        <div>
        <MyNavbar/>
        <img className="homeimg" src={bg} />
        {/* '<Card className="text-center" style={{ display:'flex', justifyContent:'center'}}>
    <Card.Img variant="top" src={bg} />
    <Card.Body>
    <Card.Title>Start Something Epic!</Card.Title>
    <Card.Text>
        Our site Tag line here!!
    </Card.Text>
    </Card.Body>
    </Card>' */}
    <h2>Start Something Epic!</h2>
    </div>
    {
        this.props.isAuthenticated ?
        <Button type ="primary" onClick={this.props.logout}>Logout!</Button>
        
        :
        <div>
        <SignUp >
        
        </SignUp>
        <Login>
            </Login>
            <Footer/>
            </div>
    } 
    
    
    
    </>
    );
    }
}
const mapStateToProps= state =>{
	return{
		//loading: this.state.loading,
        //error: this.state.error
	}
}

const mapDispatchToProps = dispatch =>{
    console.log("logout clicked");
    return{
        
        logout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
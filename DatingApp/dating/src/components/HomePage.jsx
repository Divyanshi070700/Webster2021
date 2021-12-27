import MyNavbar from "./Navbar";
import React from 'react'
import { Button, Card } from "react-bootstrap";
import bg from '../images/bg.jpg';
import SignUp from "./SignUp";
import Login from "./Login";
//import Button from "@restart/ui/esm/Button";
import * as actions from '../store/actions/auth';
import { connect } from "react-redux";
import Footer from "./Footer";
import "../styles/HomePage.css";
import home from "../images/home3.png";
import SocialLogin from "./SocialLogin";
import {SearchOutlined} from "@material-ui/icons"

class HomePage extends React.Component {

    render() {
        // const location=GetDetails();
        return (
                
                <div className="background" id="google_translate_element">
                <div>
                <MyNavbar />
                </div>
                    <div className="leftdiv">
                    {/* <img src={home} height="100%"/> */}
                    </div>
                    <div className="rightdiv">
                        <h2>Start Something Epic!</h2>
                        
                        {
                            this.props.isAuthenticated ?
                                <Button type="primary" onClick={this.props.logout}>Logout!</Button>
                                :
                                <div className="account">
                                    <SignUp >
                                    </SignUp>
                                    <Login>
                                    </Login>
                                    <SocialLogin>
                                        </SocialLogin>

                                </div>
                        }
                        {/* <div className="footerdiv">
                        <Footer />
                    </div> */}

                    </div>
                    
                </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        //loading: this.state.loading,
        //error: this.state.error
    }
}

const mapDispatchToProps = dispatch => {
    console.log("logout clicked");
    return {

        logout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
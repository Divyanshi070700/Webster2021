import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from "./services/fb"
import googleLogin from "./services/google"


class SocialLogin extends Component {

  render() {
    const responseFacebook = async (response) => {
      let fbResponse  = await fbLogin(response.accessToken)
      console.log(fbResponse);
      console.log(response);
    }

    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }

    return (
      <div className="App">
    

        {/* <FacebookLogin
          appId="<FACEBOOK APP ID>"
          fields="name,email,picture"
          callback={responseFacebook}
        /> */}

        <GoogleLogin
          clientId=""
          buttonText="Login with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}

export default SocialLogin;
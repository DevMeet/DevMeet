import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

//Sidebar component that has all the links
class GoogleAuth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    //onClick={renderProps.onClick} disabled={renderProps.disabled}
    const responseGoogle = response => {
      // console.log(response)
      if (response.Ca) {
        this.setState(
          { loggedIn: true, name: response.Qt.Ad, email: response.Qt.zu },
          console.log(this.props.name)
        );
      }
    };
    let loggedIn;
    if (this.props.loggedIn === false) {
      loggedIn = (
        <GoogleLogin
          clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          onClick={this.props.loginHandleClick}
        />
      );
    }
    return (
      <div id="googleLogin">
        <GoogleLogin
          className="google"
          clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </div>
    );
  }
}
export default GoogleAuth;

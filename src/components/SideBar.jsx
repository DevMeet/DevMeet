import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, ButtonToolbar, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem'
import Profile from './Profile'
import MyEvents from './MyEvents'
import TrendingEvents from './TrendingEvents'
import UpcomingEvents from './UpcomingEvents'
import ReactModal from 'react-modal';

var Logo = require('../assets/logo.png')

//Sidebar component that has all the links
class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
  this.submitForm = this.submitForm.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.checkPassword = this.checkPassword.bind(this);
  };

  submitForm() {
    const inputName = document.querySelector('#nameInput').value;
    console.log('inputName: ', inputName)
  }

  handleOpenModal() {
    this.setState({ ...this.state, showModal: true });
  }

  handleCloseModal() {
    this.setState({ ...this.state, showModal: false });
  }
  
  handleKeyPress(event) {
    const warning = document.querySelector('#signUpError');
    if (event.key === 'Enter') this.submitForm();
    else if (warning.style.display === 'block') {
      warning.setAttribute("style", "display: none !important");
      document.querySelector('#nameInput').setAttribute("style", "border: 2px solid $yellowgrey !important;");
    }
  }

  checkPassword() {
    const password1 = document.getElementById('pw1').value; 
    const password2 = document.getElementById('pw2').value; 
    if (password1 === '') {
      alert ("Please enter password"); 
    }
    else if (password2 === '') {
      alert ("Please confirm your password"); 
    }
    else if (password1 !== password2) { 
      alert ("Password did not match. Please try again...") 
      return false; 
    } 
    else { 
      alert("Password matched. Welcome to DevMeet!") 
      return true; 
    } 
  } 

  render () {
    console.log(this.props)
    //onClick={renderProps.onClick} disabled={renderProps.disabled}
    const responseGoogle = (response) => {
      // console.log(response)
      if (response.Ca) {
        this.setState({loggedIn: true, name: response.Qt.Ad, email: response.Qt.zu}, console.log(this.props.name))
      }
    }
    let loggedIn;
    if (this.props.loggedIn === false) {
      loggedIn = (<GoogleLogin
                    clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    onClick={this.props.loginHandleClick}
                  />)
    }
    return (
      <Router>
      <div class="sidenav">
        <div className="title">
          {/* <div>DeV</div>
          <div>MeeT</div> */}
          <img src={require('../assets/logo.png')}/>
        </div>
         <Link to="/profile">Profile</Link>
         <Link to="/events">My Events</Link>
         <Link to="/trending">Trending</Link>
         <Link to="/upcoming">Upcoming</Link>
         <GoogleLogin className="google"
          clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Button className="signup" onClick={this.handleOpenModal}>Signup</Button>
        <ReactModal
          isOpen={this.state.showModal}
          // className="signup"
          // overlayClassName="signupModalOverlay"
          // contentLabel="Sign Up With Email"
          // onRequestClose={this.handleCloseModal}
          // shouldCloseOnOverlayClick={true}
          // aria={{labelledby: "heading"}}
        >
          <h1 id="heading">Sign Up With Email</h1>
          {/* <input type='text' id="nameInput" onKeyDown={(e) => this.handleKeyPress(e)} autoFocus /> */}
          <form action='/signup' method="POST">
            <input type="text" name='email' placeholder='Email'/><br></br>
            <input type="text" name='username' placeholder='Username'/><br></br>
            <input id='pw1' type="password" name='password' placeholder='Password'/><br></br>
            <input id='pw2' type="password" name='password' placeholder='Confirm Password'/><br></br>
            <input type="text" name='first_name' placeholder='First Name' /><br></br>
            <input type="text" name='last_name' placeholder='Last Name' /><br></br>
            <input type="text" name='role' placeholder='Role' /><br></br>
            <input type="text" name='city_name' placeholder='City Name'/><br></br>
            <input type="submit" onClick={this.checkPassword} value="Sign Up" />
          </form>
          <p id="signupError" style={{ display: 'none' }}>Please enter all fields!</p>
          <div>
            {/* <button onClick={this.submitForm}>Submit</button> */}
            <button onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </ReactModal>
         <Switch>
         <Route path="/profile">
          <Profile />
         </Route>
         <Route path="/events">
          <MyEvents />
         </Route>
        <Route path="/trending">
          <TrendingEvents />
        </Route>
        <Route path="/upcoming">
          <UpcomingEvents />
        </Route>
      </Switch>
      </div>
      </Router>
    )
  }
}
export default SideBar;

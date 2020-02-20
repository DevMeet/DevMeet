import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, ButtonToolbar, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import ReactModal from 'react-modal';
import Profile from '../components/Profile'
import MyEvents from '../components/MyEvents'
import TrendingEvents from '../components/TrendingEvents'
import UpcomingEvents from '../components/UpcomingEvents'
import Login from '../components/Login';
import GoogleAuth from '../components/GoogleAuth'

class SidebarContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showSignupModal: false,
      showLoginModal: false,
    }
    this.handleOpenSignup = this.handleOpenSignup.bind(this);
    this.handleOpenLogin = this.handleOpenLogin.bind(this);
    this.handleCloseSignup = this.handleCloseSignup.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.submitForm = this.submitForm.bind(this);
  };

  submitForm() {
    const inputName = document.querySelector('#nameInput').value;
    console.log('inputName: ', inputName)
  }

  handleOpenSignup() {
    this.setState({ ...this.state, showSignupModal: true });
  }

  handleOpenLogin() {
    this.setState({ ...this.state, showLoginModal: true });
  }

  handleCloseSignup() {
    this.setState({ ...this.state, showSignupModal: false });
  }

  handleCloseLogin() {
    this.setState({ ...this.state, showLoginModal: false });
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
    return (
      <Router>
      <div class="sidenav">
        <div className="title">
          {/* <div>DeV</div>
          <div>MeeT</div> */}
          <img src={require('../assets/logo2.png')}/>
        </div>
         <Link to="/profile">Profile</Link>
         <Link to="/events">Events</Link>
         <Link to="/trending">Trending</Link>
         <Link to="/upcoming">Upcoming</Link>
         <br></br>
        {/* <div>
          <UpcomingEvents
            events={this.props.events}
          />
        </div> */}
        <Button className="signup" onClick={this.handleOpenSignup}>Signup</Button>
        <Button className="login" onClick={this.handleOpenLogin}>Login</Button>
        <GoogleAuth 
          loggedIn={this.props.loggedIn}
          loginHandleClick={this.props.loginHandleClick}
        />
        <ReactModal
          isOpen={this.state.showSignupModal}
        >
          <h1 id="heading">Sign Up With Email</h1>
          <form action='/signup' method="POST">
            <input type="text" name='email' placeholder='Email'/><br></br>
            <input type="text" name='username' placeholder='Username'/><br></br>
            <input id='pw1' type="password" name='password' placeholder='Password'/><br></br>
            <input id='pw2' type="password" placeholder='Confirm Password'/><br></br>
            <input type="text" name='first_name' placeholder='First Name' /><br></br>
            <input type="text" name='last_name' placeholder='Last Name' /><br></br>
            <input type="text" name='role' placeholder='Role' /><br></br>
            <input type="text" name='city_name' placeholder='City Name'/><br></br>
            <input type="submit" onClick={this.checkPassword} value="Sign Up" />
          </form>
          <div>
            <button onClick={this.handleCloseSignup}>Cancel</button>
          </div>
        </ReactModal>
        <ReactModal
          isOpen={this.state.showLoginModal}
        >
          <h1 id="heading">Please Log In</h1>
          <form action='/signup' method="POST">
            <input type="text" name='username' placeholder='Username'/><br></br>
            <input type="password" name='password' placeholder='Password'/><br></br>
            <input type="submit" onClick={this.authenticate} value="Login" />
          </form>
          <div>
            <button onClick={this.handleCloseLogin}>Cancel</button>
          </div>
        </ReactModal>
         {/* <Switch>
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
        <Route path="/login">
          <Login />
        </Route>
      </Switch> */}
      </div>
      </Router>
    )
  }
}

export default SidebarContainer;
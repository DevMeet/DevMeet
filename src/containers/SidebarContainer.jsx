import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  InputGroup,
  Button,
  Modal,
  ButtonToolbar,
  ButtonGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import ReactModal from 'react-modal';
import Profile from '../components/Profile';
import MyEvents from '../components/MyEvents';
import TrendingEvents from '../components/TrendingEvents';
import UpcomingEvents from '../components/UpcomingEvents';
import GoogleAuth from '../components/GoogleAuth';

const InputGroupCheckbox = InputGroup.Checkbox;

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this);
    // this.handleCloseModalLogin = this.handleCloseModalLogin.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  submitForm() {
    const inputName = document.querySelector('#nameInput').value;
    console.log('inputName: ', inputName);
  }

  handleOpenModal() {
    this.setState({ ...this.state, showModal: true });
  }

  handleCloseModal() {
    this.setState({ ...this.state, showModal: false });
  }

  handleOpenModalLogin() {
    this.setState({ ...this.state, showModalLogin: true });
  }

  handleCloseModalLogin() {
    this.setState({ ...this.state, showModalLogin: false });
  }

  handleKeyPress(event) {
    const warning = document.querySelector('#signUpError');
    if (event.key === 'Enter') this.submitForm();
    else if (warning.style.display === 'block') {
      warning.setAttribute('style', 'display: none !important');
      document
        .querySelector('#nameInput')
        .setAttribute('style', 'border: 2px solid $yellowgrey !important;');
    }
  }

  checkPassword() {
    const password1 = document.getElementById('pw1').value;
    const password2 = document.getElementById('pw2').value;
    if (password1 === '') {
      alert('Please enter password');
    } else if (password2 === '') {
      alert('Please confirm your password');
    } else if (password1 !== password2) {
      alert('Password did not match. Please try again...');
      return false;
    } else {
      alert('Password matched. Welcome to DevMeet!');
      return true;
    }
  }

  loginUser() {
    this.handleCloseModalLogin();
  }

  render() {
    return (
      <Router>
        <div class="sidenav">
          <div className="title">
            <div>DeV</div>
            <div>MeeT</div>
            <img src={require('../assets/logo.png')} />
          </div>
          <Link to="/profile">Profile</Link>
          <Link to="/events">Events</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/upcoming">Upcoming</Link>
          {/* <GoogleAuth 
          loggedIn={this.props.loggedIn}
          loginHandleClick={this.props.loginHandleClick}
        /> */}
          <Button color="secondary" className="login" onClick={this.handleOpenModalLogin}>
            Log in
          </Button>
          <ReactModal isOpen={this.state.showModalLogin}>
            <h2>Log in:</h2>
            <p
              className="smallbold"
              onClick={() => {
                this.handleCloseModalLogin();
                this.handleOpenModal();
              }}
            >
              Not registered with us yet? <a href="#">Sign up</a>
            </p>
            <form action="/login" method="POST">
              Username:&nbsp;&nbsp;
              <input type="text" name="username" placeholder="Username" />
              <br />
              Password:&nbsp;&nbsp;&nbsp;
              <input id="pw1" type="password" name="password" placeholder="Password" />
              <p className="smallbold">
                <InputGroupCheckbox />
                Keep me signed in
              </p>
              <Button type="submit" onClick={this.loginUser}>
                Log in
              </Button>
            </form>
            <br />
            <p className="smallbold">
              <Button
                id="forgot"
                variant="outline-secondary"
                onClick={() => {
                  this.handleCloseModalLogin();
                  this.handleOpenModal();
                }}
              >
                {' '}
                Forgot your username or password?
              </Button>
            </p>
            <hr />
            <div id="orBox">
              <div id="or">OR</div>
              <br />
              <div id="googleAuth">
                <GoogleAuth
                  loggedIn={this.props.loggedIn}
                  loginHandleClick={this.props.loginHandleClick}
                />
              </div>
              {/* <div>
              {// <button onClick={this.submitForm}>Submit</button>}
              <button onClick={this.handleCloseModalLogin}>Cancel</button>
            </div> */}
            </div>
          </ReactModal>
          <div>
            <UpcomingEvents events={this.props.events} />
          </div>
          <Button color="primary" className="signup" onClick={this.handleOpenModal}>
            Signup
          </Button>
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
            <form action="/signup" method="POST">
              <input type="text" name="email" placeholder="Email" />
              <br></br>
              <input type="text" name="username" placeholder="Username" />
              <br></br>
              <input id="pw1" type="password" name="password" placeholder="Password" />
              <br></br>
              <input id="pw2" type="password" name="password" placeholder="Confirm Password" />
              <br></br>
              <input type="text" name="first_name" placeholder="First Name" />
              <br></br>
              <input type="text" name="last_name" placeholder="Last Name" />
              <br></br>
              <input type="text" name="role" placeholder="Role" />
              <br></br>
              <input type="text" name="city_name" placeholder="City Name" />
              <br></br>
              <input type="submit" onClick={this.checkPassword} value="Sign Up" />
            </form>
            <p id="signupError" style={{ display: 'none' }}>
              Please enter all fields!
            </p>
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
    );
  }
}

export default SidebarContainer;

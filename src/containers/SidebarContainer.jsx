import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, ButtonToolbar, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import ReactModal from 'react-modal';
import Profile from '../components/Profile'
import MyEvents from '../components/MyEvents'
import TrendingEvents from '../components/TrendingEvents'
import UpcomingEvents from '../components/UpcomingEvents'
import GoogleAuth from '../components/GoogleAuth'


class SidebarContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  render () {
    return (
      <Router>
      <div class="sidenav">
        <div className="title">
          <div>DeV</div>
          <div>MeeT</div>
          <img src={require('../assets/logo.png')}/>
        </div>
         <Link to="/profile">Profile</Link>
         <Link to="/events">Events</Link>
         <Link to="/trending">Trending</Link>
         <Link to="/upcoming">Upcoming</Link>
        <GoogleAuth 
          loggedIn={this.props.loggedIn}
          loginHandleClick={this.props.loginHandleClick}
        />
        <div>
          <UpcomingEvents
            events={this.props.events}
          />
        </div>
        <Button className="signup">Signup</Button>
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
            <input type="text" name='password' placeholder='Password'/><br></br>
            <input type="text" name='first_name' placeholder='First Name' /><br></br>
            <input type="text" name='last_name' placeholder='Last Name' /><br></br>
            <input type="text" name='role' placeholder='Role' /><br></br>
            <input type="text" name='city_name' placeholder='City Name'/><br></br>
            <input type="submit" value="Sign Up" />
          </form>
          <p id="signupError" style={{ display: 'none' }}>Please enter all fields!</p>
          <div>
            {/* <button onClick={this.submitForm}>Submit</button> */}
            <button onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </ReactModal>
      </Router>
    )
  }
}

export default SidebarContainer;
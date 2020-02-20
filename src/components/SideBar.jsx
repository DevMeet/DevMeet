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



//Sidebar component that has all the links
class SideBar extends Component {
  constructor(props) {
    super(props)
  };

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
          <div>DeV</div>
          <div>MeeT</div>
        </div>
         <Link to="/profile">Profile</Link>
         <Link to="/events">Events</Link>
         <Link to="/trending">Trending</Link>
         <Link to="/upcoming">Upcoming</Link>
         <GoogleLogin className="google"
          clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
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

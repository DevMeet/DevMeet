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
    //onClick={renderProps.onClick} disabled={renderProps.disabled}
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div>
      <div class="sidenav">
         <a to="#about">Profile</a>
         <a to="#services">Events</a>
         <a to="#clients">Trending</a>
         <a to="#contact">Upcoming</a>
         <GoogleLogin id="google"
          clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div class="main">
        
      </div>
      </div>
      // <Router>
      // <Navbar bg="light" expand='lg' className="fixed-left" fixed="top">
      //   <Navbar.Brand href="#home">DevMeet</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //   <Navbar.Collapse id="responsive-navbar-nav">
        // <GoogleLogin id="google"
        //       clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
        //       buttonText="Login"
        //       onSuccess={responseGoogle}
        //       onFailure={responseGoogle}
        //       cookiePolicy={'single_host_origin'}
        //       />
      //       <Nav className="mr-auto">
      //       <NavItem>
      //       <Link to="/profile">Profile</Link>
      //       </NavItem>
      //       <NavItem>
      //       <Link to="/events">Events</Link>
      //       </NavItem>
      //       <NavItem>
      //       <Link to="/trending">Trending</Link>
      //       </NavItem>
      //       <NavItem>
      //       <Link to="/upcoming">Upcoming</Link>
      //       </NavItem>
      //     </Nav>
      //   </Navbar.Collapse>
      
      // <Switch>
      //    <Route path="/profile">
      //     <Profile />
      //    </Route>
      //    <Route path="/events">
      //     <MyEvents />
      //    </Route>
      //   <Route path="/trending">
      //     <TrendingEvents />
      //   </Route>
      //   <Route path="/upcoming">
      //     <UpcomingEvents />
      //   </Route>
      // </Switch>
      // </Navbar>
      // </Router>
    
      
      
  //     <div className='mainNavBar'>
  //       <ButtonGroup vertical className='buttonContainer'>
        
  //         <Link to="/myevents">
  //           <Button
  //           >
  //             My Events
  //           </Button>
  //         </Link>
  //         <Link to="/trending">
  //           <Button
  //           >
  //             Trending
  //           </Button>
  //         </Link>
  //       </ButtonGroup>
  //     </div>
    )
  }
}
export default SideBar;

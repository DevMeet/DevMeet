import React, { Component } from 'react'
import { Button, ButtonToolbar, ButtonGroup, Container, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'

class SideBar extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      <Navbar class='mainNavBar' collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-left" fixed="top">
        <Navbar.Brand fref="#home">DevMeet</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link to="/profile">Profile</Nav.Link>
            <Nav.Link to="/events">Events</Nav.Link>
            <Nav.Link to="/trending">Trending</Nav.Link>
            <Nav.Link to="/upcoming">Upcoming</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      // <div className='mainNavBar'>
      //   <ButtonGroup vertical className='buttonContainer'>
      //     <Link to="/myevents">
      //       <Button
      //       >
      //         My Events
      //       </Button>
      //     </Link>
      //     <Link to="/trending">
      //       <Button
      //       >
      //         Trending
      //       </Button>
      //     </Link>
      //   </ButtonGroup>
      // </div>
    )
  }
}
export default SideBar;

import React, { Component } from 'react'
import SideBar from '../components/SideBar.jsx'
import MapDisplay from '../components/MapDisplay.jsx'
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class MainPage extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <Container fluid>
        <Row>
          <Col>
            <SideBar/>
          </Col>
          <Col>
          <MapDisplay/>
          </Col>
        </Row>
      </Container>
        // <div className="fullscreen">
        //     <div className="maincontainer">
        //         <div>
        //             <SideBar/>
        //         </div>
        //         <div className="googlemaps">
        //             
        //         </div>
        //     </div>
        // </div>

    )
  }
}

export default MainPage;

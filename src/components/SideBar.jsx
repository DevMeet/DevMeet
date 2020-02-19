import React, { Component } from 'react'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      <div className='mainNavBar'>
        <ButtonGroup vertical className='buttonContainer'>
          <Link to="/myevents">
            <Button
            >
              My Events
            </Button>
          </Link>
          <Link to="/trending">
            <Button
            >
              Trending
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    )
  }
}
export default SideBar;

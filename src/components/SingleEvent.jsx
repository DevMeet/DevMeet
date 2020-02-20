import React, { Component } from 'react';

class SingleEvent extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    console.log('this.props.event in singleEvent: ', this.props.event )
    return (
      <div className="upcomingevents">
      </div>
    )
  }
}

export default SingleEvent;
import React, { Component } from 'react';
const moment = require('moment');

class SingleEvent extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default SingleEvent;
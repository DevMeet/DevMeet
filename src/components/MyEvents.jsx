import React, { Component } from 'react';

class MyEvents extends Component {
    constructor(props) {
        super(props)
    };

    //Need data to populate this div! 
    //Probably going to use a DB query to get information
    render() {
        return (
            <div className="upcomingevents">
                Upcoming Events...
            </div>
        )
    }
}

export default MyEvents;
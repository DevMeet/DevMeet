import React, { Component } from 'react';

class UpcomingEvents extends Component {
    constructor(props) {
        super(props)
    };

    getEvents() {
        fetch('/getevents')
        .then((response) => {
            return response.json();
        })
    }
    //Need data to populate this div!
    render() {
        this.getEvents();
        return (
            <div className="upcomingevents">
                Upcoming Events...
            </div>
        )
    }
}

export default UpcomingEvents;
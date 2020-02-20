import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: document.cookie,
      events: null
    };
    // this.getEvents = this.getEvents.bind(this);
  }

  // getEvents() {
  //   fetch(`/events`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('data in fetch: ', data)
  //   })
  //   .catch(err => { console.log(err); })
  // }

  render() {

    return (
      <div>
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
        <form action="/events" method="GET">
          <input type="submit" value="Get Events" />
        </form>
      </div>
    )
  }
}

export default App;

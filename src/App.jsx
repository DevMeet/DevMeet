import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

//component imports
import MainPage from "./containers/MainPage.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   fetch('/events')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       events: data
  //     })
  //   })
  //   .catch(err => { console.log(err); })
  // }

  render() {
    // console.log('inside app.jsx:', this.state.events)
    // fetch('/events')
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     events: data
    //   })
    // })
    // .catch(err => { console.log(err); })
    // console.log(this.state.events.name)
    return (
      <HashRouter>
        <div className="fullscreen">
          <MainPage
            events={this.state.events}
          />
        </div>
      </HashRouter>
    )
  }
}

export default App;

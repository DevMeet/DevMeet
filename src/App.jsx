import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

//component imports
import MainPage from "./containers/MainPage.jsx"
import { ThemeProvider } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
      this.setState({
        events: data
      })
    })
    .catch(err => { console.log(err); })
  }

  render() {
    // console.log('this.state.events: ', this.state.events)
    // const eventsDeepCopy = JSON.parse(JSON.stringify(this.state.events));
    return (
      <HashRouter>
        <div className="fullscreen">
          <MainPage
            events={this.state.events}
            // name={this.state.name}
            // date={this.state.date}
            // description={this.state.description}
            // url={this.state.url}
            // longitude={this.state.longitude}
            // latitude={this.state.latitude}
          />
        </div>
      </HashRouter>
    )
  }
}

export default App;

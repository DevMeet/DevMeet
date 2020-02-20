import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';

//component imports
import MainPage from "./containers/MainPage.jsx"
import { ThemeProvider } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: '',
      email: ''
    };
    this.loginHandleClick = this.loginHandleClick.bind(this);
  }

  loginHandleClick() {
    this.setState({ loggedIn: true })
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

  componentDidUpdate() {
    console.log(this.state.events.name);
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
            loggedIn={this.state.loggedIn}
            loginHandleClick={this.loginHandleClick}
          />
        </div>
      </HashRouter>
    )
  }
}

export default App;

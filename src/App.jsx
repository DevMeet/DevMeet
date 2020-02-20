import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

//component imports
import MainPage from "./containers/MainPage.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div className="fullscreen">
          <MainPage/>
        </div>
      </HashRouter>
    )
  }
}

export default App;

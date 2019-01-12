import React, { Component } from "react";

import Home from "containers/home/home";
import Home2 from 'containers/home/home2'
import Home3 from 'containers/home/home3'

import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <Home2 />
        <Home3 />
      </div>
    );
  }
}

export default App;

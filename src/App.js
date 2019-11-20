import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import FilteredLeagues from "./components/FilteredTeams"
import Team from "./components/Team"

class App extends Component {

  render() {
    console.log('reload?', new Date());
    return (
      <div className="App">
       <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/choose-team" component={FilteredLeagues} />
        <Route exact path="/team" component={Team} />
        </Switch>
      console.log('hi')
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import FilteredLeagues from "./components/FilteredLeagues"




class App extends Component {

  render() {
    console.log('reload');
    return (
      <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/choose-team" component={FilteredLeagues} />
        </Switch>
      </div>
    );
  }
}

export default App;

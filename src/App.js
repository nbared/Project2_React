import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import FilteredLeagues from "./components/FilteredTeams"
import Team from "./components/Team"
import Player from "./components/Player"

class App extends Component {

  render() {
    console.log('meow?', new Date());
    return (
      <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/choose-team" component={FilteredLeagues} />
        <Route exact path="/team/:id" component={Team} />
        <Route exact path ="/player/:idPlayer" component={Player}/>
  
        </Switch>
      </div>
    );
  }
}

export default App;

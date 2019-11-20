import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import FilteredLeagues from "./FilteredTeams"

export default class Home extends Component {
    render() {
        return (
            <div>
                 {/* <h1>Fanbook</h1> */}
        <div className='introduction'>
        <h3>Choose Your Team,</h3>
        <h4>stay informed with the latest team data.</h4>
        <h3>Get invovled, </h3>
        <h4>connect with local supporter groups.</h4>
        <Link to='/choose-team'>Select Team</Link>
        </div>
            
            </div>
        )
    }
}

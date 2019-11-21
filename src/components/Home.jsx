import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import FilteredLeagues from "./FilteredTeams"
import './Home.css'

export default class Home extends Component {
    render() {
        console.log('home!!!??', new Date());

        return (
        <body className='homeBody' style={{backgroundImage:"url('./images/image.jpg')"}}>

        <div className='landingPage'>
        <h3>Choose Your Team,</h3>
        <h4>stay informed with the latest team data.</h4>
        <h3>Get invovled, </h3>
        <h4>connect with local supporter groups.</h4>
        <Link to='/choose-team' className='chooseLink'>Select Team</Link>
        </div>
            
        </body>
        )
    }
}

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
        <h4 className='home2'>stay informed with the latest team data.</h4>
        <h3>Stream Highlights, </h3>
        <h4 className='home2'>watch and share the latest goals.</h4>
        <Link to='/choose-team' className='chooseLink'>Select Team</Link>
        </div>
            
        </body>
        )
    }
}

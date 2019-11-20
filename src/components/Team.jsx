import React, { Component } from 'react'
import axios from "axios";
import './Team.css'
import {Link} from 'react-router-dom'

export default class Team extends Component {

    state= {
        theTeam: [],
        teamName: ""
    }     

componentDidMount(){
    const path = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.id}`
    axios.get(path).then(team => {
        this.setState({
          theTeam: team.data
        }, () => {
            this.getTeamData()
        }
        );
      });
}

getTeamData = () => {
        console.log(this.state.theTeam)

        let teamData = (this.state.theTeam.teams[0])
            this.setState({
                teamName: teamData.strTeam,
                teamLeague: teamData.strLeague,
                teamStadium: teamData.strStadium,
                teamStadiumLocation: teamData.strStadiumLocation,
                teamAltName: teamData.strAlternate,
                teamSocial: {
                    instagram: teamData.strInstagram,
                    facebook: teamData.strFacebook,
                    twitter: teamData.strTwitter,
                },
                teamWebsite: teamData.strWebsite,
                teamDescription: teamData.strDescriptionEN,
                teamBadge: teamData.strTeamBadge,
                teamShort: teamData.strTeamShort
            }, ()=> {
                console.log(this.state)
            }
            )
    
}

    render() {
        // this.getTeamData()
        return (
            <div>
                <h1 className='theTeamName'>{this.state.teamName} <span className='abv'>{this.state.teamShort}</span></h1>
             
                <img className='badge' src={this.state.teamBadge}></img>
                <div className='teamDetails'>
                    <div className='teamDescription'>
                        <h3>About club:</h3>
                        <p>{this.state.teamDescription}</p>
                    </div>
                    <div className='teamLocation'>
                    <h3>{this.state.teamStadium}</h3>
                    <h4>{this.state.teamStadiumLocation}</h4>
                    </div>
                    <h4>{this.state.teamAltName}</h4> 
                    <Link to={this.state.teamWebsite}>Team Website</Link>
                </div>
            </div>
        )
    }
}

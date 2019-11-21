import React, { Component } from 'react'
import axios from "axios";
import './Team.css'
import {Link} from 'react-router-dom'

export default class Team extends Component {

    state= {
        theTeam: [],
        teamName: "",
        players: [],
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
      const playerPath = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${this.props.match.params.id}`
    axios.get(playerPath).then(players => {
        this.setState({
          players: players.data
        }, 
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

getPlayerData = () => {
    console.log(this.state.players)
    if (this.state.players.player !== undefined){
        // this.setState({
        //     team:
        // })
    console.log(this.state.players.player)

    let copyPlayers = [...this.state.players.player]
    console.log(copyPlayers)
   
    let listOfPlayers = copyPlayers.map(eachPlayer =>{
        console.log(eachPlayer.strPlayer)
        return(
            <ul className='teamRoster'>

            <Link to={`/player/${eachPlayer.idPlayer}`} className='link' >
            <li className='eachPlayer'>
                {eachPlayer.strPlayer}
                <img classname='playerIcon' src={eachPlayer.strCutout}></img>
            </li>
            </Link>
            </ul>
        )
    })

    return listOfPlayers
    
    }
}

// showPlayers = () => {
//     if (this.state.players !== undefined){

//         return this.state.players.map((thePlayer, i) => {
//           return (
//               console.log(thePlayer)
//         //     <div>
//         //     <ul className='playerList'>
    
//         //     <Link to={`/team/${theTeam.idTeam}`} className='link' >
//         //       <li key={i} className="playerListItem">
//         //             <h1 className='playerName'>{thePlayer.strPlayer}</h1> 
//         //       </li> 
//         //         </Link>
//         //     </ul>
//         //   </div>
//           )
//         })}
// }



    render() {
        // this.getTeamData()
        // this.showPlayers()
        // if (this.state.players.player !== undefined) {
            // }
        // this.getPlayerData()
        
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
                    <ul className = 'roster'>
                    {this.getPlayerData()}
                    </ul>
                </div>
            </div>
        )
    }
}

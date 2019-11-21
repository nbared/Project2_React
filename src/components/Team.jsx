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
                teamInstagram: teamData.strInstagram,
                teamFacebook: teamData.strFacebook,
                teamTwitter: teamData.strTwitter,
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
           
            
            <Link to={`/player/${eachPlayer.idPlayer}`} className='link' >
            <div className='eachPlayer'>
                <h4 className='playerName'>{eachPlayer.strPlayer}</h4> 
                <img classname='playerIcon' src={eachPlayer.strCutout}></img>
            </div>
            </Link>
     
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
                <div className= "teamHeader">
                <img className="teamImg" src={this.state.teamBadge}></img>
                <h1>{this.state.teamName}</h1>
            </div>
               
                <div className='teamDetails'>
                    <div className='teamDescription'>
                        <h3>About club:</h3>
                        <p>Stadium: {this.state.teamStadium}</p>
                        <p>Location: {this.state.teamStadiumLocation}</p>
                        <p>{this.state.teamDescription}</p>
                    </div>
                    <p>{this.state.teamAltName}</p> 
                    <div className = 'roster'>
                    {this.getPlayerData()}
                    </div>
                    <div className="teamLinks">
                    <div><Link to={this.state.teamWebsite}> 
                    <img className='social' src='./images/web.png'></img> 
                    </Link></div>
                    <div><Link to={this.state.teamInstagram}>
                    <img className='social' src='./images/Instagram.png'></img>
                    </Link></div> 
                    <div><Link to={this.state.teamFacebook}> 
                    <img className='social' src='./images/Facebook.png'></img>
                    </Link></div>
                    <div><Link to={this.state.teamTwitter}> 
                    <img className='social' src='./images/Twitter.png'></img>
                    </Link></div>  
                    </div>
                </div>
            </div>
        )
    }
}

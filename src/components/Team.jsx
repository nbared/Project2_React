import React, { Component } from 'react'
import axios from "axios";
import './Team.css'
import {Link} from 'react-router-dom'
import IFramePage from './IFramePage'

export default class Team extends Component {

    state= {
        theTeam: [],
        teamName: "",
        players: [],
    }     

componentDidMount(){
    const path = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.id}`
    axios.get(path).then(team => {
        
        this.getLeagueTable(team.data.teams[0].idLeague)

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
      const videoPath = 'https://www.scorebat.com/video-api/v1/'
      axios.get(videoPath).then(videos =>{
          this.setState({
              allVideos: videos.data
          })
      })
      const eventPath = `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${this.props.match.params.id}`
      axios.get (eventPath).then(events => {
          this.setState({
              upcomingEvents: events.data
          })
      })
      
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
    // console.log(this.state.players)
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
                <img alt='' className='playerIcon' src={eachPlayer.strCutout}></img>
            </div>
            </Link>
     
        )
    })

    return listOfPlayers
    
    }
}


getTeamHighlights = () => {

    if (this.state.allVideos !== undefined && this.state.teamName !== undefined && this.state.teamAltName !== undefined){
           
        // console.log(this.state.teamVideos)
        let filteredVideos = this.state.allVideos.filter((eachvideo) => {
            return (eachvideo.side1.name.toLowerCase() == this.state.teamName.toLowerCase() ||
            eachvideo.side2.name.toLowerCase() == this.state.teamName.toLowerCase() 
            || eachvideo.side1.name.toLowerCase() == this.state.teamAltName.toLowerCase() 
            || eachvideo.side2.name.toLowerCase() == this.state.teamAltName.toLowerCase() 
            )
        }); 
        if (filteredVideos.length > 0){
            console.log(filteredVideos[0].embed)
            filteredVideos[0].embed.replace('height:590px','height:1590px')
            console.log(filteredVideos[0].embed)

            console.log(filteredVideos[0])
            return (        
                filteredVideos[0].embed
                )
            }
    } 
    };

    getUpcomingEvents = () => {
        if (this.state.upcomingEvents !== undefined){
            return this.state.upcomingEvents.events.map((eachGame) =>{
                console.log(eachGame.strEvent)
                console.log(this.state.upcomingEvents)
                return (
                    
                    <div className='eachGame'>
                        <h4 className='eventTitle'>{eachGame.strEvent}</h4>
                        <div className='gameDetails'>
                            <span className='eventLeague'>{eachGame.strLeague}</span>
                            <span className='eventDate'>{eachGame.dateEvent}</span>
                            <span className='eventTime'>{eachGame.strTime}</span>
                        </div>
                    </div>
                    
                )
            
        })
    }
}


getLeagueTable = (idLeague) => {
    //console.log('in leagure tbale', this.state.theTeam.teams)
    //if (this.state.theTeam.teams !== undefined){
        const tablePath = `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${idLeague}&s=1920`
        axios.get (tablePath).then(table => {
            console.log(table, 9090990909)
            this.setState({
                leagueTable: table.data
            })
        })
        console.log(this.state.leagueTable)
    //}
}

showLeagueTable = () => {
    if (this.state.leagueTable !== undefined){
        return this.state.leagueTable.table.map(eachTeam => {
            console.log(eachTeam)
            return (
                <tr className='tableRow'>
                    <td className='tableTeamName'><strong>{eachTeam.name}</strong></td>
                    <td className='tableElement'>{eachTeam.win}</td>
                    <td className='tableElement'>{eachTeam.draw}</td>
                    <td className='tableElement'>{eachTeam.loss}</td>
                    <td className='tableElement'>{eachTeam.goalsfor}</td>
                    <td className='tableElement'>{eachTeam.goalsagainst}</td>
                    <td className='tableElement'>{eachTeam.goalsdifference}</td>
                    <td className='tableElement'>{eachTeam.total}</td>
                </tr>
                
            )
        })
        console.log(this.state.leagueTable.table[0])
    }
}


    render() {        
        return (
            <div>
                <div className= "teamHeader">
                <h1 className='teamName'>{this.state.teamName}</h1>
                <img alt='' className="teamImg" src={this.state.teamBadge}></img>
            </div>
               
                <div className='teamDetails'>
                <div className='teamInfo'>
                    <div className='squad'>Team-sheet:</div>
                    <div className = 'roster'>           
                    {this.getPlayerData()}
                    </div>
                    <div className='teamDescription'>
                        <h3>About club:</h3>
                        <p>Stadium: {this.state.teamStadium}</p>
                        <p>Location: {this.state.teamStadiumLocation}</p>
                        <p>{this.state.teamDescription}</p>
                    </div>
                </div>
                    <div className='teamStuff'> 
                    <div className='iframe' dangerouslySetInnerHTML={{ __html: this.getTeamHighlights() }} />
                    <div className='schedule'>
                        {this.getUpcomingEvents()}
                    </div>
                    <div className='theTable'>
                        <div className='tableTitle'>League Standings</div>
                    <div className='leagueTable'>
                    <table>
                        <tr className='tableHead'>
                            <th>Team</th>
                            <th>Won</th>
                            <th>Tied</th>
                            <th>Lost</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                        {this.showLeagueTable()}
                        </table>
                    </div>
                   </div>
                    </div>
                    {/* <p>{this.state.teamAltName}</p>  */}
                </div>

                <div className="teamLinks">
                    <div><Link to={this.state.teamWebsite}> 
                    <img alt='' className='social' src='./images/web.png'></img> 
                    </Link></div>
                    <div><Link to={this.state.teamInstagram}>
                    <img  alt='' className='social' src='./images/Instagram.png'></img>
                    </Link></div> 
                    <div><Link to={this.state.teamFacebook}> 
                    <img  alt='' className='social' src='./images/Facebook.png'></img>
                    </Link></div>
                    <div><Link to={this.state.teamTwitter}> 
                    <img alt='' className='social' src='./images/Twitter.png'></img>
                    </Link></div>  
                    </div>
            </div>
        )
    }
}

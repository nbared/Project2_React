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
            console.log(filteredVideos[0])
            return (        
                filteredVideos[0].embed
                )
            }
    } 
    };



    render() {        
        
        
        // document.getElementsByClassName('_scorebatEmbeddedPlayer_').style.width = '16vw';
        // document.getElementsByClassName('_scorebatEmbeddedPlayer_').style.height = '500px';

        
        return (
            <div>
                <div className= "teamHeader">
                <h1 className='teamName'>{this.state.teamName}</h1>
                <img alt='' className="teamImg" src={this.state.teamBadge}></img>
            </div>
               
                <div className='teamDetails'>
                    <div className = 'roster'>
                    {this.getPlayerData()}
                    </div>
                    <div className='teamStuff'> 
                    <div className='teamDescription'>
                        <h3>About club:</h3>
                        <p>Stadium: {this.state.teamStadium}</p>
                        <p>Location: {this.state.teamStadiumLocation}</p>
                        <p>{this.state.teamDescription}</p>
                    </div>
                    <div className='iframe' dangerouslySetInnerHTML={{ __html: this.getTeamHighlights() }} />,
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

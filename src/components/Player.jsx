import React, { Component } from 'react'
import axios from 'axios'
import './Player.css'
import {Link} from 'react-router-dom'

export default class Player extends Component {

    state={
        player: [],
    }

componentDidMount(){
    console.log('mounted')
    const thisPlayerPath = `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${this.props.match.params.idPlayer}`
    axios.get(thisPlayerPath).then(thePlayer => {
        this.setState({
          player: thePlayer.data
        }, () => {
            this.getDetail()
        }
        );
      });
}


getDetail = () => {
    if (this.state.player.players !== undefined){
    console.log(this.state.player.players[0])

    let playerData = (this.state.player.players[0])
            this.setState({
                playerName: playerData.strPlayer,
                playerNationality: playerData.strNationality,
                playerDOB: playerData.dateBorn,
                playerBirthplace: playerData.strBirthLocation,
                playerPosition: playerData.strPosition,
                    facebook: playerData.strFacebook,
                    twitter: playerData.strTwitter,
                    instagram: playerData.strInstagram,
                playerWeight: playerData.strWeight,
                playerHeight: playerData.strHeight,
                playerDescription: playerData.strDescriptionEN,
                playerCutout: playerData.strCutout,
                playerRender: playerData.strRender,
            })
}
}

// /team/:id
    render() {
        
        console.log(this.state.player.players)
        console.log(this.state)
        return (
            <div>
             <nav className='navbar'>
             {this.state.player.players&&
               <Link to={`/team/${this.state.player.players[0].idTeam}`} className="navlink">Back to Team</Link>}   
            </nav>
            <div className= "header">
                <img alt='' className="playerImg" src={this.state.playerCutout}></img>
                <h1>{this.state.playerName}</h1>
            </div>
            <div className='details'>

            <ul className='playerStats'>
                <li><strong>Nationality:</strong>  {this.state.playerNationality}</li>
                <li><strong>Position:</strong>  {this.state.playerPosition}</li>
                <li><strong>Height:</strong>  {this.state.playerHeight}</li>
                <li><strong>Weight:</strong>  {this.state.playerWeight} kgs</li>
                <li><strong>Birthplace:</strong>  {this.state.playerBirthplace}</li>
                <li><strong>Birthdate:</strong>  {this.state.playerDOB}</li>
            </ul>
           
                <div className='about'>
                    <p>
                        <h3>About:</h3>
                        <span className='theDescription'>{this.state.playerDescription}</span>
                    </p>
                </div>
                <div className='playerRender'>
                    <img className='renderImg' alt='' src={this.state.playerRender}></img>
                </div>
           
            </div>
        
            <div className="footer">
                    <div><Link to={this.state.instagram}>
                    <img  alt=''className='social' src='./images/Instagram.png'></img>
                    </Link></div> 
                    <div><Link to={this.state.facebook}> 
                    <img  alt='' className='social' src='./images/Facebook.png'></img>
                    </Link></div>
                    <div><Link to={this.state.twitter}> 
                    <img  alt='' className='social' src='./images/Twitter.png'></img>
                    </Link></div>  
            </div>
            </div>
        )
    }
}

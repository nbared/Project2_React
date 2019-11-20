import React, { Component } from 'react'
import axios from "axios";


export default class SearchTeam extends Component {

    state = {
        search: '',
        theTeam: [],
      }
    
      searchForTeam = (e) => {
        e.preventDefault()
        const path = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.state.search}`;
        console.log(path);
        axios.get(path).then(team => {
          this.setState({
              theTeam: team.data
            });
          }
          )
          let eachTeam = this.state.theTeam.map((res)=>{
              console.log(res.data)
            }) 
            console.log(eachTeam)
            
      }
    
      setSearch = (e) => {
        this.setState({ 'search': e.target.value });
      }

      render() {
console.log(this.state.search)
console.log(this.state.theTeam)
        return (
          <div className="App">
          {/* <ul>
             {this.getSoccerTeams()}
          </ul> */}
          
    <form  onSubmit={this.searchForTeam}>
    <input type='text' placeholder='Search by team name' name='search' className='search' onChange={this.setSearch}></input>
    </form>
          </div>
        );
      }
    }
    
   

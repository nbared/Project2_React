import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import './FilteredTeams.css'

export default class FilteredLeagues extends Component {

  state={
    teams: [],
    englishPremierLeague:  null,
    germanBundesliga: null,
    italianSerieA: null,
    frenchLigue1: null,
    spanishLaLiga: null,
    americanMLS: null,   
    search: null,
    theTeam: [],
    flatTeams: []
  }
  

componentDidMount(){
  const epl = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English_Premier_League`;
      console.log(epl);
      axios.get(epl).then(eachTeam => {
        this.setState({
          englishPremierLeague: eachTeam.data.teams
        });
      });
  const gbl = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German_Bundesliga`;
      console.log(gbl);
      axios.get(gbl).then(eachTeam => {
        this.setState({
          germanBundesliga: eachTeam.data.teams
        });
      });
  const ita = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Italian_Serie_A`;
      console.log(ita);
      axios.get(ita).then(eachTeam => {
        this.setState({
          italianSerieA: eachTeam.data.teams
        });
      });
  const fl1 = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French_Ligue_1`;
      console.log(fl1);
      axios.get(fl1).then(eachTeam => {
        this.setState({
          frenchLigue1: eachTeam.data.teams
        });
      });
  const esp = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish_La_Liga`;
      console.log(esp);
      axios.get(esp).then(eachTeam => {
        this.setState({
          spanishLaLiga: eachTeam.data.teams
        });
      });
  const mls = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=American_Major_League_Soccer`;
      console.log(mls);
      axios.get(mls).then(eachTeam => {
        this.setState({
          americanMLS: eachTeam.data.teams
        });
      });

  

     
}

addTeams = ()=> {
  if (this.state.englishPremierLeague !== null && !this.state.teams.includes(this.state.englishPremierLeague)){
    this.state.teams.push(this.state.englishPremierLeague)
  }
  if (this.state.germanBundesliga !== null &&  !this.state.teams.includes(this.state.germanBundesliga)){
    this.state.teams.push(this.state.germanBundesliga)
  }
  if (this.state.italianSerieA !== null && !this.state.teams.includes(this.state.italianSerieA)){
    this.state.teams.push(this.state.italianSerieA)
  }
  if (this.state.frenchLigue1 !== null &&  !this.state.teams.includes(this.state.frenchLigue1)){
    this.state.teams.push(this.state.frenchLigue1)
  }
  if (this.state.americanMLS !== null &&  !this.state.teams.includes(this.state.americanMLS)){
    this.state.teams.push(this.state.americanMLS)
  }
  if (this.state.spanishLaLiga !== null &&  !this.state.teams.includes(this.state.spanishLaLiga)) {
    this.state.teams.push(this.state.spanishLaLiga)
  } else {
    return false
  }
//  console.log(this.state.teams)
}


searchForTeam = (e) => {
  e.preventDefault()
  let newTeamArray = this.state.teams.flat(Infinity)
  this.setState({ 
    'search': e.target.value,
    flatTeams: newTeamArray
});
  let filteredTeams = this.state.flatTeams.filter(eachTeam =>{
    // console.log(eachTeam)
    return eachTeam.strTeam.toLowerCase().includes(e.target.value.toLowerCase())
  })
    this.setState({
      viewableTeams: filteredTeams
    })
};

showTeams = () => {
  if (this.state.viewableTeams !== undefined){

    return this.state.viewableTeams.map((theTeam, i) => {
      return (
        <div>
       


            <Link to={`/team/${theTeam.idTeam}`} className='link' >
          <li key={i} className="teamListItem">
                <h1 className='teamNames'>{theTeam.strTeam.toUpperCase()}</h1> 
                <img className='teamBadge' alt='' src={theTeam.strTeamBadge} height='70px' width='70px'></img>
              <div className='teamLeague'>
                {theTeam.strLeague}
              </div>
          </li> 
            </Link>
     
      </div>
      
    );
  });
}
};

      


// setSearch = (e) => {
//   this.setState({ 'search': e.target.value });
// }


  render() {

    if (this.state.teams.length === 5){

      // console.log(this.state.teams)

      let newTeamArray = this.state.teams.flat(Infinity)
      let correctTeamArray = newTeamArray.concat(this.state.frenchLigue1)

      this.setState({
        viewableTeams: correctTeamArray
      })

    }

    this.addTeams()
    // console.log(this.state.americanMLS)
    //  console.log(this.state)
    
 
    return (
      <body className="choosePage">

     <h1 className='title'>Find your club</h1>  
   
    <input type='text' placeholder='  Search by team name' name='search' className='search' onChange={this.searchForTeam}></input>  
    <ul className='teamList'>

      {this.showTeams()}
      </ul>
    </body>
    );
  }
}

import React, { Component } from 'react'

export default class EachLeague extends Component {

    state = {
        allLeagues: [],
        unfilteredLeagues: [],
        filteredLeagues: []
      };
    
      componentDidMount() {
        const path = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        console.log(path);
        axios.get(path).then(eachLeague => {
          this.setState({
            allLeagues: eachLeague.data.leagues
          });
        });
      }
    
      getSoccerLeagues = () => {
        return this.state.allLeagues.map(eachLeague => {
          if (eachLeague.strSport.includes("Soccer")) {
            this.state.unfilteredLeagues.push(eachLeague.strLeague);
          }
        });
      };
    
      showLeagues = () => {
        for (let i = 0; i < this.state.unfilteredLeagues.length; i++) {
          return this.state.unfilteredLeagues.map((eachSoccerLeague, i) => {
            if (
              eachSoccerLeague.includes("English Premier League") ||
              eachSoccerLeague.includes("English League Championship") ||
              eachSoccerLeague.includes("Italian Serie A") ||
              eachSoccerLeague.includes("Spanish") ||
              eachSoccerLeague.includes("French Ligue 1") ||
              eachSoccerLeague.includes("Dutch") ||
              eachSoccerLeague.includes("Welsh") ||
              eachSoccerLeague.includes("Belgian") ||
              eachSoccerLeague.includes("Portuguese") ||
              eachSoccerLeague.includes("American") ||
              eachSoccerLeague.includes("Mexican") ||
              eachSoccerLeague.includes("Brazilian") ||
              eachSoccerLeague.includes("Russian") ||
              eachSoccerLeague.includes("Australian") ||
              eachSoccerLeague.includes("Argentinian") ||
              eachSoccerLeague.includes("German")
            ) {
              this.state.filteredLeagues.push(eachSoccerLeague);
              console.log(eachSoccerLeague);
              console.log(this.state.filteredLeagues);
              ;
    
              return <li key={i}>{eachSoccerLeague}</li>;
            }
          });
        }
      };
    
      render() {
        this.getSoccerLeagues();
        return (
          <div className="App">
    
            <ul>{this.showLeagues()}</ul>
          </div>
        );
      }
    }
    
   

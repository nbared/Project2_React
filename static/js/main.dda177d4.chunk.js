(this.webpackJsonpfan_book=this.webpackJsonpfan_book||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},40:function(e,t,a){},58:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(30),r=a.n(l),i=(a(38),a(7)),c=a(8),o=a(10),m=a(9),u=a(11),h=(a(39),a(40),a(13)),p=a.n(h),g=a(12),d=a(14),f=(a(58),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={teams:[],englishPremierLeague:null,germanBundesliga:null,italianSerieA:null,frenchLigue1:null,spanishLaLiga:null,americanMLS:null,search:null,theTeam:[],flatTeams:[]},a.addTeams=function(){if(null===a.state.englishPremierLeague||a.state.teams.includes(a.state.englishPremierLeague)||a.state.teams.push(a.state.englishPremierLeague),null===a.state.germanBundesliga||a.state.teams.includes(a.state.germanBundesliga)||a.state.teams.push(a.state.germanBundesliga),null===a.state.italianSerieA||a.state.teams.includes(a.state.italianSerieA)||a.state.teams.push(a.state.italianSerieA),null===a.state.frenchLigue1||a.state.teams.includes(a.state.frenchLigue1)||a.state.teams.push(a.state.frenchLigue1),null===a.state.americanMLS||a.state.teams.includes(a.state.americanMLS)||a.state.teams.push(a.state.americanMLS),null===a.state.spanishLaLiga||a.state.teams.includes(a.state.spanishLaLiga))return!1;a.state.teams.push(a.state.spanishLaLiga)},a.searchForTeam=function(e){e.preventDefault();var t=a.state.teams.flat(1/0);a.setState({search:e.target.value,flatTeams:t});var n=a.state.flatTeams.filter((function(t){return t.strTeam.toLowerCase().includes(e.target.value.toLowerCase())}));a.setState({viewableTeams:n})},a.showTeams=function(){if(void 0!==a.state.viewableTeams)return a.state.viewableTeams.map((function(e,t){return s.a.createElement("div",null,s.a.createElement("ul",{className:"teamList"},s.a.createElement(d.b,{className:"link",to:"/team"},s.a.createElement("li",{key:t,className:"teamListItem"},s.a.createElement("h1",{className:"teamName"},e.strTeam.toUpperCase()),s.a.createElement("img",{className:"teamBadge",src:e.strTeamBadge,height:"70px",width:"70px"}),s.a.createElement("div",{className:"teamLeague"},e.strLeague),s.a.createElement("div",{className:"teamLocation"},e.strStadiumLocation)))))}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English_Premier_League";console.log(t),p.a.get(t).then((function(t){e.setState({englishPremierLeague:t.data.teams})}));var a="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German_Bundesliga";console.log(a),p.a.get(a).then((function(t){e.setState({germanBundesliga:t.data.teams})}));var n="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Italian_Serie_A";console.log(n),p.a.get(n).then((function(t){e.setState({italianSerieA:t.data.teams})}));var s="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French_Ligue_1";console.log(s),p.a.get(s).then((function(t){e.setState({frenchLigue1:t.data.teams})}));var l="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish_La_Liga";console.log(l),p.a.get(l).then((function(t){e.setState({spanishLaLiga:t.data.teams})}));var r="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=American_Major_League_Soccer";console.log(r),p.a.get(r).then((function(t){e.setState({americanMLS:t.data.teams})}))}},{key:"render",value:function(){if(5===this.state.teams.length){var e=this.state.teams.flat(1/0).concat(this.state.frenchLigue1);this.setState({viewableTeams:e})}return this.addTeams(),s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Find your club"),s.a.createElement("input",{type:"text",placeholder:"Search by team name",name:"search",className:"search",onChange:this.searchForTeam}),s.a.createElement("div",{className:"teamList"},this.showTeams()))}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"introduction"},s.a.createElement("h3",null,"Choose Your Team,"),s.a.createElement("h4",null,"stay informed with the latest team data."),s.a.createElement("h3",null,"Get invovled, "),s.a.createElement("h4",null,"connect with local supporter groups."),s.a.createElement(d.b,{to:"/choose-team"},"Select Team")))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"meow")}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("reload"),s.a.createElement("div",{className:"App"},s.a.createElement(g.c,null,s.a.createElement(g.a,{exact:!0,path:"/",component:v}),s.a.createElement(g.a,{exact:!0,path:"/choose-team",component:f}),s.a.createElement(g.a,{exact:!0,path:"/team",component:L})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(d.a,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dda177d4.chunk.js.map
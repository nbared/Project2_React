(this.webpackJsonpfan_book=this.webpackJsonpfan_book||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){e.exports=a(82)},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(20),r=a.n(l),i=(a(53),a(10)),c=a(11),o=a(13),m=a(12),u=a(14),h=(a(54),a(7)),p=a.n(h),g=a(21),d=a(4),E=(a(72),function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={teams:[],englishPremierLeague:null,germanBundesliga:null,italianSerieA:null,frenchLigue1:null,spanishLaLiga:null,americanMLS:null,search:null,theTeam:[],flatTeams:[]},a.addTeams=function(){if(null===a.state.englishPremierLeague||a.state.teams.includes(a.state.englishPremierLeague)||a.state.teams.push(a.state.englishPremierLeague),null===a.state.germanBundesliga||a.state.teams.includes(a.state.germanBundesliga)||a.state.teams.push(a.state.germanBundesliga),null===a.state.italianSerieA||a.state.teams.includes(a.state.italianSerieA)||a.state.teams.push(a.state.italianSerieA),null===a.state.frenchLigue1||a.state.teams.includes(a.state.frenchLigue1)||a.state.teams.push(a.state.frenchLigue1),null===a.state.americanMLS||a.state.teams.includes(a.state.americanMLS)||a.state.teams.push(a.state.americanMLS),null===a.state.spanishLaLiga||a.state.teams.includes(a.state.spanishLaLiga))return!1;a.state.teams.push(a.state.spanishLaLiga)},a.searchForTeam=function(e){e.preventDefault();var t=a.state.teams.flat(1/0);a.setState({search:e.target.value,flatTeams:t});var s=a.state.flatTeams.filter((function(t){return t.strTeam.toLowerCase().includes(e.target.value.toLowerCase())}));a.setState({viewableTeams:s})},a.showTeams=function(){if(void 0!==a.state.viewableTeams)return a.state.viewableTeams.map((function(e,t){return n.a.createElement("div",null,n.a.createElement(d.b,{to:"/team/".concat(e.idTeam),className:"link"},n.a.createElement("li",{key:t,className:"teamListItem"},n.a.createElement("h1",{className:"teamNames"},e.strTeam.toUpperCase()),n.a.createElement("img",{className:"teamBadge",alt:"",src:e.strTeamBadge,height:"70px",width:"70px"}),n.a.createElement("div",{className:"teamLeague"},e.strLeague))))}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English_Premier_League";console.log(t),p.a.get(t).then((function(t){e.setState({englishPremierLeague:t.data.teams})}));var a="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German_Bundesliga";console.log(a),p.a.get(a).then((function(t){e.setState({germanBundesliga:t.data.teams})}));var s="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Italian_Serie_A";console.log(s),p.a.get(s).then((function(t){e.setState({italianSerieA:t.data.teams})}));var n="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French_Ligue_1";console.log(n),p.a.get(n).then((function(t){e.setState({frenchLigue1:t.data.teams})}));var l="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish_La_Liga";console.log(l),p.a.get(l).then((function(t){e.setState({spanishLaLiga:t.data.teams})}));var r="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=American_Major_League_Soccer";console.log(r),p.a.get(r).then((function(t){e.setState({americanMLS:t.data.teams})}))}},{key:"render",value:function(){if(5===this.state.teams.length){var e=this.state.teams.flat(1/0).concat(this.state.frenchLigue1);this.setState({viewableTeams:e})}return this.addTeams(),n.a.createElement("body",{className:"choosePage"},n.a.createElement("h1",{className:"title"},"Find your club"),n.a.createElement("input",{type:"text",placeholder:"  Search by team name",name:"search",className:"search",onChange:this.searchForTeam}),n.a.createElement("ul",{className:"teamList"},this.showTeams()))}}]),t}(s.Component)),y=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("home!!!??",new Date),n.a.createElement("body",{className:"homeBody",style:{backgroundImage:"url('./images/image.jpg')"}},n.a.createElement("div",{className:"landingPage"},n.a.createElement("h3",null,"Choose Your Team,"),n.a.createElement("h4",null,"stay informed with the latest team data."),n.a.createElement("h3",null,"Get invovled, "),n.a.createElement("h4",null,"connect with local supporter groups."),n.a.createElement(d.b,{to:"/choose-team",className:"chooseLink"},"Select Team")))}}]),t}(s.Component)),v=a(47),f=(a(42),a(28)),b=a(6);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}s.Component;var N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={theTeam:[],teamName:"",players:[]},a.getTeamData=function(){console.log(a.state.theTeam);var e=a.state.theTeam.teams[0];a.setState({teamName:e.strTeam,teamLeague:e.strLeague,teamStadium:e.strStadium,teamStadiumLocation:e.strStadiumLocation,teamAltName:e.strAlternate,teamInstagram:e.strInstagram,teamFacebook:e.strFacebook,teamTwitter:e.strTwitter,teamWebsite:e.strWebsite,teamDescription:e.strDescriptionEN,teamBadge:e.strTeamBadge,teamShort:e.strTeamShort},(function(){console.log(a.state)}))},a.getPlayerData=function(){if(void 0!==a.state.players.player){console.log(a.state.players.player);var e=Object(v.a)(a.state.players.player);return console.log(e),e.map((function(e){return console.log(e.strPlayer),n.a.createElement(d.b,{to:"/player/".concat(e.idPlayer),className:"link"},n.a.createElement("div",{className:"eachPlayer"},n.a.createElement("h4",{className:"playerName"},e.strPlayer),n.a.createElement("img",{alt:"",className:"playerIcon",src:e.strCutout})))}))}},a.getTeamHighlights=function(){if(void 0!==a.state.allVideos&&void 0!==a.state.teamName&&void 0!==a.state.teamAltName){var e=a.state.allVideos.filter((function(e){return e.side1.name.toLowerCase()==a.state.teamName.toLowerCase()||e.side2.name.toLowerCase()==a.state.teamName.toLowerCase()||e.side1.name.toLowerCase()==a.state.teamAltName.toLowerCase()||e.side2.name.toLowerCase()==a.state.teamAltName.toLowerCase()}));if(e.length>0)return console.log(e[0].embed),console.log(e[0]),e[0].embed}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=".concat(this.props.match.params.id);p.a.get(t).then((function(t){e.setState({theTeam:t.data},(function(){e.getTeamData()}))}));var a="https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=".concat(this.props.match.params.id);p.a.get(a).then((function(t){e.setState({players:t.data})}));p.a.get("https://www.scorebat.com/video-api/v1/").then((function(t){e.setState({allVideos:t.data})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"teamHeader"},n.a.createElement("h1",{className:"teamName"},this.state.teamName),n.a.createElement("img",{alt:"",className:"teamImg",src:this.state.teamBadge})),n.a.createElement("div",{className:"teamDetails"},n.a.createElement("div",{className:"roster"},this.getPlayerData()),n.a.createElement("div",{className:"teamStuff"},n.a.createElement("div",{className:"teamDescription"},n.a.createElement("h3",null,"About club:"),n.a.createElement("p",null,"Stadium: ",this.state.teamStadium),n.a.createElement("p",null,"Location: ",this.state.teamStadiumLocation),n.a.createElement("p",null,this.state.teamDescription)),n.a.createElement("div",{className:"iframe",dangerouslySetInnerHTML:{__html:this.getTeamHighlights()}}),",")),n.a.createElement("div",{className:"teamLinks"},n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.teamWebsite},n.a.createElement("img",{alt:"",className:"social",src:"./images/web.png"}))),n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.teamInstagram},n.a.createElement("img",{alt:"",className:"social",src:"./images/Instagram.png"}))),n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.teamFacebook},n.a.createElement("img",{alt:"",className:"social",src:"./images/Facebook.png"}))),n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.teamTwitter},n.a.createElement("img",{alt:"",className:"social",src:"./images/Twitter.png"})))))}}]),t}(s.Component),L=(a(81),function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={player:[]},a.getDetail=function(){if(void 0!==a.state.player.players){console.log(a.state.player.players[0]);var e=a.state.player.players[0];a.setState({playerName:e.strPlayer,playerNationality:e.strNationality,playerDOB:e.dateBorn,playerBirthplace:e.strBirthLocation,playerPosition:e.strPosition,facebook:e.strFacebook,twitter:e.strTwitter,instagram:e.strInstagram,playerWeight:e.strWeight,playerHeight:e.strHeight,playerDescription:e.strDescriptionEN,playerCutout:e.strCutout,playerRender:e.strRender})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");var t="https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=".concat(this.props.match.params.idPlayer);p.a.get(t).then((function(t){e.setState({player:t.data},(function(){e.getDetail()}))}))}},{key:"render",value:function(){return console.log(this.state),n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("img",{alt:"",className:"playerImg",src:this.state.playerCutout}),n.a.createElement("h1",null,this.state.playerName)),n.a.createElement("div",{className:"details"},n.a.createElement("ul",{className:"playerStats"},n.a.createElement("li",null,n.a.createElement("strong",null,"Nationality:"),"  ",this.state.playerNationality),n.a.createElement("li",null,n.a.createElement("strong",null,"Position:"),"  ",this.state.playerPosition),n.a.createElement("li",null,n.a.createElement("strong",null,"Height:"),"  ",this.state.playerHeight),n.a.createElement("li",null,n.a.createElement("strong",null,"Weight:"),"  ",this.state.playerWeight," kgs"),n.a.createElement("li",null,n.a.createElement("strong",null,"Birthplace:"),"  ",this.state.playerBirthplace),n.a.createElement("li",null,n.a.createElement("strong",null,"Birthdate:"),"  ",this.state.playerDOB)),n.a.createElement("div",{className:"about"},n.a.createElement("p",null,n.a.createElement("h3",null,"About:"),n.a.createElement("span",null,this.state.playerDescription))),n.a.createElement("div",{className:"playerRender"},n.a.createElement("img",{alt:"",src:this.state.strRender}))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.instagram},n.a.createElement("img",{alt:"",className:"social",src:"./images/Instagram.png"}))),n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.facebook},n.a.createElement("img",{alt:"",className:"social",src:"./images/Facebook.png"}))),n.a.createElement("div",null,n.a.createElement(d.b,{to:this.state.twitter},n.a.createElement("img",{alt:"",className:"social",src:"./images/Twitter.png"})))))}}]),t}(s.Component)),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("meow?",new Date),n.a.createElement("div",{className:"App"},n.a.createElement(g.c,null,n.a.createElement(g.a,{exact:!0,path:"/",component:y}),n.a.createElement(g.a,{exact:!0,path:"/choose-team",component:E}),n.a.createElement(g.a,{exact:!0,path:"/team/:id",component:N}),n.a.createElement(g.a,{exact:!0,path:"/player/:idPlayer",component:L})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(d.a,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.6b172fec.chunk.js.map
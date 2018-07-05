import React from 'react';
import './styles/MatchView.css';

import Goalscorers from './Goalscorers';
import Lineup from './Lineup';
import Subs from './Subs';
import Cards from './Cards';

import filter from 'lodash/filter';

const MatchTeamPane = ({team, events, stats}) => {
  console.log(team.country, events);
  const goalsArr = filter(events, function(event){
    return event.type_of_event === "goal" || event.type_of_event === "goal-penalty"
    || event.type_of_event === "goal-own"
  })

  console.log(team.country, "GoalsArr", goalsArr);

  const subsArr = filter(events, function(event){
    return event.type_of_event === "substitution-in" || event.type_of_event === "substitution-out"
  })

  const cardsArr = filter(events, function(event){
    return event.type_of_event === "yellow-card" || event.type_of_event === "red-card"
  })

  return(
    <div className="matchTeamPane">
      <div className="teamNameHeader">
        <h1>{team.country}</h1>
      </div>
      <Goalscorers goalEvents={goalsArr}/>
      <Lineup startingEleven={stats.starting_eleven} subEvents={subsArr}/>
      <Cards cardEvents={cardsArr}/>
    </div>
  )
}

export default MatchTeamPane;

import React from 'react';

const GoalScorers = (props) => {
  if (!props.goalEvents) return null;

  const goalList = props.goalEvents.map(event => {
    if (event.type_of_event === "goal-penalty"){
      return (<p key={event.id}>{event.player}({event.time} pen)  </p>)
    } else if (event.type_of_event === "goal-own"){
      return (<p key={event.id}>{event.player}({event.time} OG.) </p>)
    }
    return(<p key={event.id}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⚽</span> {event.player}({event.time})</p>)
  })

  return(
    <div className="goalList">
      {goalList}
    </div>
  )
}

export default GoalScorers;

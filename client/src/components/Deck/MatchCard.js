import React from "react";
import "./matchCard.css";

export const MatchCard = props => (
  <div
    name={props.name}
    role="img"
    className='matched'
    style={{ left: `${props.position}` }}
  >
  	<img src = {props.image} className = "cardImg"/>
  </div>
);

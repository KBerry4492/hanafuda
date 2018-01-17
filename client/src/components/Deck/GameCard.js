import React from "react";
import "./gameCard.css";

export const GameCard = props => (
  <div
    name={props.name}
    role="img"
    onClick={() => props.handleClick(props)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`Game_card${props.glow ? " glow" : ""}`}
  />
);

import React from "react";
import "./Card.css";

const Card = props => {
	console.log(props.id)

	return (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""}`}
  />
);
}
export default Card;
import React from "react";
import imgSrc from "../../images/cardback4.png";
import "./cardBack.css";

export const CardBack = props => (
  <div
    name={props.name}
    type={props.type}
    month={props.month}
    role="img"
    style={{ backgroundImage: `url("${imgSrc}")` }}
    className="card_back">
  </div>
);

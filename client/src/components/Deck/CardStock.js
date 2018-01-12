import React from "react";
import "./stock_card.css";

export const CardStock = props => (
  <div
    name={props.name}
    role="img"
    style={{ backgroundImage: `url("${props.image}")` }}
    className="small-card">
    <div className="label">{props.name}</div>
  </div>
);

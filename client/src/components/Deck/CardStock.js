import React from "react";
import "./Card.css";

export const CardStock = props => (
  <div
    name={props.name}
    role="img"
    aria-label="click item"
    style={{ backgroundImage: `url("${props.image}")` }}
    className="click-item"
  />
);

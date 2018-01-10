import React from "react";
import "./Header.css";

export const Header = (props, children) => (
  <header className="header">
    <h1>{props.title}</h1>
    <h2>{props.text}</h2>

    {props.score ? <p> Score: {props.score} </p> : ""}  {props.topScore ? <p> Top Score: {props.topScore} </p> : ""}
    
  </header>
);

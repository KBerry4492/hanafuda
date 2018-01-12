import React from "react";
import logo from '../../images/cardback4.png';
import "./Header.css";

export const Header = (props, children) => (
  <header className="header">
    <h1>{props.title}</h1>
    <img src={logo} className="logo" alt="logo" />
    <h4>{props.text}</h4>

    {props.score ? <span> Score: {props.score}  | </span> : ""}{props.topScore ? <span> Top Score: {props.topScore} </span> : ""}
    
    
  </header>
);

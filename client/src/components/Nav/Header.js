import React from "react";
import logo from '../../images/cardback4.png';
import "./Header.css";

export const Header = (props, children) => (
  <header className="header">
    <h1>{props.title}</h1>
    <img src={logo} className="logo" alt="logo" />
    <h3>{props.text}</h3>

    {props.score ? <p> Score: {props.score} </p> : ""}  {props.topScore ? <p> Top Score: {props.topScore} </p> : ""}
    
    
  </header>
);

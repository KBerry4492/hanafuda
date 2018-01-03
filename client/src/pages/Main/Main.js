import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
// import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, TextArea, FormBtn } from '../../components/Form';
import logo from '../../logo.svg';
import '../../App.css';


class Main extends Component {
  state = {
    user: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.queryTerm) {
      this.getArticles();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hanafuda!</h1>
        </header>
        <p className="App-intro">
            Fun card games for the whole family, with japanese style cards.
        </p>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
// import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, TextArea, FormBtn } from '../../components/Form';
import logo from '../../images/FullMoonBright.jpg';
import '../../App.css';

class Games extends Component {
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
            Pick from War, Memory, and Koi Koi!
        </p>
        	<Link className="nav-link" to="/war">
            War
          </Link>
          <Link className="nav-link" to="/koikoi">
            KoiKoi
          </Link>
          <Link className="nav-link" to="/memory">
            Memory
          </Link>
      </div>
    );
  }
}

export default Games;
import React, { Component } from 'react';
// import Jumbotron from '../../components/Jumbotron';
import {Header, Footer} from "../../components/Nav";
// import { Link } from 'react-router-dom';
import { Container } from '../../components/Grid';
import { Instructions } from '../../components/Instructions';
// import { List, ListItem } from '../../components/List';
// import { Input, TextArea, FormBtn } from '../../components/Form';
import '../../App.css';

// const io = require('socket.io-client')
// const socket = io.connect("localhost:3001")

class Main extends Component {
  state = {
    user: '',
    headTitle: 'Hanafuda card games!',
    headTxt: 'Pick from War, Memory, and Koi Koi!'
  };

  // componentDidMount() {
  //   socket.on('connect', data => {
  //     socket.emit('message', 'Hello server, from me the client')
  //   })

  //   socket.on('gameMove', data => {
  //     console.log(data);
  //     // Update state/game based on returned data
  //   })
  // }

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
          <Header title={this.state.headTitle} text={this.state.headTxt} />

         <Container >
        
          <p className="App-intro">
              Fun card games for the whole family, with japanese style cards.
          </p>

          <Instructions/>
         
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Main;

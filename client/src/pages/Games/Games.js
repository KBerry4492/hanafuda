import React, { Component } from 'react';
// import Jumbotron from '../../components/Jumbotron';
import { Link } from 'react-router-dom';
import {Header, Footer} from "../../components/Nav";
import { Container } from '../../components/Grid';
import { SlidingPanel } from "../../components/SlidingPanel";
// import { List, ListItem } from '../../components/List';
// import { Input, TextArea, FormBtn } from '../../components/Form';
import logo from '../../images/FullMoonBright.jpg';
import '../../App.css';

class Games extends Component {
  state = {
    user: '',
    headTitle: 'Hanafuda games!',
    headTxt: 'Pick from War, Memory, and Koi Koi!'
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
// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Hanafuda!</h1>
//         </header>

  render() {
    return (
      <div className="App">


        <Header title={this.state.headTitle} text={this.state.headTxt} />
          <Container>
	          <img src={logo} className="App-logo left" alt="logo" />

			  <div className ="link-space">
		          <Link className="nav-link link-btns" to="/war">
		            War
		          </Link>
		          <Link className="nav-link link-btns" to="/memory">
		            Memory
		          </Link>
		          <Link className="nav-link link-btns" to="/koikoi">
		            KoiKoi
	          </Link>

	          </div>

	          <img src={logo} className="App-logo right" alt="logo" />
          </Container>
         <Footer/>

        <SlidingPanel />

      </div>
    );
  }
}

export default Games;
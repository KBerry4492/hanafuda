import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {LoginForm} from "../../components/Form";


export class Login extends Component {
  state = {
    username: '',
    password: '',
    headTitle: 'Hanafuda games!',
    headTxt: 'Login',
  };

  render() {
    return (
      <div className="App">

        <Header title={this.state.headTitle} text={this.state.headTxt} />
          <Container>
			  <div>
			  <LoginForm />	
			  </div>
          </Container>

      </div>
    );
  }
}
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import API from '../../utils/API';


export class Register extends Component {
  constructor(props) {
    super()
  }
  state = {
    username: '',
    password: '',
    headTitle: 'Hanafuda games!',
    headTxt: 'Register',
    successfulRegister: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.register({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res);
        this.setState({
          username: '',
          password: '',
          successfulRegister: true
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.successfulRegister) { 
      return (<Redirect to='/login' />)
    }
    return (
      <div className="App">
        <Header title={this.state.headTitle} text={this.state.headTxt} />
        <Container>
          <div className="form-group"> 
          <form action="/register" method="post">
            <div>
                <label>Username:</label>
                <input 
                placeholder="Username" 
                name="username"
                onChange={this.handleInputChange}
                value={this.state.username}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
                />
            </div>
            <div>
              <button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleFormSubmit}>
              Sign Up
            </button>
            </div>
        </form>
      </div>
    </Container>
  </div>
    );
  }
}
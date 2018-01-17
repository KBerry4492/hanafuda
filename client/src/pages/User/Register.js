import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {RegistrationForm} from "../../components/Form";



export class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    headTitle: 'Hanafuda games!',
    headTxt: 'Register Here',
    messages: []
  };
}
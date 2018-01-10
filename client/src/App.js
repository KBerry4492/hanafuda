import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'
import Main from './pages/Main';
import Games from './pages/Games/Games';
import War from './pages/Games/War';
import Memory from './pages/Games/Memory';
import KoiKoi from './pages/Games/KoiKoi';
import {All_cards, Yaku} from './pages/All_Cards';
import NoMatch from './pages/NoMatch';
import {Nav} from './components/Nav';
import './App.css';

const App = () => (
  <Router>
    <Container >
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/war" component={War} />
        <Route exact path="/memory" component={Memory} />
        <Route exact path="/koikoi" component={KoiKoi} />
        <Route exact path="/all_cards" component={All_cards} />
        <Route exact path="/yaku" component={Yaku} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;
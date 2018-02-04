import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'
import Main from './pages/Main';
import {KoiKoi, Memory, Games, War} from './pages/Games';
import {All_cards, Yaku} from './pages/All_Cards';
import NoMatch from './pages/NoMatch';
import {Nav, Footer} from './components/Nav';
import {Login, Profile, Register} from './pages/User';
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
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
      <Footer/>
    </Container>
  </Router>
);

export default App;
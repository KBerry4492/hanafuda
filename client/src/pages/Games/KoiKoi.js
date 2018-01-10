import React, { Component } from "react";
import {Header, Footer} from "../../components/Nav";
import {Container} from "../../components/Grid";
import Card from "../../components/Deck/Card.js";
import data from "../../components/Deck/cards.json";

class Memory extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    headTitle:"KoiKoi",
    headTxt: "Player One starts"
  };

  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>

          <p> Under Construction! </p>

        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Memory;
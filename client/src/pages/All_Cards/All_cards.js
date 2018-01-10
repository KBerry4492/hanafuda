import React, { Component } from "react";
import {Header, Footer} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {Card} from "../../components/Deck/";
import data from "../../components/Deck/cards";

export class All_cards extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    headTxt: "",
    headTitle:"All card faces"
  };

  handleItemClick = id => {
    console.log(id);
  };

  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt}/>
        <Container>
          {this.state.data.map(item => (
            <Card
              key={item.id}
              id={item.id}
              name={item.cardsName}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.handleItemClick}
              image={item.imgSrc}
            />
          ))}
        </Container>
        <Footer/>
      </div>
    );
  }
}


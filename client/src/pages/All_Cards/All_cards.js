import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {CardStock} from "../../components/Deck";
import data from "../../components/Deck/cards.json";

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
            <CardStock
              key={item.id}
              id={item.id}
              name={item.cardName}
              image={item.imgSrc}
            />
          ))}
        </Container>
      </div>
    );
  }
}


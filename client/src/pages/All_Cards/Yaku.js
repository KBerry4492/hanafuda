import React, { Component } from "react";
import {Header, Footer} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {CardStock} from "../../components/Deck/CardStock";
import data from "../../components/Deck/cards.json";

export class Yaku extends Component {
  state = {
    data,
    headTxt: "All the various winning card combos",
    headTitle:"Point Values"
  };


  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt}/>
        <Container>
          {this.state.data.filter(item => {
          	return item.type.includes("plain")
          })
          .map(items => 

          	(
            <CardStock
              key={items.id}
              id={items.id}
              name={items.cardName}
              image={items.imgSrc}
            />
          ))}
        </Container>
        <Footer/>
      </div>
    );
  }
}
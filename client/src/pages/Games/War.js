import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {Card} from "../../components/Deck";
import data from "../../components/Deck/cards.json";

export class War extends Component {
  state = {
    data,
    deck: 0,
    score: 0,
    topScore: 0,
    playerDeck: 0,
    oppDeck: 0,
    headTitle:"War",
    headTxt: "Player One starts",
    dealer:true
  };

  componentDidMount() {
    this.setState({ deck: this.shuffleData(this.state.data) }, () => this.dealCards());
  };

  shuffleData = deck => {
    let i = deck.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
      i--;
    }
    return deck; 

  };//end shuffle.

  dealCards = data => {

    let newDeck = [...this.state.deck];
    let pDeck = this.state.playerDeck;
    let oDeck = this.state.oppDeck;

    for (var j = 0; j < 24; j++) {

        pDeck.push(newDeck.splice(0, 1)[0]);
        oDeck.push(newDeck.splice(0, 1)[0]);
    }

    this.setState({
      deck: newDeck,
      playerHand: pDeck,
      oppHand: oDeck
    }, () => {
      if (this.state.dealer === false) { this.oppTurn() }
    })
  };//End dealing

  oppTurn = () => {
    console.log("Opp Turn")
  };

  playerTurn = () => {
    console.log("Player Turn")
  };

  handleClick = data =>{
    console.log(data);
    console.log(" was clicked. ");
  }

  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>

          <p> Under Construction! </p>

        </Container>
      </div>
    );
  }
}

/* const cardArray = [];

componentDidMount() {
    this.setState({ data: this.shuffleData(data) });    
  };

// shuffle the cards

shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

// split deck in half

dealData = data => {
    let i = data.length
}
*/
// assign half to each side

// assign dealer and opponent

// when dealer clicks their deck start draw

// Draw Loop

// 	send player one top card from their deck to field

// 	send player one top card from their deck to field

// 	check card one against card two

// 		if one > two match to player one
// 			warover

// 		if two > one match to player two
// 			warover

// 		else WAR and repeat draw
// War 
// 	push field to match array 

// 	when warover assign match to winner

// when decks empty check match1 and match2 against each other

// assign winner to higher match.length

// Quit / restart

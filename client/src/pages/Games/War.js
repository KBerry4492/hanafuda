import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {Card} from "../../components/Deck";
import data from "../../components/Deck/cards.json";

export class War extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    headTitle:"War",
    headTxt: "Player One starts"
  };

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



// shuffle the cards

// split deck in half

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

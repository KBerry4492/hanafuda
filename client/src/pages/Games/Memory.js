import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container} from "../../components/Grid";
import {Card} from "../../components/Deck";
import data from "../../components/Deck/cards.json";

export class Memory extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    headTxt: "Click a card to gain points",
    headTitle:"Memory"
  };

  componentDidMount() {
    this.setState({ data: this.newCardArray(data) });    
  };

  newCardArray = data => {
    const dataArray = data;
    const months = ['jan', 'feb', 'march', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
    let bigArray = [];
    let smallArray = [];

    for (let i = 0; i < 12; i++) {
      
      for (let j = 0; j < dataArray.length; j++) {

        smallArray = dataArray.filter(item => {
          return item.month === months[i]
        });
      }//for each month push the cards associated with the month into an array

      bigArray.push(smallArray);
    }//then push those arrary into a superarry

  // console.log(bigArray);

  let newCA = this.cardRandom(bigArray);
  console.log(newCA);

  let cards = this.shuffleData(newCA);

  return cards;

  };

  cardRandom = bigArray => {

    let ranCards = [];

    for (var i = 0; i < bigArray.length; i++) {
      let cardPicker = Math.floor(Math.random() * 4);

      ranCards.push(bigArray[i][cardPicker]);

    }//pick a random card from each month.

    // console.log(ranCards);
    return ranCards;

  };

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

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

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });    
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };



  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>
          {this.state.data.map(item => (
            <Card
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.handleItemClick}
              image={item.imgSrc}
            />
          ))}
        </Container>
      </div>
    );
  }
}

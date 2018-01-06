import React, { Component } from "react";
// import Nav from "../../components/Nav";
// import Header from "../Header";
import {Container} from "../../components/Grid";
import Card from "../../components/Deck/Card.js";
// import Footer from "../Footer";
import data from "../../components/Deck/cards.json";

class Memory extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  };

  newCardArray = data => {
    const dataArray = data;
    let bigArray = [];
    let smallArray = [];
    const months = ['jan', 'feb', 'march', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

    for (let i = 0; i < 12; i++) {
      
      
      
      for (let j = 0; j < dataArray.length; j++) {

        smallArray = dataArray.filter(item => {
          return item.month === months[i]
        })

      }

      bigArray.push(smallArray);


      // let cardPicker = Math.round(Math.random() * 4);

    }
  console.log(bigArray);
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
    this.newCardArray(this.state.data);
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

export default Memory;
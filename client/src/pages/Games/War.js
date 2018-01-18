import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container, Row, Col, Playspace} from "../../components/Grid";
import {CardStock, CardBack, GameCard, MatchCard} from "../../components/Deck";
import data from "../../components/Deck/cards.json";
import imgSrc from "../../images/cardback5.png";

export class War extends Component {
  state = {
    data,
    war: [],
    deck: 0,
    score: 0,
    topScore: 0,
    playerDeck: [],
    oppDeck: [],
    pField: [],
    oField: [],
    pMatch: [],
    oMatch: [],
    headTitle:"War",
    headTxt: "Click Deck to begin.",
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

  dealCards = () => {

    let oldDeck = [...this.state.deck];
    let pDeck = this.state.playerDeck;
    let oDeck = this.state.oppDeck;

    for (var j = 0; j < 24; j++) {
      pDeck.push(oldDeck.splice(0, 1)[0]);
    }

    for (var j = 0; j < 24; j++) {
      oDeck.push(oldDeck.splice(0, 1)[0]);
    }

    this.setState({
      deck: oldDeck,
      playerHand: pDeck,
      oppHand: oDeck
    }, () => {
      if (this.state.dealer === false) { this.oppTurn() }
    })
  };//End dealing

  resetData = data => {
    this.setState({
      score: 0,
      playerDeck: [],
      oppDeck: [],
      headTitle:"War",
      headTxt: "Click Deck to begin.",
      dealer:true
    }, () => { console.log("reset")
      this.dealCards() 
    });
  };

  checkMatch = (pCard, oCard) => {

    const topCardP = pCard;
    const topCardO = oCard;

    let warWinnings = this.state.war;
    let pMatch = this.state.pMatch;
    let oMatch = this.state.oMatch;

    warWinnings.push(topCardO);
    warWinnings.push(topCardP);

    if (topCardP.value > topCardO.value) {
      
      for (var i = 0; i < warWinnings.length; i++) {
        pMatch.push(warWinnings[i]);
      }

      this.setState({
        pMatch: pMatch
      }, () => {
          this.setState({
            headTxt: "Click Deck to begin.",
            pField: [],
            oField: [],
            war: []
          })
        });      
    }

    else if (topCardP.value < topCardO.value) {

      for (var i = 0; i < warWinnings.length; i++) {
        oMatch.push(warWinnings[i]);
      }

      this.setState({
        oMatch: oMatch
      }, () => {
          this.setState({
            headTxt: "Click Deck to begin.",
            pField: [],
            oField: [],
            war: []
          })
        });
    }

    else if (topCardP.value === topCardO.value) {
      console.log("WAR");
      this.setState({
        headTxt: " WAR! ",
        war: warWinnings
      }, () => {
        console.log(this.state.war)
        if (this.state.playerDeck.length > 0) {
          this.newRound();
        }
      });
    }
        
  };

  newRound = () => {

    let pDeck = this.state.playerDeck;
    let oDeck = this.state.oppDeck;
    let pField = this.state.pField;
    let oField = this.state.oField;
    let pMatch = this.state.pMatch;
    let oMatch = this.state.oMatch;



    let topCardP = pDeck.slice(0, 1)[0];
    let topCardO = oDeck.slice(0, 1)[0];

    console.log(topCardP.value);
    console.log(topCardO.value);

    let pNewDeck = pDeck.slice(1);
    let oNewDeck = oDeck.slice(1);

    pField.push(topCardP);
    oField.push(topCardO);

    this.setState({
      playerDeck: pNewDeck,
      oppDeck: oNewDeck,
      pField: pField,
      oField: oField,
    }, () => {
      setTimeout( () => {this.checkMatch(topCardP, topCardO)}, 1000)  
    });
  };

  handleClick = data =>{
    console.log(data);
    console.log(" was clicked. ");


    if (data.location === "pDeck") {
      if (this.state.playerDeck.length > 0) {
        this.newRound();
      }
    }

  };

  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>
          <p> 
          Under Construction! 
          <a onClick={() => this.setState({score:0, dealer: true},() => {this.resetData()})} className="resetBtn">Reset</a>
          </p>

        <Playspace>

          <Row>{/* Opponent */}
            <div className="monthly"> <h4> Opponent Matches </h4> </div>
              {this.state.oMatch.map(item => (
                <MatchCard
                  key={item.id}
                  id={item.id}
                  name={item.cardName}
                  type={item.type}
                  month={item.month}
                  image={item.imgSrc}
                />
              ))}
          </Row>

          <Row>{/* playing field */} 
            
            <Col size='2'>{/* Deck */}
            <div className="monthly">
              Opponent Deck

              <Row>
                <CardBack/>
              </Row>

              <Row>Points: {this.state.score} </Row>
            </div>
            </Col>

            <Col size='4'>{/* O Field */} 
                <Row>
                  {this.state.oField.map(item => (
                    <GameCard
                      key={item.id}
                      id={item.id}
                      name={item.cardName}
                      image={item.imgSrc}
                      month={item.month}
                      type={item.type}
                      glow={false}
                      handleClick={this.handleClick}
                      location="field"
                    />
                  ))}
                </Row>
            </Col>

            <Col size='4'>{/* P Field */} 
                <Row>
                  {this.state.pField.map(item => (
                    <GameCard
                      key={item.id}
                      id={item.id}
                      name={item.cardName}
                      image={item.imgSrc}
                      month={item.month}
                      type={item.type}
                      glow={false}
                      handleClick={this.handleClick}
                      location="field"
                    />
                  ))}
                </Row>
            </Col>

            <Col size='2'>{/* Deck */}
            <div className="monthly">
              Player Deck

              <Row>
                <GameCard
                      image={imgSrc}
                      handleClick={this.handleClick}
                      location="pDeck"
                    />
              </Row>

              <Row>Points: {this.state.score} </Row>
            </div>
            </Col>

          </Row>{/* Field */}

          <Row>{/* Player */}
            <div className="monthly"> <h4> Player Matches </h4> </div>
              {this.state.pMatch.map(item => (
                <MatchCard
                  key={item.id}
                  id={item.id}
                  name={item.cardName}
                  type={item.type}
                  month={item.month}
                  image={item.imgSrc}
                />
              ))}
          </Row>

        </Playspace>
        </Container>
      </div>
    );
  }
}

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

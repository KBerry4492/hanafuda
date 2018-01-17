import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container, Row, Col, Playspace} from "../../components/Grid";
import {CardStock, CardBack, GameCard, MatchCard} from "../../components/Deck";
import {BGM} from "../../components/Audio";
import data from "../../components/Deck/cards";

export class KoiKoi extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    headTitle:"KoiKoi",
    headTxt: "Player One starts",
    deck: data,
    field: [],
    playerHand: [],
    playerMatch: [],
    oppHand: [],
    oppMatch: [],
    monthCard:0,
    turn: true,
    roundPointsP: 0,
    roundPointsO: 0,
    bgm:true,
    dealer: true
  };

  componentDidMount() {
    this.setState({ deck: this.shuffleData(data) }, () => this.dealCards());    
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

  };//end shuffle.

  newCardArray = data => {
    const dataArray = data;
    const months = ['jan', 'feb', 'march', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
    let bigArray = [];
    let smallArray = [];

    for (let i = 0; i < 12; i++) {
      
      for (let j = 0; j < dataArray.length; j++) {
        smallArray = dataArray.filter(item => {
          return item.month === months[i]
        })
      }//for each month push the cards associated with the month into an array

      bigArray.push(smallArray);
    }//then push those arrary into a superarry

    for (var a = 0; a < bigArray.length; a++) {
      if(bigArray[a].length >= 3){
        console.log("redeal");
        console.log(bigArray[a]);
        this.shuffleData(this.state.data);
      }
    }

  };//if more than three of a kind on board, redeal

  dealCards = data => {

    let deck = this.state.deck;
    let pHand = this.state.playerHand;
    let board = this.state.field;
    let oHand = this.state.oppHand;

    for (var j = 0; j < 2; j++) {

      for (var i = 0; i < 4; i++) {
        pHand.push(deck.splice(0, 1)[0]);
      }
      for (var k = 0; k < 4; k++) {
        board.push(deck.splice(0, 1)[0]);
      }
      for (var l = 0; l < 4; l++) {
        oHand.push(deck.splice(0, 1)[0]);
      }

    }

    this.newCardArray(board);

    const ranId = (Math.floor(Math.random() * deck.length));

    this.setState({
      monthCard: deck[ranId],
      deck: deck,
      playerHand: pHand,
      field: board,
      oppHand: oHand
    })
  };//End dealing

  resetData = data => {
    this.setState({
      field: [],
      playerHand: [],
      oppHand: [],
      monthCard:0,
      turn: true,
      roundPointsP: 0,
      roundPointsO: 0
    }, () => {
      this.setState({ deck: this.shuffleData(data) }, () => this.dealCards()); 
    });
  };

  roundOver = () => {

    const pScore = this.state.roundPointsP;
    const oScore = this.state.roundPointsO;

    if (oScore === 0 && pScore === 0){
      if (this.state.dealer === true) {
        pScore = 6;
      }
      else if (this.state.dealer === false) {
        oScore = 6;
      }
    }    

    const totalScore = (pScore - oScore);

    console.log(pScore);
    console.log(oScore);
    console.log(totalScore);

    this.setState({
      headTxt:"Round Over, Refresh to Play Again.",
      score: (this.state.score + totalScore)
    }, () => {
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore:this.state.score
        })
      }
      else if (this.state.score > 0) {
        this.resetData();
      }
      else if (this.state.score <= 0) {
        this.setState({
          headTxt:"Game Over, Refresh to Play Again."
        })
      }
    });
    console.log("Round Over, Refresh to Play Again.")
  };//end of round

  checkPoints = (turn) => {
    let Matches = 0;

    if (turn === 'player') {
      Matches = this.state.playerMatch;
    }
    else if (turn === 'opponent') {
      Matches = this.state.oppMatch;
    }
    else{console.log('Error at checkPoints')}
    
    const Plains = Matches.filter(item => {
        return item.type.includes("plains")
      });
    const Ribbons = Matches.filter(item => {
        return item.type.includes("ribbon")
      });
    const Animals = Matches.filter(item => {
        return item.type.includes("animal")
      });
    const Poems = Matches.filter(item => {
        return item.type.includes("poem")
      });
    const Blues = Matches.filter(item => {
        return item.type.includes("blue")
      });
    const InoShikaCho = Matches.filter(item => {
        return item.type.includes("ino") || item.type.includes("shika")|| item.type.includes("cho")
      });
    const Brights = Matches.filter(item => {
        return (item.type.includes("bright" ) && (item.type.includes("rain") === false))
      });
    const Rain = Matches.filter(item => {
        return item.type.includes("rain")
      });

    let newPoints = 0;

    if (Plains.length >= 10) {
      newPoints += (Plains.length - 9);
    }
    if (Ribbons.length >= 5) {
      newPoints += (Ribbons.length - 4);
    }
    if (Animals.length >= 5) {
      newPoints += (Animals.length - 4);
    }
    if (Poems.length === 3) {
      newPoints += 5;
    }
    if (Blues.length === 3) {
      newPoints += 5;
    }
    if (InoShikaCho.length === 3) {
      newPoints += 5;
    }
    if (Brights.length === 3 && Rain.length === 0) { 
      newPoints += (6);
    }
    if (Brights.length === 4 && Rain.length === 0) { 
      newPoints += (10);
    }
    if (Brights.length === 3 && Rain.length === 1) { 
      newPoints += (8);
    }
    if (Brights.length === 4 && Rain.length === 1) { 
      newPoints += (15);
    }

    if (turn === 'player') {
      this.setState({
        roundPointsP: newPoints
      }, () => this.oppTurn());
    }
    else if (turn === 'opponent') {
      this.setState({
        roundPointsO: newPoints
      }, () => {
            console.log("turnCycleOver");
            if (this.state.playerHand.length === 0) {
              setTimeout(this.roundOver(), 2000);
            }
          });
    }
    else{console.log('Error')}
   
  };

  turnOver = (turn) =>{
    if (turn === 'player') {
      this.checkPoints('player');
      console.log("player turn over");
    }
    else if (turn === 'opponent') {
      this.checkPoints('opponent');
      console.log("turnCycleOver");
    }
  };//end of turn

  autoDeck = (turn) => {

    let deck = this.state.deck;
    let field = this.state.field;
    let Matches = [];
    let topCard = deck.slice(0, 1)[0]

    let hasMatches = false;

    const toMatch = (field.filter(item => {
      return item.month.includes(topCard.month)
    }))

    console.log("deck start");
    console.log(deck);

    if (turn === 'player'){
      Matches = this.state.playerMatch;
    }
    else if(turn === 'opponent'){
      Matches = this.state.oppMatch;
    }
    else{ console.log("Error at autoDeck") }

    if (toMatch.length >= 1) { hasMatches = true; }   

    if (hasMatches){//if there is a match, slice it out of the field array and push it into the match array along with the top card

      let fieldMatch = field.filter( data => {
            return data.month === topCard.month;
          }).slice(0, 1)[0]

      Matches.push(fieldMatch)

      let newField = field.filter( data => {
            return data.id !== fieldMatch.id;
          })

      Matches.push(topCard);

      let newDeck = deck.slice(1);
      console.log('newDeck');
      console.log(newDeck);

      this.setState({deck: newDeck});

      if (turn === 'player') //if turn is true it is the player else the opponent
        { 
          this.setState({
            field: newField,
            playerMatch: Matches
          }, () => this.turnOver('player'))
        }

      else if (turn === 'opponent')
        {
          this.setState({
            field: newField,
            oppMatch: Matches
          }, () => this.turnOver('opponent'))
        }
      else{console.log("Error at autoDeck2")}
    }

    else{
      field.push(topCard)  // if there are no matches, push to field
    
      let newDeck = deck.slice(1) //remove top card from deck

      if (turn === 'player') //if turn is true it is the player else the opponent
        { 
          this.setState({
            field: field,
            deck: newDeck
          }, () => this.turnOver('player'))
        }

      else if (turn === 'opponent')
        {
          this.setState({
            field: field,
            deck: newDeck
          }, () => this.turnOver('opponent'))
        }
      else{console.log("Error at autoDeck3")}
    }
  };//the deck turn

  pickRandom = hand => {

    let ranCN = (Math.floor(Math.random() * hand.length));
    return ranCN;
  };//random number generator

  oppTurn = () => {

    console.log("oppTurn")

    let oHasMatches = false;
    let oMatches = this.state.oppMatch;
    let oHand = this.state.oppHand;
    let Field = this.state.field;
    let canMatch = [];

    for (var i = 0; i < oHand.length; i++) {

      for (var j = 0; j < Field.length; j++) {

        if (Field[j].month === oHand[i].month){
          canMatch.push(oHand[i]);
        }
      }
    }

    console.log("canMatch");
    console.log(canMatch);

    if (canMatch.length >= 1) { oHasMatches = true; }
    // const toMatch = (Field.filter(item => {
    //   return item.month.includes(card.month)
    // }))

    // if (toMatch.length >= 1) { hasMatches = true; }

    if(oHasMatches){
      
      const card = canMatch[this.pickRandom(canMatch)];

      const fieldMatch = Field.filter( data => {
        return data.month === card.month;
      }).slice(0, 1)[0]

      oMatches.push(fieldMatch);
      console.log("card");
      console.log(card);
      console.log("fieldMatch");
      console.log(fieldMatch);

      console.log("oMatches");
      console.log(oMatches);

      oMatches.push(
        oHand.filter( data => {
            return data.id === card.id;
          }).slice(0, 1)[0]
      )

      console.log("oMatches");
      console.log(oMatches);

      let newHand = oHand.filter( data => {
            return data.id !== card.id;
          })

      let newField = Field.filter( data => {
            return data.id !== fieldMatch.id;
          })
      
      console.log("leaving opponent");
      
      this.setState({
        field: newField,
        oppHand: newHand,
        oppMatch: oMatches
      }, () => this.autoDeck('opponent'));
    }

    else{//discard a card no matches
      console.log("discard Opponent")

      const card = oHand[this.pickRandom(oHand)];
      console.log('card');
      console.log(card);

      const discard = oHand.filter( data => {
        return data.id === card.id;
      })[0]

      console.log('discard');
      console.log(discard);

      Field.push(discard);

      let newHand = oHand.filter( data => {
        return data.id !== discard.id;
      })

      console.log("leaving opponent");

      this.setState({
        oppHand: newHand,
        field: Field
      }, () => this.autoDeck('opponent'));
      
    }
  }; //end opp turn

  playerTurn = (cardClicked, fieldCard) => {

    let hasMatches = false;
    let Field = this.state.field;
    let pHand = this.state.playerHand;
    let pMatches = this.state.playerMatch;

    const card = cardClicked;
    const card2 = fieldCard;

    const toMatch = (Field.filter(item => {
      return item.month.includes(card.month)
    }))

    if (toMatch.length >= 1) { hasMatches = true; }

    if(hasMatches){

      if (toMatch.length === 1) {

        pMatches.push(
          Field.filter( data => {
              return data.month === card.month;
            }).slice(0, 1)[0]
        )

        pMatches.push(
          pHand.filter( data => {
              return data.id === card.id;
            }).slice(0, 1)[0]
        )

        let newHand = pHand.filter( data => {
              return data.id !== card.id;
            })

        let fieldMatch = Field.filter( data => {
            return data.month === card.month;
          }).slice(0, 1)[0]
        
        let newField = Field.filter( data => {
            return data.id !== fieldMatch.id;
          })

        console.log("pMatches");
        console.log(pMatches);
        console.log("Field");
        console.log(newField);

        this.setState({
          field: newField,
          playerHand: newHand,
          playerMatch: pMatches
        }, () => this.autoDeck('player'));
      }

      else {//more than one match on the field
        
        if(card.location === "pHand"){
          this.setState({playerCard: card});
          if (card2.location === "field") {
            if (card.month === card2.month) {

              pMatches.push(
                Field.filter( data => {
                    return data.id === card2.id;
                  }).slice(0, 1)[0]
              )

              pMatches.push(
                pHand.filter( data => {
                    return data.id === card.id;
                  }).slice(0, 1)[0]
              )

              let newHand = pHand.filter( data => {
                    return data.id !== card.id;
                  })

              let fieldMatch = Field.filter( data => {
                  return data.id === card2.id;
                }).slice(0, 1)[0]
              
              let newField = Field.filter( data => {
                  return data.id !== fieldMatch.id;
                })

              this.setState({
                field: newField,
                playerHand: newHand,
                playerMatch: pMatches
              }, () => this.autoDeck('player'));

            }
          }
        }

        else{console.log("Error")}

      }//more than one match on the field
    }

    else{//discard a card no matches

      const discard = pHand.filter( data => {
        return data.id === card.id;
      })[0]

      console.log("discard");
      console.log(discard);

      Field.push(discard);

      let newHand = pHand.filter( data => {
        return data.id !== card.id;
      })

      this.setState({
        playerHand: newHand,
        field: Field
      }, () => this.autoDeck('player'))
    }
    //end of player picked card
  };

  handleItemClick = card => {
    console.log("handleClick")

    const turn = this.state.turn;

    if (turn === true) {
      
      if (card.location === "pHand") {
        this.playerTurn(card, card);
      }


      else if (card.location === "field" && this.state.playerCard !== undefined) {
        this.playerTurn(this.state.playerCard, card);
        this.setState({
          playerCard: undefined
        })
      }

    }//if player turn work

    else{} //if not don't

  }; //end handleClick 

  render() {let iter = 0;
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>
          <Playspace>
          <BGM playSound={this.state.bgm}/>
          <Row>{/* Opponent */} 
            <Col size='4'>{/* Hand */}
              {this.state.oppHand.map(item => (
                <CardBack
                  key={item.id}
                  id={item.id}
                  name={item.cardName}
                  type={item.type}
                  month={item.month}
                />
              ))}
            </Col>

            <Col size='8'>{/* Matches */}
              <Row>
                <Col size='3'>
                    {this.state.oppMatch.filter(item => {
                      return item.type.includes("plain")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                      />
                    ))}
                  </Col>

                  <Col size='3'>
                    {this.state.oppMatch.filter(item => {
                      return item.type.includes("ribbon")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                      />
                    ))}
                  </Col>
                  
                  <Col size='3'>
                    {this.state.oppMatch.filter(item => {
                      return item.type.includes("animal")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                      />
                    ))}
                  </Col>
                  
                  <Col size='3'>
                    {this.state.oppMatch.filter(item => {
                      return item.type.includes("bright")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                      />
                    ))}
                  </Col>
                </Row>
            </Col>

          </Row> {/* Opponent */} 

          <br/>

          <Row>{/* Field */} 
            
            <Col size='2'>

             <CardBack/>{/* Deck */}

             <a href="/koikoi" className="resetBtn">Reset</a>


            </Col>

            <Col size='8'>{/* Field */} 
                <Row>
                  {this.state.field.map(item => (
                    <GameCard
                      key={item.id}
                      id={item.id}
                      name={item.cardName}
                      image={item.imgSrc}
                      month={item.month}
                      type={item.type}
                      glow={false}
                      handleClick={this.handleItemClick}
                      location="field"
                    />
                  ))}
                </Row>
            </Col>

            <Col size='2'>
            <div className="monthly">
              <Row>
                Month Card
                  <CardStock
                    id={this.state.monthCard.id}
                    name={this.state.monthCard.cardName}
                    image={this.state.monthCard.imgSrc}
                  /> 
              </Row>
              <Row>Points: {this.state.score} </Row>
            </div>
            </Col>

          </Row>{/* Field */}

          <br/>

          <Row>{/* Player */}
            <Col size='4'>{/* Hand */}
              {this.state.playerHand.map(item => (
                <GameCard
                  key={item.id}
                  id={item.id}
                  name={item.cardName}
                  month={item.month}
                  image={item.imgSrc}
                  type={item.type}
                  glow={!this.state.score && this.state.topScore}
                  handleClick={this.handleItemClick}
                  location="pHand"
                />
              ))}
            </Col>

            <Col size='8'>
                <Row>{/* Matches */}
                  <Col size='3'>
                    {this.state.playerMatch.filter(item => {
                      return item.type.includes("plain")
                    })
                    .map(items => (
                                           
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                        handleClick={this.handleItemClick}
                        location="pMatches"
                        poistion={iter+10}
                      />
                    ))}
                  </Col>
 
                  <Col size='3'>
                    {this.state.playerMatch.filter(item => {
                      return item.type.includes("ribbon")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                        handleClick={this.handleItemClick}
                        location="pMatches"
                      />
                    ))}
                  </Col>
                  
                  <Col size='3'>
                    {this.state.playerMatch.filter(item => {
                      return item.type.includes("animal")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                        handleClick={this.handleItemClick}
                        location="pMatches"
                      />
                    ))}
                  </Col>
                  
                  <Col size='3'>
                    {this.state.playerMatch.filter(item => {
                      return item.type.includes("bright")
                    })
                    .map(items => (
                      <MatchCard
                        key={items.id}
                        id={items.id}
                        name={items.cardName}
                        image={items.imgSrc}
                        handleClick={this.handleItemClick}
                        location="pMatches"
                      />
                    ))}
                  </Col>

                </Row>
            </Col>
          
          </Row>{/* Player */}

          </Playspace>
        </Container>
      </div>
    );
  }
}

import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container, Row, Col, Playspace} from "../../components/Grid";
import {CardStock, CardBack, GameCard} from "../../components/Deck";
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
    dealer: true
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(data) });    
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

    this.dealCards();    
    return data; 

  };//end shuffle.

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

    this.setState({
      monthCard: deck[0],
      deck: deck,
      playerHand: pHand,
      field: board,
      oppHand: oHand
    })

  };//End dealing

  autoDeck = data => {

    let deck = this.state.deck;
    let Matches = [];
    let field = data;
    let topCard = deck.slice(0, 1)[0]
    const turn = this.state.turn;

    let hasMatches = false;

    const toMatch = (this.state.field.filter(item => {
      return item.month.includes(topCard.month)
    }))

    if (toMatch.length >= 1) { hasMatches = true; }

    if (turn === true){
      Matches = this.state.playerMatch;
    }
    else{
      Matches = this.state.oppMatch;
    }

    if (hasMatches){
      Matches.push(
        field.filter( data => {
            return data.month === topCard.month;
          }).slice(0, 1)[0]
      )

      Matches.push(topCard);

      turn
        ? this.setState({playerMatch: Matches})
        : this.setState({oppMatch: Matches});
    }

    else{field.push(topCard)}
    

    let newDeck = deck.slice(1)

    this.setState({
      field: field,
      deck: newDeck
    });
    


  };

  handleItemClick = card => {

    // let selected = card;
    // let fieldMatch = 0;
    let hasMatches = false;
    let pMatches = this.state.playerMatch;
    let pHand = this.state.playerHand;
    let Field = this.state.field;

    if (card.location === "pHand") {     

      const toMatch = (this.state.field.filter(item => {
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

          let newField = Field.filter( data => {
                return data.month !== card.month;
              })

          Field = newField;

          this.setState({
            field: newField,
            playerHand: newHand,
            playerMatch: pMatches
          });

          this.autoDeck(Field);
          // this.setState({turn: false});

        }

        else {
          for (var i = 0; i < toMatch.length; i++) {
            console.log(toMatch[i])
          }

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
        });

        this.autoDeck(Field);

      }

    }///end of player picked card

    else if (card.location === "field") {}
    else if (card.location === "pMatches") {}

    
  }; //end handleClick 

  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>
          <Playspace>

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
                      <GameCard
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
                      <GameCard
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
                      <GameCard
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
                      <GameCard
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
                      <GameCard
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
                      return item.type.includes("ribbon")
                    })
                    .map(items => (
                      <GameCard
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
                      <GameCard
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
                      <GameCard
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

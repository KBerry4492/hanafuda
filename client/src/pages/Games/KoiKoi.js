import React, { Component } from "react";
import {Header, Footer} from "../../components/Nav";
import {Container, Row, Col} from "../../components/Grid";
import {Card} from "../../components/Deck";
import data from "../../components/Deck/cards";

class Memory extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    headTitle:"KoiKoi",
    headTxt: "Player One starts",
    dealer: "player"
  };

  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt} score={this.state.score} topScore={this.state.topScore}/>
        <Container>


          <Row>
            Opponent

            <Col size='5'>
              Opponent Hand
            </Col>

            <Col size='5'>
              Opponent Matches
                <Row>
                <Col size='3'>Plains</Col>
                <Col size='3'>Ribbons</Col>
                <Col size='3'>Animals</Col>
                <Col size='3'>Brights</Col>
                </Row>
            </Col>

          </Row>

          <Row> 
            Field

            <Col size='2'>
              Deck
            </Col>

            <Col size='6'>
              Face Ups
                <Row>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                </Row>
                <Row>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                <Col size='1'>card</Col>
                </Row>
            </Col>

            <Col size='2'>
              <Row>Month </Row>
              <Row>Points</Row>
            </Col>

          </Row>

          <Row>
            Player

            <Col size='sm'>
              Player Hand
            </Col>

            <Col size='sm'>
              Player Matches
                <Row>
                <Col size='3'>Plains</Col>
                <Col size='3'>Ribbons</Col>
                <Col size='3'>Animals</Col>
                <Col size='3'>Brights</Col>
                </Row>
            </Col>
          
          </Row>

        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Memory;
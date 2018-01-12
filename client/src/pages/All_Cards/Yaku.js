import React, { Component } from "react";
import {Header} from "../../components/Nav";
import {Container, Row} from "../../components/Grid";
import {CardStock} from "../../components/Deck/CardStock";
import data from "../../components/Deck/cards.json";
import './Yaku.css';

export class Yaku extends Component {
  state = {
    data,
    headTxt: "All the winning card combinations and point values for KoiKoi",
    headTitle:"Yaku | Winning combos"
  };


  render() {
    return (
      <div>
        <Header title={this.state.headTitle} text={this.state.headTxt}/>
        <Container>

        	<Row>
	    	<div className = "card-holder"> 
	        	<h3> 1+1) Plains </h3> Ten plains are worth 1 point, and plus one point for every ribbon thereafter.
	        </div>

	          {this.state.data.filter(item => {
	          	return item.type.includes("plain")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <br/>

	        <Row>
	        <div className = "card-holder"> 
	        	<h3> 1+1) Ribbons & Animals </h3> Five of each card are worth one point, and plus one point for every card thereafter.
	        </div>
	          {this.state.data.filter(item => {
	          	return item.type.includes("ribbon")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <br/>

	        <Row>
	          {this.state.data.filter(item => {
	          	return item.type.includes("animal")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <br/>

	        <Row>
	        <div className = "card-holder"> 
	        	<h3> 5) Three card Yaku </h3> Three poems or blue ribbons, and the Boar, Deer, and Butterfly (aka Ino-Shika-Cho) are each worth five points.
	        </div>
	          {this.state.data.filter(item => {
	          	return item.type.includes("poem")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <br/>

	        <Row>
	          {this.state.data.filter(item => {
	          	return item.type.includes("blue")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <br/>

	        <Row>
	          {this.state.data.filter(item => {
	          	return item.type.includes("ino") || item.type.includes("shika")|| item.type.includes("cho")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <br/>

	        <Row>
	        <div className = "card-holder"> 
	        	<h3> Brights </h3> There are four "dry" Brights and Rain-man (Nov 4) 
	        		<br/><br/>
	        		Three 'dry' Brights are worth six points, and four are worth ten.  Three Brights and Rain-man are eight points, and all five are fifteen.
	        </div>
	          {this.state.data.filter(item => {
	          	return item.type.includes("bright")
	          })
	          .map(items => (
	            <CardStock
	              key={items.id}
	              id={items.id}
	              name={items.cardName}
	              image={items.imgSrc}
	            />
	          ))}
	        </Row>

	        <div className = "card-holder"> 
	        	<h3> Others </h3> If no-one gets any Yaku, then the dealer gets 6 points.  If a player gets all four cards of the current month, they get four points.
	        </div>

        </Container>
      </div>
    );
  }
}
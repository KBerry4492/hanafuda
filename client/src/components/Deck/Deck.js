import React from "react";
import cards from "./cards";

import jan1 from "../../images/jan1.png"
import jan2 from "../../images/jan2.png"
import jan3 from "../../images/jan3.png"
import jan4 from "../../images/jan4.png"
import feb1 from "../../images/feb1.png"
import feb2 from "../../images/feb2.png"
import cardback from "../../images/cardback1.png"


const images = [
	jan1, jan2, jan3, jan4, feb1, feb2
]

// console.log(images)

const Deck = props => {

	// console.log(props.image)

	let imgSrc = "";

	images.forEach(function(item){
		if (item.indexOf(props.image) !== -1) {
			imgSrc = item;
			}
		}
	)

  return (
    <div  className="card" dataid={props.dataid} onClick={props.handleImageShuffle}>
      <div className="img-container">
        <img clicked={props.clicked} alt={props.name} src={imgSrc} />
      </div>
	</div>
  );
};

export default Deck;
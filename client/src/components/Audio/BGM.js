import React from "react";
import background from '../../utils/sanctuary.mp3';

export const BGM = props => ( 	
  	<audio id="backgorund_music" src={background} type="audio/mpeg" autoPlay={props.playSound} loop="true" volume=".1" />
);

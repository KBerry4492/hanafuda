import React from "react";
import fanfare from '../../utils/26_Fanfare.mp3';

export const Audio = props => ( 	
  	<audio id="victory" src={fanfare} type="audio/mpeg" autoPlay={props.playSound}/>
);

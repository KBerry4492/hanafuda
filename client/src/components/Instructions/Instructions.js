import React from "react";

export const Instructions = props => (
  <div className="introSheet">

    <h3> Instructions: </h3>
    <br/>

    <h4> For War: </h4>
    <br/>
    <p> 
      <ul>
        <li>Click on your deck to begin</li>
        <li>Plains are worth one point</li>
        <li>Animals and Ribbons are worth two points</li>
        <li>And Brights are worth three points</li>
      </ul>
    </p>
    <br/>

    <h4> For Memory: </h4>
    <br/>
    <p> 
      <ul>
        <li>Click on a card to begin</li>
        <li>There is one card for each month</li>
        <li>For every unique card you pick, you get one point</li>
        <li>Clicking on the same card twice means you lose!</li>
        <li>Refresh the page for new cards</li>
      </ul>
    </p>
    <br/>

    <h4> For KoiKoi: </h4>
    <br/>
    <p> 
      <ul>
        <li>Match cards in your hand to cards on the field</li>
        <li>Cards can only be matched within the same month</li>
        <li>If you can't make any matches, you must discard a card to the field</li>
        <li>Once you make enough matches to get a combo,
         you can choose to end the round, 
         or KoiKoi, doubling your points and keep playing the hand.</li>
        <li>If you do KoiKoi, and the Opponent gets a combo, you lose any points you would get!</li>
      </ul>
    </p>

  </div>
);

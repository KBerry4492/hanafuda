import React from "react";

export const Instructions = props => (
  <div className="introSheet">

    <h3> Instructions: </h3>
    <br/>

    <h4> For War: </h4>
    <br/>
    <ul>
      <li>Click on your deck to begin</li>
      <li>Plains are worth one point</li>
      <li>Animals and Ribbons are worth two points</li>
      <li>And Brights are worth three points</li>
    </ul>
    <br/>

    <h4> For Memory: </h4>
    <br/>
    <ul>
      <li>Click on a card to begin</li>
      <li>There is one card for each month</li>
      <li>For every unique card you pick, you get one point</li>
      <li>Clicking on the same card twice means you lose!</li>
      <li>Refresh the page for new cards</li>
    </ul>
    <br/>

    <h4> For KoiKoi: </h4>
    <br/>
    <ul>
      <li>Match cards in your hand to cards on the field</li>
      <li>Cards can only be matched within the same month</li>
      <li>If you can't make any matches, you must discard a card to the field</li>
      <li>If there are two possible matches on the field, click on the card in your hand, then click on the card you want to match it with on the field.</li>
      <li>Once you run out of cards in your hand, the round ends and the points are tallied up</li>
      <li>The opponents points are subtracted from your points, and if the total is zero or less, You Lose!</li>
      <li>If not, play another round!</li>

    </ul>

  </div>
);

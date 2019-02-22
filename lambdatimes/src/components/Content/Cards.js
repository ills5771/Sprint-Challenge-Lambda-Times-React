import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card
          tab={card.tab}
          headline={card.headline}
          img={card.img}
          author={card.author}
        />
      ))}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({ card: PropTypes.string }))
};

export default Cards;

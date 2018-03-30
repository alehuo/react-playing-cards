import React from "react";
import "./styles/PlayingCard.css";

class PlayingCard extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.value) {
      throw new Error("Value must be defined for playing cards");
    }
    if (!this.props.suit) {
      throw new Error("Suit must be defined for playing cards");
    }
  }

  render() {
    let val = 2;
    switch (this.props.value) {
      case 1:
        val = "A";
        break;
      case 11:
        val = "J";
        break;
      case 12:
        val = "Q";
        break;
      case 13:
        val = "K";
        break;
    }
    return <div className="playingCard" />;
  }
}

export default PlayingCard;

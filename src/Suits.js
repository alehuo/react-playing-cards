import React from "react";
import "./styles/Suits.css";

const Suit = ({ children, suit }) => (
  <React.Fragment>
    {React.Children.map(children, child => {
      return React.cloneElement(child, {
        suit
      });
    })}
  </React.Fragment>
);

const Spades = ({ children }) => (
  <Suit suit="spades">
    {children}
  </Suit>
);
const Clubs = ({ children }) => (
  <Suit suit="clubs">
    {children}
  </Suit>
);
const Diamonds = ({ children }) => (
  <Suit suit="diamonds">
    {children}
  </Suit>
);
const Hearts = ({ children }) => (
  <Suit suit="hearts">
    {children}
  </Suit>
);

export { Spades, Clubs, Diamonds, Hearts };

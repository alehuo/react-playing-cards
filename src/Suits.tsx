import type { PropsWithChildren } from "react";
import React from "react";
import type { Suit } from "./types";

type SuitProps = {
  suit: Suit;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
};

const Suit: React.FC<SuitProps> = ({ children, suit }) => (
  <>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        suit,
      });
    })}
  </>
);

const Spades: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <Suit suit="spades">{children}</Suit>
);
const Clubs: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <Suit suit="clubs">{children}</Suit>
);
const Diamonds: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <Suit suit="diamonds">{children}</Suit>
);
const Hearts: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <Suit suit="hearts">{children}</Suit>
);

export { Spades, Clubs, Diamonds, Hearts };

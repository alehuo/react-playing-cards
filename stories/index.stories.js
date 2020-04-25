import React from "react";

import { storiesOf } from "@storybook/react";
import { Spades, Hearts, Diamonds, Clubs } from "./../src/Suits";
import PlayingCard from "./../src/PlayingCard";

storiesOf("No suit", module).add("(Should throw an error)", () => (
  <PlayingCard value={1} />
));

storiesOf("Spades", module)
  .add("A", () => (
    <Spades>
      <PlayingCard value={1} />
    </Spades>
  ))
  .add("2", () => (
    <Spades>
      <PlayingCard value={2} />
    </Spades>
  ))
  .add("3", () => (
    <Spades>
      <PlayingCard value={3} />
    </Spades>
  ))
  .add("4", () => (
    <Spades>
      <PlayingCard value={4} />
    </Spades>
  ))
  .add("5", () => (
    <Spades>
      <PlayingCard value={5} />
    </Spades>
  ))
  .add("6", () => (
    <Spades>
      <PlayingCard value={6} />
    </Spades>
  ))
  .add("7", () => (
    <Spades>
      <PlayingCard value={7} />
    </Spades>
  ))
  .add("8", () => (
    <Spades>
      <PlayingCard value={8} />
    </Spades>
  ))
  .add("9", () => (
    <Spades>
      <PlayingCard value={9} />
    </Spades>
  ))
  .add("10", () => (
    <Spades>
      <PlayingCard value={10} />
    </Spades>
  ))
  .add("J", () => (
    <Spades>
      <PlayingCard value={11} />
    </Spades>
  ))
  .add("Q", () => (
    <Spades>
      <PlayingCard value={12} />
    </Spades>
  ))
  .add("K", () => (
    <Spades>
      <PlayingCard value={13} />
    </Spades>
  ))
  .add("Whole deck", () => (
    <Spades>
      <PlayingCard value={1} />
      <PlayingCard value={2} />
      <PlayingCard value={3} />
      <PlayingCard value={4} />
      <PlayingCard value={5} />
      <PlayingCard value={6} />
      <PlayingCard value={7} />
      <PlayingCard value={8} />
      <PlayingCard value={9} />
      <PlayingCard value={10} />
      <PlayingCard value={11} />
      <PlayingCard value={12} />
      <PlayingCard value={13} />
    </Spades>
  ))
  .add("With no value (Should throw an error)", () => (
    <Spades>
      <PlayingCard />
    </Spades>
  ));

storiesOf("Hearts", module)
  .add("A", () => (
    <Hearts>
      <PlayingCard value={1} />
    </Hearts>
  ))
  .add("2", () => (
    <Hearts>
      <PlayingCard value={2} />
    </Hearts>
  ))
  .add("3", () => (
    <Hearts>
      <PlayingCard value={3} />
    </Hearts>
  ))
  .add("4", () => (
    <Hearts>
      <PlayingCard value={4} />
    </Hearts>
  ))
  .add("5", () => (
    <Hearts>
      <PlayingCard value={5} />
    </Hearts>
  ))
  .add("6", () => (
    <Hearts>
      <PlayingCard value={6} />
    </Hearts>
  ))
  .add("7", () => (
    <Hearts>
      <PlayingCard value={7} />
    </Hearts>
  ))
  .add("8", () => (
    <Hearts>
      <PlayingCard value={8} />
    </Hearts>
  ))
  .add("9", () => (
    <Hearts>
      <PlayingCard value={9} />
    </Hearts>
  ))
  .add("10", () => (
    <Hearts>
      <PlayingCard value={10} />
    </Hearts>
  ))
  .add("J", () => (
    <Hearts>
      <PlayingCard value={11} />
    </Hearts>
  ))
  .add("Q", () => (
    <Hearts>
      <PlayingCard value={12} />
    </Hearts>
  ))
  .add("K", () => (
    <Hearts>
      <PlayingCard value={13} />
    </Hearts>
  ))
  .add("Whole deck", () => (
    <Hearts>
      <PlayingCard value={1} />
      <PlayingCard value={2} />
      <PlayingCard value={3} />
      <PlayingCard value={4} />
      <PlayingCard value={5} />
      <PlayingCard value={6} />
      <PlayingCard value={7} />
      <PlayingCard value={8} />
      <PlayingCard value={9} />
      <PlayingCard value={10} />
      <PlayingCard value={11} />
      <PlayingCard value={12} />
      <PlayingCard value={13} />
    </Hearts>
  ))
  .add("With no value (Should throw an error)", () => (
    <Hearts>
      <PlayingCard />
      ,
    </Hearts>
  ));
storiesOf("Diamonds", module)
  .add("A", () => (
    <Diamonds>
      <PlayingCard value={1} />
    </Diamonds>
  ))
  .add("2", () => (
    <Diamonds>
      <PlayingCard value={2} />
    </Diamonds>
  ))
  .add("3", () => (
    <Diamonds>
      <PlayingCard value={3} />
    </Diamonds>
  ))
  .add("4", () => (
    <Diamonds>
      <PlayingCard value={4} />
    </Diamonds>
  ))
  .add("5", () => (
    <Diamonds>
      <PlayingCard value={5} />
    </Diamonds>
  ))
  .add("6", () => (
    <Diamonds>
      <PlayingCard value={6} />
    </Diamonds>
  ))
  .add("7", () => (
    <Diamonds>
      <PlayingCard value={7} />
    </Diamonds>
  ))
  .add("8", () => (
    <Diamonds>
      <PlayingCard value={8} />
    </Diamonds>
  ))
  .add("9", () => (
    <Diamonds>
      <PlayingCard value={9} />
    </Diamonds>
  ))
  .add("10", () => (
    <Diamonds>
      <PlayingCard value={10} />
    </Diamonds>
  ))
  .add("J", () => (
    <Diamonds>
      <PlayingCard value={11} />
    </Diamonds>
  ))
  .add("Q", () => (
    <Diamonds>
      <PlayingCard value={12} />
    </Diamonds>
  ))
  .add("K", () => (
    <Diamonds>
      <PlayingCard value={13} />
    </Diamonds>
  ))
  .add("Whole deck", () => (
    <Diamonds>
      <PlayingCard value={1} />
      <PlayingCard value={2} />
      <PlayingCard value={3} />
      <PlayingCard value={4} />
      <PlayingCard value={5} />
      <PlayingCard value={6} />
      <PlayingCard value={7} />
      <PlayingCard value={8} />
      <PlayingCard value={9} />
      <PlayingCard value={10} />
      <PlayingCard value={11} />
      <PlayingCard value={12} />
      <PlayingCard value={13} />
    </Diamonds>
  ))
  .add("With no value (Should throw an error)", () => (
    <Diamonds>
      <PlayingCard />
      ,
    </Diamonds>
  ));
storiesOf("Clubs", module)
  .add("A", () => (
    <Clubs>
      <PlayingCard value={1} />
    </Clubs>
  ))
  .add("2", () => (
    <Clubs>
      <PlayingCard value={2} />
    </Clubs>
  ))
  .add("3", () => (
    <Clubs>
      <PlayingCard value={3} />
    </Clubs>
  ))
  .add("4", () => (
    <Clubs>
      <PlayingCard value={4} />
    </Clubs>
  ))
  .add("5", () => (
    <Clubs>
      <PlayingCard value={5} />
    </Clubs>
  ))
  .add("6", () => (
    <Clubs>
      <PlayingCard value={6} />
    </Clubs>
  ))
  .add("7", () => (
    <Clubs>
      <PlayingCard value={7} />
    </Clubs>
  ))
  .add("8", () => (
    <Clubs>
      <PlayingCard value={8} />
    </Clubs>
  ))
  .add("9", () => (
    <Clubs>
      <PlayingCard value={9} />
    </Clubs>
  ))
  .add("10", () => (
    <Clubs>
      <PlayingCard value={10} />
    </Clubs>
  ))
  .add("J", () => (
    <Clubs>
      <PlayingCard value={11} />
    </Clubs>
  ))
  .add("Q", () => (
    <Clubs>
      <PlayingCard value={12} />
    </Clubs>
  ))
  .add("K", () => (
    <Clubs>
      <PlayingCard value={13} />
    </Clubs>
  ))
  .add("Whole deck", () => (
    <Clubs>
      <PlayingCard value={1} />
      <PlayingCard value={2} />
      <PlayingCard value={3} />
      <PlayingCard value={4} />
      <PlayingCard value={5} />
      <PlayingCard value={6} />
      <PlayingCard value={7} />
      <PlayingCard value={8} />
      <PlayingCard value={9} />
      <PlayingCard value={10} />
      <PlayingCard value={11} />
      <PlayingCard value={12} />
      <PlayingCard value={13} />
    </Clubs>
  ))
  .add("With no value (Should throw an error)", () => (
    <Clubs>
      <PlayingCard />
      ,
    </Clubs>
  ));

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Spades } from "./../src/Suits";
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
  .add("With no value (Should throw an error)", () => (
    <Spades>
      <PlayingCard />
    </Spades>
  ));

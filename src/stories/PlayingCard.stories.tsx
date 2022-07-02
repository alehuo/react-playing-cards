import React from "react";

import { storiesOf } from "@storybook/react";
import { PlayingCard } from "../../dist";

const spadesStories = storiesOf("Spades", module);

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13].map((val) =>
  spadesStories.add(`${val}`, () => <PlayingCard value={val} suit="spades" />)
);

spadesStories.add("Whole deck", () => (
  <>
    <PlayingCard value={1} suit="spades" />
    <PlayingCard value={2} suit="spades" />
    <PlayingCard value={3} suit="spades" />
    <PlayingCard value={4} suit="spades" />
    <PlayingCard value={5} suit="spades" />
    <PlayingCard value={6} suit="spades" />
    <PlayingCard value={7} suit="spades" />
    <PlayingCard value={8} suit="spades" />
    <PlayingCard value={9} suit="spades" />
    <PlayingCard value={10} suit="spades" />
    <PlayingCard value={11} suit="spades" />
    <PlayingCard value={12} suit="spades" />
    <PlayingCard value={13} suit="spades" />
  </>
));

const heartsStories = storiesOf("Hearts", module);

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13].map((val) =>
heartsStories.add(`${val}`, () => <PlayingCard value={val} suit="hearts" />)
);

heartsStories.add("Whole deck", () => (
  <>
    <PlayingCard value={1} suit="hearts" />
    <PlayingCard value={2} suit="hearts" />
    <PlayingCard value={3} suit="hearts" />
    <PlayingCard value={4} suit="hearts" />
    <PlayingCard value={5} suit="hearts" />
    <PlayingCard value={6} suit="hearts" />
    <PlayingCard value={7} suit="hearts" />
    <PlayingCard value={8} suit="hearts" />
    <PlayingCard value={9} suit="hearts" />
    <PlayingCard value={10} suit="hearts" />
    <PlayingCard value={11} suit="hearts" />
    <PlayingCard value={12} suit="hearts" />
    <PlayingCard value={13} suit="hearts" />
  </>
));
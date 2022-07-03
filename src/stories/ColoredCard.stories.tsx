import React from "react";

import { storiesOf } from "@storybook/react";
import { ColoredCard } from "../../dist";

storiesOf("Colored Card", module)
  .add("Gold", () => (
    <ColoredCard
      color="gold"
      title="Golden card"
      image={
        "https://i.picsum.photos/id/955/200/200.jpg?hmac=_m3ln1pswsR9s9hWuWrwY_O6N4wizKmukfhvyaTrkjE"
      }
      description={<i>"This is a colored card"</i>}
    />
  ))
  .add("Silver", () => <ColoredCard color="silver" title="Silver card" />)
  .add("Indigo", () => <ColoredCard color="indigo" title="Indigo card" />)
  .add("Crimson", () => <ColoredCard color="crimson" title="Crimson card" />);

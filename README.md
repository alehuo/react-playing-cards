# react-playing-cards

Various card components for React.

## Currently implemented components

- Playing cards

## Usage

### Playing cards

```typescript
import { PlayingCard } from "react-playing-cards";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  document.getElementById("app"),
  <div>
    <PlayingCard value={12} suit="spades" />
  </div>
);
```

## Installation

Run `npm install`.

## Building

Run `npm run build`

## Development

Run `npm watch` to preview the components.

### Requirements for development

- Node.js v16 (`.nvmrc` file is provided)

## License

MIT license.

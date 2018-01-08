This is a simple interface for finding the best poker hand from a given hand.

## running the app
To run the app in your console, clone the repo, do: `npm install`, and then in the root directory do: `node app`. The console will print your given hand with the best possible hand to play from it. Each time it is run, the app get a new hand from a full and shuffled deck via the [Deck of Cards API](https://deckofcardsapi.com/).

The code that makes this work is located in `./bestHandsAPI.js` and `./helpers.js`.

## testing it
You can run the tests with `npm test` or `jasmine`. Those tests are located in `./spec`.

## documentation
Generate the documentation with `jsdoc helpers.js bestHandsAPI.js`, and serve / open it from `./out`.
This is a simple interface for finding the best poker hand from a given hand.

## running the app
To run the app in your console, clone the repo, do: `npm install`, and then in the root directory do: `node app`. The console will print your given hand with the best possible hand to play from it. Each time it is run, the app will get a new hand from a full and shuffled deck via the [Deck of Cards API](https://deckofcardsapi.com/).

The code that makes this work is located in `./bestHandsAPI.js` and `./helpers.js`.

## API
The main function of the API is `findBestHand(<cards>)` which takes an array `cards` and returns a new object with the name of the best hand and the array of cards used by that hand.

### cards
A card is assumed to be an object with two keys:
- `suit`: a string (one of: "CLUBS", "HEARTS", "SPADES", "DIAMONDS")
- `value`: a string (one of: "ACE", "KING", "QUEEN", "JACK", or one of: 2,3,4,5,6,7,8,9,10 stringified) or an integer (one of: 2,3,4,5,6,7,8,9,10)

An example of usage is:
```js
const findBestHand = require('bestHandsAPI').findBestHand;

const HAND_WITH_A_STRAIGHT = [ 
  { suit: 'CLUBS', value: '2' },
  { suit: 'CLUBS', value: '3' },
  { suit: 'HEARTS', value: '4' },
  { suit: 'CLUBS', value: '5' },
  { suit: 'CLUBS', value: '6' } 
]

console.log(findBestHand(HAND_WITH_A_STRAIGHT));

// expected console output:
// { 
//   best_hand: 'Straight',
//   hand: 
//     [ { suit: 'CLUBS', value: '2' },
//      { suit: 'CLUBS', value: '3' },
//      { suit: 'HEARTS', value: '4' },
//      { suit: 'CLUBS', value: '5' },
//      { suit: 'CLUBS', value: '6' } ] 
// }
```

## testing it
You can run the tests with `npm test` or `jasmine`. Those tests are located in `./spec`.

## documentation
Generate the documentation with `jsdoc helpers.js bestHandsAPI.js`, and serve / open it from `./out`.
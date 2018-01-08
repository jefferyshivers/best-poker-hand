const fetchUrl = require('fetch').fetchUrl;
const bh = require('./bestHandsAPI');

const potentialHands = [
  bh.straightFlush,
  bh.fourOfAKind,
  bh.fullHouse,
  bh.flush,
  bh.straight,
  bh.threeOfAKind,
  bh.twoPair,
  bh.onePair,
  bh.highCard
]

// a little helper just to clean up the messages in the console
const reduceHand = hand => {
  if (hand.cards) { hand = hand.cards }

  return hand.map(card_or_group => {
    return {
      suit: card_or_group.suit,
      value: card_or_group.value
    }
  });
}

fetchUrl(`https://deckofcardsapi.com/api/deck/new/draw/?count=5`, (error, meta, body) => {
  const cards = JSON.parse(body).cards;
  const bestHand = bh.findBestHand(cards, potentialHands);

  console.log("Your best hand is a", bestHand.best_hand);
  console.log("The arrangement for that hand from your cards is:", reduceHand(bestHand.hand));
});
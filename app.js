const fetchUrl = require('fetch').fetchUrl;
const findBestHand = require('./bestHandsAPI').findBestHand;


// a little helper just to clean up the messages in the console
const reduceHand = hand => {
  if (hand.cards) { hand = hand.cards }

  return hand.map(card_or_group => {
    return `${card_or_group.value} of ${card_or_group.suit}`;
  });
}


fetchUrl(`https://deckofcardsapi.com/api/deck/new/draw/?count=5`, (error, meta, body) => {
  const cards = JSON.parse(body).cards;
  let reduced_hand = reduceHand(cards);
  
  console.log(`Your cards are: ${reduced_hand.join(", ")}`);

  const bestHand = findBestHand(cards);

  console.log(`Your best hand is a ${bestHand.best_hand}:`);

  let reduced_best_hand = reduceHand(bestHand.hand);
  reduced_best_hand.forEach(card => {
    console.log(`  ${card}`);
  });
});
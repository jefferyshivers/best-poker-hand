const helpers = require('./helpers');

// Each function should return the first/best hand if
// possible. If any cards remain unused, it returns a list
// of those too. If the hand isn't possible, it returns
// false.

// This is a thin API layer between the actual sorting 
// algorithms (helpers.js) and the front of the app (app.js).

const findBestHand = (cards, potentialHands) => {
  let bestHandResult = false;
  let potentialHandIndex = 0;

  while (!bestHandResult && (potentialHandIndex < potentialHands.length)) {
    let handTest = potentialHands[potentialHandIndex];
    let match = handTest(cards);
  
    if (match) {
      bestHandResult = match;
    }

    potentialHandIndex += 1;
  }

  return bestHandResult;
}



const straightFlush = hand => {
  // 
  if (helpers.isFlush(hand) && helpers.isStraight(hand)) {
    return {
      best_hand: "Straight Flush",
      hand: helpers.isStraight(hand)
    }
  }

  return false;
}

const fourOfAKind = hand => {
  // 
  if (helpers.someOfAKind(hand, 4)) {
    return {
      best_hand: 'Three of a Kind',
      hand: helpers.someOfAKind(hand, 4)
    }
  }

  return false;
}

const fullHouse = hand => {
  // looks for one pair and one triplet
  let groups = helpers.groupByValue(hand)

  if (groups && groups.cards.length === 2 && groups.cards.some(group => {return group.length === 2}) && groups.cards.some(group => {return group.length === 3}) ) {
    return {
      best_hand: "Full House",
      hand: groups.cards[0].concat(groups.cards[1])
    }
  }

  return false;
}

const flush = hand => {
  // 
  if (helpers.isFlush(hand)) {
    return {
      best_hand: 'Flush',
      hand: hand
    }
  }

  return false;
}

const straight = hand => {
  // looks for a straight (all cards fulfill a consecutive order)
  if (helpers.isStraight(hand)) {
    return {
      best_hand: 'Straight',
      hand: helpers.isStraight(hand)
    }
  }

  return false;
}

const threeOfAKind = hand => {
  // looks for a group of three matching values
  if (helpers.someOfAKind(hand, 3)) {
    return {
      best_hand: 'Three of a Kind',
      hand: helpers.someOfAKind(hand, 3)
    }
  }

  return false;
}

const twoPair = hand => {
  // looks for two pairs
  let groups = helpers.groupByValue(hand)

  if (groups && groups.cards.length === 2 && groups.cards.every(group => {return group.length === 2})) {
    return {
      best_hand: "Two Pairs",
      hand: groups.cards[0].concat(groups.cards[1])
    }
  }

  return false;
}

const onePair = hand => {
  if (helpers.someOfAKind(hand, 2)) {
    return {
      best_hand: 'One pair',
      hand: helpers.someOfAKind(hand, 2)
    }
  }

  return false;
}

const highCard = hand => {
  // returns the card with the highest value
  return {
    best_hand: "High card",
    hand: helpers.highCardsDescending(hand)
  }
}

module.exports = {
  findBestHand,
  straightFlush,
  fourOfAKind,
  fullHouse,
  flush,
  straight,
  threeOfAKind,
  twoPair,
  onePair,
  highCard
}
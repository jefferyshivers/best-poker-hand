const helpers = require('./helpers');


// This is a thin API layer between the actual sorting 
// algorithms (helpers.js) and the front of the app (app.js).

// Each function should return the first/best hand if
// possible. If any cards remain unused, it returns a list
// of those too. If the hand isn't possible, it returns
// false.


/**
 * Finds a Straight Flush.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const straightFlush = hand => {
  if (helpers.isFlush(hand) && helpers.isStraight(hand)) {
    return {
      best_hand: "Straight Flush",
      hand: helpers.isStraight(hand)
    }
  }

  return false;
}


/**
 * Finds the first instance of Four of a Kind.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const fourOfAKind = hand => {
  if (helpers.someOfAKind(hand, 4)) {
    return {
      best_hand: 'Four of a Kind',
      hand: helpers.someOfAKind(hand, 4)
    }
  }

  return false;
}


/**
 * Finds a Full House.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const fullHouse = hand => {
  let groups = helpers.groupByValue(hand)

  if (groups && groups.cards.length === 2 && groups.cards.some(group => {return group.length === 2}) && groups.cards.some(group => {return group.length === 3}) ) {
    return {
      best_hand: "Full House",
      hand: groups.cards[0].concat(groups.cards[1])
    }
  }

  return false;
}


/**
 * Finds a Flush.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const flush = hand => {
  if (helpers.isFlush(hand)) {
    return {
      best_hand: 'Flush',
      hand: hand
    }
  }

  return false;
}


/**
 * Finds a Straight.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const straight = hand => {
  if (helpers.isStraight(hand)) {
    return {
      best_hand: 'Straight',
      hand: helpers.isStraight(hand)
    }
  }

  return false;
}


/**
 * Finds the first instance of Three of a Kind.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const threeOfAKind = hand => {
  if (helpers.someOfAKind(hand, 3)) {
    return {
      best_hand: 'Three of a Kind',
      hand: helpers.someOfAKind(hand, 3)
    }
  }

  return false;
}


/**
 * Finds Two Pairs.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const twoPair = hand => {
  let groups = helpers.groupByValue(hand)

  if (groups && groups.cards.length === 2 && groups.cards.every(group => {return group.length === 2})) {
    return {
      best_hand: "Two Pairs",
      hand: groups.cards[0].concat(groups.cards[1])
    }
  }

  return false;
}


/**
 * Finds the first instance of One Pair.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the passing hand and its name, or false
 */
const onePair = hand => {
  if (helpers.someOfAKind(hand, 2)) {
    return {
      best_hand: 'One Pair',
      hand: helpers.someOfAKind(hand, 2)
    }
  }

  return false;
}


/**
 * Returns a sorted hand (value descending) of High Cards.
 * @param {Array} hand
 * @returns {Object} an object with the passing hand and its name
 */
const highCard = hand => {
  return {
    best_hand: "High Card",
    hand: helpers.highCardsDescending(hand)
  }
}

/**
 * Finds the best hand possible from a given set of cards.
 * @param {Array} hand
 * @returns {Object|boolean} an object with the best hand and its name, or false
 */
const findBestHand = hand => {
  let bestHandResult = false;
  let potentialHandIndex = 0;
  const potentialHands = [
    straightFlush,
    fourOfAKind,
    fullHouse,
    flush,
    straight,
    threeOfAKind,
    twoPair,
    onePair,
    highCard
  ]

  while (!bestHandResult && (potentialHandIndex < potentialHands.length)) {
    let handTest = potentialHands[potentialHandIndex];
    let match = handTest(hand);
  
    if (match) {
      bestHandResult = match;
    }

    potentialHandIndex += 1;
  }

  return bestHandResult;
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
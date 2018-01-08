const numericValue = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  'JACK': 11,
  'QUEEN': 12,
  'KING': 13,
  'ACE': 14  
}

const numericValueAceLow = Object.assign({}, numericValue, {
  'ACE': 1
});


/**
 * Tests if a hand is flush or not.
 * @param {Array} cards
 * @return {Object|boolean} passing hand, or false
 */
const isFlush = cards => {
  let result = (
    cards.every(card => {
      return card.suit === cards[0].suit;
    }))
    ? cards
    : false

  return result;
}

/**
 * Tests if a hand is straight or not.
 * @param {Array} cards
 * @return {Object|boolean} passing hand, or false
 */
const isStraight = cards => {
  let straight = (cards_to_sort, values_hash) => {
    let sorted_cards = cards_to_sort.sort((a, b) => {
      return values_hash[a.value] - values_hash[b.value];
    });

    let result = (
      sorted_cards.every((card, index) => {
        let lowest_card = sorted_cards[0];
        return values_hash[card.value] === (values_hash[lowest_card.value] + index);
      })) 
      ? sorted_cards
      : false
    
    return result;
  }

  if (straight(cards, numericValue)) {
    return straight(cards, numericValue);
  } else if (straight(cards, numericValueAceLow)) {
    return straight(cards, numericValueAceLow);
  } else {
    return false;
  }
}

/**
 * Tests if a hand has a group of a specific number of cards with matching values.
 * This test passes as soon as any group matches the requested size. Thus it is 
 * faster than using `groupByValue`, but should only be used when the remaining
 * cards do not need to be checked.
 * @param {Array} cards
 * @param {number} someNumber
 * @return {Object|boolean} first passing hand, or false
 */
const someOfAKind = (cards, someNumber) => {
  let result = false;
  let card_to_match_index = 0;
  let cards_remaining;

  while (!result && (card_to_match_index < cards.length)) {
    let card_to_match = cards[card_to_match_index];

    let matches = cards.filter(test_card => {
      return test_card.value === card_to_match.value;
    });

    if (matches.length === someNumber) {
      result = matches;
    }

    card_to_match_index += 1;
  }

  if (result) {
    cards_remaining = cards.filter(card => {
      return !cards.includes(card);
    })

    return {
      cards: result,
      cards_remaining: cards_remaining
    }
  }
  
  return result;
}

/**
 * Recursively tests is there are any groups of cards with matching values.
 * @param {Array|Object} cards_arr_or_obj
 * @return {Object|boolean} an array of all passing groups, or false
 */
const groupByValue = cards_arr_or_obj => {
  let cards = Array.isArray(cards_arr_or_obj) ? cards_arr_or_obj : cards_arr_or_obj.cards_remaining;
  let groups = cards_arr_or_obj.cards ? cards_arr_or_obj.cards : [];
  let cards_remaining = [];
  let result = false;
  let card_to_match_index = 0;

  while (!result && card_to_match_index < (cards.length - 1)) {
    let card_to_match = cards[card_to_match_index];
    let cards_to_test = cards.filter((card, index) => {
      return index > card_to_match_index
    });

    let matches = cards.filter(test_card => {
      return test_card.value === card_to_match.value;
    });

    if (matches.length > 1) {
      result = matches;
    }

    card_to_match_index += 1;
  }

  if (result) {
    groups.push(result);

    cards_remaining = cards.filter(card => {
      return !result.includes(card);
    })    

    if (cards_remaining.length > 1) {
      let more_groups = groupByValue(cards_remaining);

      if (more_groups) {
        groups = groups.concat(more_groups.cards);
      }
    }

    return {
      cards: groups,
      cards_remaining: cards_remaining
    }
  }
  
  return result;
}


/**
 * Sorts the given hand in descending order by value.
 * @param {Array} cards
 * @return {Array} sorted cards
 */
const highCardsDescending = cards => {
  return cards.sort((a, b) => {
    return numericValue[b.value] - numericValue[a.value];
  })
}

module.exports = {
  isFlush,
  isStraight,
  someOfAKind,
  groupByValue,
  highCardsDescending
}
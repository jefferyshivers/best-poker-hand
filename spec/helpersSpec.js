const helpers = require("../helpers.js");
const mock_cards = require("./mock_cards.js");

describe("isFlush", () => {
  it("calls a flush a flush", () => {
    expect(helpers.isFlush(mock_cards.FLUSH)).toBeTruthy();
    expect(helpers.isFlush(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("isStraight", () => {
  it("calls a straight a straight", () => {
    expect(helpers.isStraight(mock_cards.STRAIGHT)).toBeTruthy();
    expect(helpers.isStraight(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("someOfAKind", () => {
  it("tests if a hand has a group of a specific number of cards with matching values", () => {
    expect(helpers.someOfAKind(mock_cards.FOUR_OF_A_KIND, 4)).toBeTruthy();
    expect(helpers.someOfAKind(mock_cards.THREE_OF_A_KIND, 3)).toBeTruthy();
    expect(helpers.someOfAKind(mock_cards.ONE_PAIR, 2)).toBeTruthy();
    expect(helpers.someOfAKind(mock_cards.RANDOM_NO_MATCH, 2)).toEqual(false);
  });
});

describe("groupByValue", () => {
  it("finds groups of similarly valued cards", () => {
    expect(helpers.groupByValue(mock_cards.FULL_HOUSE).cards.length).toEqual(2);
    expect(helpers.groupByValue(mock_cards.TWO_PAIRS).cards.length).toEqual(2);
    expect(helpers.groupByValue(mock_cards.ONE_PAIR).cards.length).toEqual(1);
    expect(helpers.groupByValue(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("highCardsDescending", () => {
  it("sorts the given hand in descending order by value.", () => {
    let cards = mock_cards.STRAIGHT;
    cards.reverse();

    expect(helpers.highCardsDescending(mock_cards.STRAIGHT)).toEqual(cards);
  });
});
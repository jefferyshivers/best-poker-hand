const bh = require("../bestHandsAPI.js");
const mock_cards = require("./mock_cards.js");

describe("findBestHand", () => {
  it("finds the best hand", () => {
    expect(bh.findBestHand(mock_cards.STRAIGHT_FLUSH).best_hand).toEqual('Straight Flush');
    expect(bh.findBestHand(mock_cards.FLUSH).best_hand).toEqual('Flush');
    expect(bh.findBestHand(mock_cards.STRAIGHT).best_hand).toEqual('Straight');
    expect(bh.findBestHand(mock_cards.THREE_OF_A_KIND).best_hand).toEqual('Three of a Kind');
    expect(bh.findBestHand(mock_cards.FOUR_OF_A_KIND).best_hand).toEqual('Four of a Kind');
    expect(bh.findBestHand(mock_cards.TWO_PAIRS).best_hand).toEqual('Two Pairs');
    expect(bh.findBestHand(mock_cards.ONE_PAIR).best_hand).toEqual('One Pair');
    expect(bh.findBestHand(mock_cards.RANDOM_NO_MATCH).best_hand).toEqual('High Card');
  });
});

describe("straghtFlush", () => {
  it("finds a Straight Flush", () => {
    expect(bh.straightFlush(mock_cards.STRAIGHT_FLUSH).best_hand).toEqual('Straight Flush');
    expect(bh.straightFlush(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("fourOfAKind", () => {
  it("finds Four of a Kind", () => {
    expect(bh.fourOfAKind(mock_cards.FOUR_OF_A_KIND).best_hand).toEqual('Four of a Kind');
    expect(bh.fourOfAKind(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("fullHouse", () => {
  it("finds a Full House", () => {
    expect(bh.fullHouse(mock_cards.FULL_HOUSE).best_hand).toEqual('Full House');
    expect(bh.fullHouse(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("flush", () => {
  it("finds a Flush", () => {
    expect(bh.flush(mock_cards.FLUSH).best_hand).toEqual('Flush');
    expect(bh.flush(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("straight", () => {
  it("finds a Straight", () => {
    expect(bh.straight(mock_cards.STRAIGHT).best_hand).toEqual('Straight');
    expect(bh.straight(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("threeOfAKind", () => {
  it("finds Three of a Kind", () => {
    expect(bh.threeOfAKind(mock_cards.THREE_OF_A_KIND).best_hand).toEqual('Three of a Kind');
    expect(bh.threeOfAKind(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("twoPair", () => {
  it("finds a Two Pair", () => {
    expect(bh.twoPair(mock_cards.TWO_PAIRS).best_hand).toEqual('Two Pairs');
    expect(bh.twoPair(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("onePair", () => {
  it("finds One Pair", () => {
    expect(bh.onePair(mock_cards.ONE_PAIR).best_hand).toEqual('One Pair');
    expect(bh.onePair(mock_cards.RANDOM_NO_MATCH)).toEqual(false);
  });
});

describe("highCard", () => {
  it("sorts by High Card descending", () => {
    let cards = mock_cards.RANDOM_NO_MATCH;
    cards.reverse();

    expect(bh.highCard(mock_cards.RANDOM_NO_MATCH).best_hand).toEqual('High Card');
    expect(bh.highCard(mock_cards.RANDOM_NO_MATCH).hand).toEqual(cards);
  });
});
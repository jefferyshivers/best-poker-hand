const STRAIGHT_FLUSH = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: '3' 
  },
  {
    suit: 'CLUBS',
    value: '4' 
  },
  {
    suit: 'CLUBS',
    value: '5' 
  },
  {
    suit: 'CLUBS',
    value: '6' 
  } 
]

const STRAIGHT = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: '3' 
  },
  {
    suit: 'HEARTS',
    value: '4' 
  },
  {
    suit: 'CLUBS',
    value: '5' 
  },
  {
    suit: 'CLUBS',
    value: '6' 
  } 
]

const FLUSH = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: '3' 
  },
  {
    suit: 'CLUBS',
    value: '4' 
  },
  {
    suit: 'CLUBS',
    value: '5' 
  },
  {
    suit: 'CLUBS',
    value: '7' 
  } 
]

const FULL_HOUSE = [ 
  {
    suit: 'CLUBS',
    value: '3' 
  },
  {
    suit: 'HEARTS',
    value: '3' 
  },
  {
    suit: 'CLUBS',
    value: '4' 
  },
  {
    suit: 'HEARTS',
    value: '4' 
  },
  {
    suit: 'SPADES',
    value: '4' 
  } 
]

const FOUR_OF_A_KIND = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'HEARTS',
    value: '2' 
  },
  {
    suit: 'DIAMONDS',
    value: '2' 
  },
  {
    suit: 'SPADES',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: 'JACK' 
  } 
]

const THREE_OF_A_KIND = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'HEARTS',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: '10' 
  },
  {
    suit: 'SPADES',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: 'JACK' 
  } 
]

const ONE_PAIR = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'HEARTS',
    value: '7' 
  },
  {
    suit: 'CLUBS',
    value: '10' 
  },
  {
    suit: 'SPADES',
    value: '10' 
  },
  {
    suit: 'CLUBS',
    value: 'JACK' 
  } 
]

const TWO_PAIRS = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'HEARTS',
    value: '2' 
  },
  {
    suit: 'CLUBS',
    value: '10' 
  },
  {
    suit: 'SPADES',
    value: '10' 
  },
  {
    suit: 'CLUBS',
    value: 'JACK' 
  } 
]


const RANDOM_NO_MATCH = [ 
  {
    suit: 'CLUBS',
    value: '2' 
  },
  {
    suit: 'HEARTS',
    value: '7' 
  },
  {
    suit: 'CLUBS',
    value: '8' 
  },
  {
    suit: 'SPADES',
    value: '10' 
  },
  {
    suit: 'CLUBS',
    value: 'JACK' 
  } 
]

module.exports = {
  STRAIGHT_FLUSH,
  STRAIGHT,
  FLUSH,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  THREE_OF_A_KIND,
  ONE_PAIR,
  TWO_PAIRS,
  RANDOM_NO_MATCH
}
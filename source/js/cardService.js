// Card Model
angular.module('CodeTaskApp').factory('cardService', function() {

  // Construct deck of cards
  class deck {
    constructor() {
      // Define cards
      const data = {
        values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        valueEnum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        suits: ['♣', '♠', '♥', '♦'],
        suitEnum: [0, 1, 2, 3]
      };
      // Define card objects
      let cards = [];
      let id = 0;
      for( let s = 0; s < data.suits.length; s++ ) {
        for( let n = 0; n < data.values.length; n++ ) {
          let card = {
            id: id + 1,
            value: data.values[n],
            valueEnum: data.valueEnum[n],
            suit: data.suits[s],
            suitEnum: data.suitEnum[s]
          }
          cards.push(card);
          id++;
        }
      }
      return cards;
    }
  }

  const deckOfCards = new deck();

  // Test deck
  // console.log('Deck is: ', deckOfCards);

  // Alternatively, a json file with card objects can be imported by injecting and using the $http service

  return deckOfCards;

});

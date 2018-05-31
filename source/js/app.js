// Main Controller
(function () {
    angular.module('CodeTaskApp', []);

    angular.module('CodeTaskApp').controller('MainController', function ($scope, cardService) {
          // Set view model
          let vm = this;

          vm.deck = cardService;
          vm.newDeck = [];
 
          // Array shuffle - Fisher-Yates algorithm
          // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
          // Call the following on ng-click!
          $scope.shuffleDeck = function shuffle(deck) {
              var j, x, i;
              for (i = deck.length - 1; i > 0; i--) {
                  j = Math.floor(Math.random() * (i + 1));
                  x = deck[i];
                  deck[i] = deck[j];
                  deck[j] = x;
              }
              // Return shuffled deck
              vm.deck = deck;

              return vm.deck;
          }

          // Remove item from the original deck!
          $scope.removeItem = function(index) {
            vm.newDeck.push(vm.deck[index]);
            vm.deck.splice(index, 1);
          }

          // Remove item from new deck and add it to the original one!
          $scope.addItem = function(index) {
            vm.deck.push(vm.newDeck[index]);
            vm.newDeck.splice(index, 1);
          }

          // Call bubble sort algorithm to sort the deck. The algorithm is called 2 times.
          // First it sorts the cards by suit and then by value!
          $scope.sortDeck = function(deck) {
            bubbleSort(deck, 'suitEnum', function () {
            });
            vm.newDeck = deck;
            bubbleSort(deck, 'valueEnum');
            return vm.newDeck;
          }

          // Implement bubbleSort algorithm!
          function bubbleSort(a, par, callback) {
              var swapped;
              do {
                  swapped = false;
                  for (var i = 0; i < a.length - 1; i++) {
                      if (a[i][par] > a[i + 1][par]) {
                          var temp = a[i];
                          a[i] = a[i + 1];
                          a[i + 1] = temp;
                          swapped = true;
                      }
                  }
              } while (swapped);
              if (callback) callback();
          }

    });
})();

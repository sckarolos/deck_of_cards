
(function () {
    angular.module('CodeTaskApp', []);

    angular.module('CodeTaskApp').controller('MainController', function ($scope, cardService) {

          let vm = this;

          vm.deck = cardService;
          vm.newDeck = [];

          console.log('before σαφολ', vm.deck);

          function testDeck() {
            this.testDeck = cardService;
          }

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

              console.log('after σαφολ', vm.deck);

              return vm.deck;
          }

          $scope.removeItem = function(index) {
            vm.newDeck.push(vm.deck[index]);
            vm.deck.splice(index, 1);
          }

          $scope.addItem = function(index) {
            vm.deck.push(vm.newDeck[index]);
            vm.newDeck.splice(index, 1);
          }

          $scope.sortDeck = function(deck) {
            bubbleSort(deck, 'suitEnum', function () {
                bubbleSort(deck, 'valueEnum');
            });
            console.log('after new sorting', deck);
            vm.newDeck = deck;
            return vm.newDeck;
          }

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

describe('Test app functionality', function() {

  var $scope, ctrl, $timeout;
  /* declare our mocks out here
   * so we can use them through the scope
   * of this describe block.
   */
  let someServiceMock;

  // This function will be called before every "it" block.
  // This should be used to "reset" state for your tests.
  beforeEach(function (){
    // Create a "spy object" for our someService.
    // This will isolate the controller we're testing from
    // any other code.
    // we'll set up the returns for this later
    someServiceMock = jasmine.createSpyObj('someService', ['cardService']);

    // load the module you're testing.
    module('CodeTaskApp');

    // INJECT!
    // $rootScope - injected to create a new $scope instance.
    // $controller - injected to create an instance of our controller.
    // $q - injected so we can create promises for our mocks.
    // _$timeout_ - injected to we can flush unresolved promises.
    inject(function($rootScope, $controller, $q, _$timeout_) {
      // create a scope object for us to use.
      $scope = $rootScope.$new();

      // assign $timeout to a scoped variable so we can use
      // $timeout.flush() later. Notice the _underscore_ trick
      // so we can keep our names clean in the tests.
      $timeout = _$timeout_;

      // now run that scope through the controller function
      ctrl = $controller('MainController', {
        $scope: $scope,
        someService: someServiceMock
      });
    });
  });

});

describe('1: Test deck length', function () {
  // it('The deck should have 52 cards', function() {
  //   expect(cardService.length).toBe(52);
  // });
});

describe('2: Test deck shuffling', function () {
  // Shuffle deck
  // let oldDeck = deck;
  // it('Check decks', function () {
  //   let newDeck = shuffleDeck(deck);
  //   expect(deck.get(0).say()).not.toEqual(newDeck[0]);
  // });
});

describe('3: Test item removal / draw', function () {
  // let testDeck = vm.deck ;
  // for (let i=0; i<12; i++) {
  //     testDeck.length -= 1;
  // }
  // expect(testDeck.length).toBe(40);
});

describe('4: Test deck sorting', function () {

});

describe('5: Test item addition', function () {

});

describe('6: Test 2nd deck length', function () {

});

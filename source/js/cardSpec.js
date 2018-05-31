// jasmine testing scripts

// describe('addition', function() {
//           it('3 + 4 should equal 7', function() {
//           expect(3 + 4).toBe(6);
//           });
// });


describe('test', function() {
    beforeEach(angular.mock.module('CodeTaskApp'));
    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    describe('product', function() {
        it ('2*3 should equal 6', function() {
            var $scope = {};
            var controller =
            $controller('MainController', {$scope: $scope});
            $scope.x = 2;
            $scope.y = 3;
            $scope.product();
            expect($scope.z).toBe(6);
        });
    });
});

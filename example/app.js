angular.module('ExampleCtrl', []).controller('ExampleCtrl', ['$scope',
    function($scope) {

        $scope.tiles = [];

        $scope.generateTiles = function() {
            for (var i = 0; i < 50; i++) {

                $scope.tiles[i] = {
                    ratio: Math.max(0.5, Math.random() * 2),
                    color: '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)
                };

            }
        };

        $scope.generateTiles();

        $scope.removeTile = function(index) {
            $scope.tiles.splice(index, 1);
        };

    }
]);

angular.module('ExampleApp', ['angular-gridify', 'ExampleCtrl']).config(function() {});

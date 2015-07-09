angular.module("starter")

  .controller("mainCtrl", ['$scope', '$interval', function($scope, $interval) {

    $scope.display = 0;
    $scope.startTime = 10;

    $scope.startBtn = function () {
      $interval(function() {
        $scope.display = $scope.startTime--;
      }, 1000);
    }

}]);

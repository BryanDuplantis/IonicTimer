angular.module("starter")

  .controller("mainCtrl", ['$scope', '$interval', function($scope, $interval) {

    $scope.display = 0;
    $scope.startTime = 10;
    // var intervalCtrl = $interval(function() {
    //     $scope.display = $scope.startTime--;
    //   }, 1000);

    $scope.startBtn = function () {
      $interval(function () {
        $scope.display = $scope.startTime--;
      }, 1000);
    }

    $scope.stopInterval = function () {
    //   if ($scope.startTime === 0) {
    //     $interval.cancel();
    //     stop = undefined;
    //   }
    }

    $scope.stopBtn = function () {
      $interval.cancel($interval);
    }

}]);

angular.module("starter")

  .controller("mainCtrl", ['$scope', '$interval', function($scope, $interval) {

    $scope.display = 0;
    $scope.startTime = 10;

    // var intervalCtrl = $interval(function() {
    //     $scope.display = $scope.startTime--;
    //   }, 1000);

    $scope.startBtn = function () {
      var myTimer = $interval(function () {
        $scope.display = $scope.startTime--;
      }, 1000, $scope.startTime + 1);
    }

    $scope.resetBtn = function() {
          $scope.display = 10;
          $scope.startTime = 10;
          $interval.cancel(myTimer);
        };

}]);

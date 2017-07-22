(function () {
  'use strict';
  const lunchLimit = 3;

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = '';
    $scope.lunchSet = '';
    $scope.style = '';

    $scope.CheckLunch = function () {
      $scope.message = '';
      if ($scope.lunchSet !== '') {

        var lunch = $scope.lunchSet.split(',');
        //remove all empty values
        lunch.removeByValue('');

        if (lunch.length <= lunchLimit) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }

        $scope.style = 'success';
      }
      else {
        $scope.message = 'Please enter data first!';
        $scope.style = 'danger';
      }
    };

    $scope.CleanCheck = function () {
      $scope.message = '';
      $scope.style = '';
    };
  };
})()

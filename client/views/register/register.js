(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Perfect Registration!');
      $location.path('/login');
    }
    function failure(response){
      toastr.error('Error during Registration. Try Again!');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();


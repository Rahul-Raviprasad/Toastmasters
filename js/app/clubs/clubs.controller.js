(function() {
  angular
    .module('app.clubsController', [])
    .controller('ClubsController', ClubsController);

  ClubsController.$inject = ['$scope'];

  function ClubsController($scope) {
    $scope.name = "Hello";
  }
})();

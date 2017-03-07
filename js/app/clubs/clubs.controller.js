(function() {
  angular
    .module('app.clubsController', ['app.clubsService'])
    .controller('ClubsController', ClubsController);

  ClubsController.$inject = ['$scope', 'ClubService'];

  function ClubsController($scope, ClubService) {
    var vm = this;

    vm.clubs = ClubService.getClubs();
  }
})();

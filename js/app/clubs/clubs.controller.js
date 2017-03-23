(function() {
  angular
    .module('app.clubsController', ['mock.clubs.service'])
    .controller('ClubsController', ClubsController);

  ClubsController.$inject = ['$scope', 'ClubService'];

  function ClubsController($scope, ClubService) {
    var vm = this;

    ClubService.getClubs()
      .then(function(response) {
        vm.clubs = response.clubs;
      });
  }
})();

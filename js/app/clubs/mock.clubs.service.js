(function() {
  angular
    .module('mock.clubs.service', [])
    .factory('ClubService', ClubService);

  ClubService.$inject = ['$q'];

  function ClubService($q) {
    var vm = this;

    vm.getClubs = getClubs;

    return vm;
    // -----------------------------------

    function getClubs() {
      return $q.when({
        clubs: [
          {
            name: 'Hyderabad',
            description: "A cool place to hangout and learn"
          },
          {
            name: 'Data Science group',
            description: 'meet some of the most enthusiatic data scientist'
          },
          {
            name: 'Football group',
            description: 'play soccer and get some cardio done as well'
          }
        ]
      });
    }
  }
})();

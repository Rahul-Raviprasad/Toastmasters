(function() {
  angular
    .module('app.meetingsService', [])
    .factory('MeetingsService', MeetingsService);

  MeetingsService.$inject = ['$q'];

  function MeetingsService($q) {
    var vm = this;

    vm.getMeetings = getMeetings;

    return vm;

    //// -----------------------------

    function getMeetings(ClubName) {
      return $q.when([{
        name: 'Saturday meet',
        location: 'nalanada'
      },
      {
        name: 'Sunday meet',
        location: 'nalanada'
      }]);
    }
  }
})();

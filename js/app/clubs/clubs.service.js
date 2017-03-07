angular
  .module('app.clubsService', [])
  .factory('ClubService', ClubService);

function ClubService() {
  var vm = this;

  vm.getClubs = getClubs;

  /////////----------------------------------------------

  function getClubs() {
    return {
      clubs: [
        {
          name: 'Hyderabad',
          description: "A cool place to hangout and learn"
        },
        {
          name: 'Data Science group',
          description: 'meet some of the most enthusiatic data scientist'
        }
      ]
    };
  }
}

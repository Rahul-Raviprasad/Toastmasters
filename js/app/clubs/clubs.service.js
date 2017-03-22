angular
  .module('app.clubsService', ['app.common.auth'])
  .factory('ClubService', ClubService);

ClubService.$inject = ['$q', '$http', 'AuthenticationService'];

function ClubService($q, $http, AuthenticationService) {
  var vm = this;

  vm.getClubs = getClubs;

  return vm;

  /////////----------------------------------------------

  function getClubs() {
    AuthenticationService.SetCredentials('username', 'password');

    return $http.get('https://rahulraviprasad.service-now.com/api/now/table/x_snc_toastmaster1_clubs?sysparm_fields=name%2Cshort_description');
    // return $q.when({
    //   clubs: [
    //     {
    //       name: 'Hyderabad',
    //       description: "A cool place to hangout and learn"
    //     },
    //     {
    //       name: 'Data Science group',
    //       description: 'meet some of the most enthusiatic data scientist'
    //     },
    //     {
    //       name: 'Football group',
    //       description: 'play soccer and get some cardio done as well'
    //     }
    //   ]
    // });
  }
}

(function () {

  angular
    .module('app.clubs.routes',[])
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('clubs', {
        url: '/clubs',
        templateUrl: 'js/app/clubs/clubs.client.view.html',
        controller: 'ClubsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Clubs'
        }
      })
  }

})();

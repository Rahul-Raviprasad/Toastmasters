(function () {
  angular
    .module('app.clubs.routes',[])
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('clubs', {
        url: '/clubs',
        templateUrl: 'js/app/clubs/templates/clubs-list.tpl.html',
        controller: 'ClubsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Clubs'
        }
      })
      .state('clubs.details', {
        url: '/clubs/detailsID',
        templateUrl: '',
        controller: 'ClubsController',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/app/clubs/templates/club-register.tpl.html',
        controller: 'ClubsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Register Club'
        }
      })
  }

})();

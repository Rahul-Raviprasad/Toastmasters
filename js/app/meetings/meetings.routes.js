(function() {
  angular
    .module('app.meetings.routes', [])
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('meetings', {
        url: '/meetings',
        templateUrl: 'js/app/meetings/meetings.tpl.html',
        controller: 'ClubsController',
        controllerAs: 'vm'
      });

  }
})();

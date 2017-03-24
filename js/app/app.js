angular
  .module('app', ['ui.router', 'app.clubs', 'app.profile', 'app.meeting'])
  .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: ''
      })
  }

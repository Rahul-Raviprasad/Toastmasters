angular
  .module('app', ['ui.router', 'app.clubs', 'app.profile', 'app.meeting'])
  .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.tpl.html'
      })
      .state('about', {
        url: 'about',
        templateUrl: 'templates/about.tpl.html'
      })
  }

(function() {
  angular
    .module('app.profile', [])
    .factory('ProfileService', ProfileService);

  ProfileService.$inject = ['$q'];

  function ProfileService($q) {
    var vm =  this;

    vm.getProfile =  getProfile;

    return vm;

    // ---------------------------------------------------
    function getProfile() {
      return $q.when({
        firstName: 'Rahul',
        lastName: 'Raviprasad',
        roles: ['admin', 'member']
      });
    }
  }
})();

(function() {
  angular
    .module('app.profileController', ['app.profileService'])
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['ProfileService'];
  function ProfileController(ProfileService) {
    var vm =  this;

    ProfileService.getProfile()
                  .then(function(response) {
                    vm.profile = response;
                  });
  }
})();

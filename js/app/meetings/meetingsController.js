(function(){
  angular
    .module('app.meetingsController', ['app.meetingsService'])
    .controller('MeetingsController', MeetingsController);

  MeetingsController.$inject = ['MeetingsService'];

  function MeetingsController(MeetingsService) {
    var vm  = this;
    vm.name = "hi";
    MeetingsService.getMeetings('club1')
      .then(function(response) {
        vm.meetings = response;
      });




  }

})();

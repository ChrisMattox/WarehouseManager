var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/potato' ,{
      templateUrl: '/views/templates/potato.html',
      controller: 'PotatoController',
      controllerAs: 'potato'
    })
    .when('/armfalloffboy' ,{
      templateUrl: '/views/templates/armfalloffboy.html',
      controller: 'ArmFallOfBoyController',
      controllerAs: 'armFallOffBoy'
    })
    .when('/hindsightlad' ,{
      templateUrl: '/views/templates/hindsightlad.html',
      controller: 'HindsightLadController',
      controllerAs: 'hindsightLad'
    })
    .otherwise({
      redirectTo: 'home'

    });
}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('PotatoController', function() {
  console.log('potato controller running');
  var self = this;

});

app.controller('ArmFallOfBoyController', function() {
  console.log('Arm Fall Off Boy controller running');
  var self = this;

});

app.controller('HindsightLadController', function() {
  console.log('HindsightLad controller running');
  var self = this;
  

});

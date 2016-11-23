var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/warehouse' ,{
      templateUrl: '/views/templates/warehouse.html',
      controller: 'WarehouseController',
      controllerAs: 'warehouse'
    })
    .when('/customers' ,{
      templateUrl: '/views/templates/customers.html',
      controller: 'CustomersController',
      controllerAs: 'customers'
    })
    .when('/orders' ,{
      templateUrl: '/views/templates/orders.html',
      controller: 'OrdersController',
      controllerAs: 'orders'
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

//warehouse controller
app.controller('WarehouseController', function() {
  console.log('warehouse controller running');
  var self = this;
  self.message = "Warehouse controller is the best!"

//get request for warehouse data
  function getWarehouse() {
    $http.get('/warehouse')
    .then(function(response){
      self.warehouse = response.data;
    });
  }

});//end warehouse controller

app.controller('CustomerController', function() {
  console.log('customer controller running');
  var self = this;

  //request to get customer data
  function getCustomer() {
    $http.get('/customer')
    .then(function(response){
      self.customer = response.data;
    });
  }

});

app.controller('OrdersController', function() {
  console.log('orders controller running');
  var self = this;
  function getOrders() {
    $http.get('routes/orders')
    .then(function(response){
      self.orders = response.data;
    });
  }


});

//Module
var myApp = angular.module('myapplication', ['ngRoute', 'ngResource', 'ng-rails-csrf']);
//Routes
myApp.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/users',{
            templateUrl: '/assets/templates/users/index.html',
            controller: 'UserListCtr'
        });
        $routeProvider.when('/users/new',{
            templateUrl: '/assets/templates/users/new.html',
            controller: 'UserAddCtr'
        });
        $routeProvider.when('#/users/:id/edit',{
            templateUrl: '/assets/templates/users/edit.html',
            controller: 'UserUpdateCtr'
        });
        $routeProvider.when('/products/new',{
            templateUrl: '/assets/templates/products/new.html',
            controller: 'ProductAddCtr'
        });
        $routeProvider.when('/products',{
            templateUrl: '/assets/templates/products/index.html',
            controller: 'ProductListCtr'
        });
        $routeProvider.when('/inventories',{
            templateUrl: '/assets/templates/inventories/index.html',
            controller: 'InventoryListCtr'
        });
        $routeProvider.when('/inventories/new',{
            templateUrl: '/assets/templates/inventories/new.html',
            controller: 'InventoryAddCtr'
        });
        $routeProvider.otherwise({
            redirectTo: '/users'
        });
    }
]);


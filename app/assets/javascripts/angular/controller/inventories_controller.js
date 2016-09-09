myApp.controller("InventoryAddCtr", ['$scope', '$resource', '$location','Products', 'Inventories', function($scope, $resource, $location, Products, Inventories) {
    $scope.products = Products.query();
    $scope.inventory = {inventory: [{quantity: '', total_price: '', price: ''}]}
    $scope.saveInventory = function () {
        if ($scope.inventoryForm.$valid){
            Inventories.create({inventory: $scope.inventory}, function(){
                $location.path('/');
            }, function(error){
                console.log(error)
            });
        }
    }
}]);

myApp.controller("InventoryListCtr", ['$scope', '$http', '$resource', 'Inventories', '$location', function($scope, $http, $resource, Inventories, $location) {
    $scope.inventories = Inventories.query();
}]);
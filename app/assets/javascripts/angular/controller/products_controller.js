myApp.controller("ProductListCtr", ['$scope', '$http', '$resource', 'Products', '$location', function($scope, $http, $resource, Products, $location) {
    $scope.products = Products.query();
}]);

myApp.controller("ProductAddCtr", ['$scope', '$resource', 'Products', 'Users', '$location', function($scope, $resource, Products, Users ,$location) {
    $scope.names = Users.query();
    $scope.product = {product: [{name: '',user_id: '',price: ''}]}
    $scope.saveProduct = function () {
        if ($scope.productForm.$valid){
            Products.create({product: $scope.product}, function(){
                $location.path('/');
            }, function(error){
                console.log(error)
            });
        }
    }
}]);
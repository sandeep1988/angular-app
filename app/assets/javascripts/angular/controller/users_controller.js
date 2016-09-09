//Controller
myApp.controller("UserListCtr", ['$scope', '$http', '$resource', 'Users', 'User', '$location', function($scope, $http, $resource, Users, User, $location) {
    $scope.users = Users.query();
    $scope.deleteUser = function (userId) {
        if (confirm("Are you sure you want to delete this user?")){
            User.delete({ id: userId }, function(){
                $location.path('/');
            });
        }
    };
}]);

myApp.controller("UserAddCtr", ['$scope', '$resource', 'Users', '$location', function($scope, $resource, Users, $location) {
    $scope.user = {user: [{first_name: '', last_name: '', email: '', gender: '' }]}
    $scope.users = Users.query();
    $scope.save = function () {
        if ($scope.userForm.$valid){
            Users.create({user: $scope.user}, function(){
                //$scope.users.push($scope.user);
                $location.path('/');
            }, function(error){
                console.log(error)
            });
        }
    }
}]);

myApp.controller("UserUpdateCtr", ['$scope', '$resource', 'User', '$location', '$routeParams', function($scope, $resource, User, $location, $routeParams) {
    $scope.user = User.get({id: $routeParams.id})
    $scope.update = function(){
        if ($scope.userForm.$valid){
            User.update($scope.user,function(){
                $location.path('/');
            }, function(error) {
                console.log(error)
            });
        }
    };
}]);


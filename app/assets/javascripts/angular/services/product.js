myApp.factory('Products', ['$resource',function($resource){
    return $resource('/products.json', {},{
        query:  { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
}]);
myApp.factory('Users', ['$resource',function($resource){
    return $resource('/users.json', {},{
        query:  { method: 'GET', isArray: true }
    })
}]);
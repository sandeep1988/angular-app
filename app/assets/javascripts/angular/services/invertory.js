myApp.factory('Inventories', ['$resource',function($resource){
    return $resource('/inventories.json', {},{
        query:  { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
}]);
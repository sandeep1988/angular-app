//Factory fo listing and create
myApp.factory('Users', ['$resource',function($resource){
    return $resource('/users.json', {},{
        query:  { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
}]);
//Factory fo show, update and delete
myApp.factory('User', ['$resource', function($resource){
    return $resource('/users/:id.json', {}, {
        delete: { method: 'DELETE', params: {id: '@id'} },
        update: { method: 'PUT', params: {id: '@id'} },
        show: { method: 'GET' }
    });
}]);
//Factory Test show data
myApp.factory('testFactory', function(){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }
    }
});
myApp.service('testService', function(){
    this.sayService = function(text){
        return "Service says \"Hello " + text + "\"";
    };
});
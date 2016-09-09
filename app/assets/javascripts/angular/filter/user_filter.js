myApp.filter('makeUppercase', function () {
    return function (name) {
        return name.toUpperCase();
    };
});
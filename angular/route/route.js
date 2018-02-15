
myApp.config(['$routeProvider',function($routeProvider){

$routeProvider
.when('/',{
controller:  'mainController',
controllerAs: 'mainCtrl',
templateUrl: 'views/main.html',
})

.when('/characters/:charNo',{
controller     : 'characterController',
controllerAs   : 'charCtrl',
templateUrl	   : 'views/characterDetails.html'
})

.when('/book/:bookNo',{
controller   : 'bookController',
controllerAs : 'bookCtrl',
templateUrl  : 'views/bookDetails.html'
})

.when('/house/:houseNo',{
controller :'houseController',
controllerAs:'houseCtrl',
templateUrl:'views/houseDetails.html'
})

.otherwise({
template: '<h1 style ="text-align :center"> Error 404 !!  Page Not Found </h1>'
});

}]);
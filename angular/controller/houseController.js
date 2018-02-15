
myApp.controller('houseController',['$http','$routeParams','apiService',function($http,$routeParams,apiService){

var main =this;
this.houseData={};
this.houseNo= $routeParams.houseNo;


this.getHouseData =function(){
apiService.getHouseApi().then(function success(response){
console.log(response.data);
angular.forEach(response.data,function(value){

if(main.houseNo===value.url.split('/').pop()){

	main.houseData = value;
	console.log(main.houseData);
}

});// end of forEach

},function error(response){
	console.log(response);
alert("error occured checj console");
});


}; // end of function
this.getHouseData();

}])
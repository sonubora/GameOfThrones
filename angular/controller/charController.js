
myApp.controller('characterController',['$http','$routeParams','apiService',function($http,$routeParams,apiService){
var main =this;
this.charData={};
this.cNo=$routeParams.charNo;


this.getCharacterData =function(){

apiService.getCharactersApi().then(function successful(response){
	console.log("character details controller is loaded  with below response data");
console.log(response.data);

angular.forEach(response.data,function(value){

if(value.url.split('/').pop()===main.cNo)
{
 main.charData= value;
 console.log(main.charData);

}


}); // end of forEach loop

},function error(response){
alert("some error occur. check console");
console.log(response);

});

}; // end of function 

this.getCharacterData();




}]);
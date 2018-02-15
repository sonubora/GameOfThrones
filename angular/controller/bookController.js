
myApp.controller('bookController',['$http','$routeParams','apiService',function($http,$routeParams,apiService){

var main = this;
this.bookData={};
this.bookNo =$routeParams.bookNo;

this.getBookData =function(){

apiService.getBooksApi().then(function success(response){
console.log(response);
angular.forEach(response.data,function(value){
 if(main.bookNo===value.url.split('/').pop()){
 
  main.bookData= value;
  console.log(main.bookData);
 } 

});

},function error(response){
  console.log(response);
  alert("error occur please check console");
});


};// end of getBook Data function

this.getBookData();


}]);
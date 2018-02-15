
myApp.service('apiService',function($http){
var main = this;
this.baseUrl ="https://www.anapioficeandfire.com/api";

this.getMainApi=function(){
return $http.get(main.baseUrl);
};

this.getCharactersApi =function(){
return $http.get(main.baseUrl+'/characters?page=2&pageSize=20');
};

this.getBooksApi =function(){
return $http.get(main.baseUrl+'/books?page=1&pageSize=20');
};

this.getHouseApi = function(){
return $http.get(main.baseUrl+'/houses?page=1&pageSize=20');	
};

});
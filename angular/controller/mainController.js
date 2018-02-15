
myApp.controller('mainController',['$http','$routeParams','apiService',function($http,$routeParams,apiService){
var main = this;

this.allCharacters=[];
this.allBooks=[];
this.allHouses=[];
this.allData=[];

this.allCards=true;
this.characterCards=false;
this.bookCards=false;
this.houseCards=false;

this.sortData=[
{
name:'Ascending Order',
value :false
},
{
name:'Descending Order',
value :true
}
  ];
this.orderByValue=false;


this.loadAllCards = function(){

apiService.getCharactersApi().then(function successCallback(response){
console.log("main  controller is loaded  with below response data");

   console.log(" all characters response");
   console.log(response);
   main.allCharacters=response.data;

    main.allData.push.apply(main.allData,main.allCharacters);
    
  },function errorCallback(response){
   console.log(response);
   alert("Some Error Occured check your console");
}); // end of character api service

apiService.getBooksApi().then(function successCallback(response){
   console.log("all books response");
   console.log(response);
   main.allBooks=response.data;

   main.allData.push.apply(main.allData,main.allBooks);
   
},function errorCallback(response){
	console.log(response);
    alert("Some Error Occured check your console");
}); // end of book api service
	
apiService.getHouseApi().then(function successCallback(response){
   console.log("all houses response");
   console.log(response);
   main.allHouses=response.data;

   main.allData.push.apply(main.allData,main.allHouses);
    
  },function errorCallback(response){
    console.log(response);
    alert("Some Error Occured check your console");
}); // end of house api service
  
} // end of loadAllCards function

this.loadAllCards();



this.allCardsClick =function(){
main.allCards=true;
main.characterCards=false;
main.bookCards=false;
main.houseCards=false;
console.log("all cards click");
};

this.characterCardsClick =function(){
main.allCards=false;
main.characterCards=true;
main.bookCards=false;
main.houseCards=false;
console.log("character cards click");
};

this.bookCardsClick =function(){
main.allCards=false;
main.characterCards=false;
main.bookCards=true;
main.houseCards=false;
console.log("book cards click");
};

this.houseCardsClick =function(){
main.allCards=false;
main.characterCards=false;
main.bookCards=false;
main.houseCards=true;
console.log("house cards click");
};


this.sortSelectData= function(item){

main.orderByValue =item.value;
console.log("Sorting now in "+item.name +"  having  value "+main.orderByValue);

};


}]);// end of main controller
myApp.directive('characterDir',function(){

return{

restrict: 'E',
templateUrl:'views/charTemplate.html',
scope:{
character:'='

},
controller: function($scope){
},

link: function(scope,elem,attr){
}


}

});
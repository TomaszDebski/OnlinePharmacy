/**
 * 
 */
angular.module('app.controller.orderProgress', [])
.controller('orderProgressController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter) {
		cartService.getCart().stages =[
        { stageNumber : 1 ,isComplete : true, isBegin : true, description : ''},                       
        { stageNumber : 2 ,isComplete : false, isBegin : true, description : ''}, 
        { stageNumber : 3 ,isComplete : false,isBegin : false, description : ''},
        { stageNumber : 4 ,isComplete : false,isBegin : false, description : ''},
        { stageNumber : 5 ,isComplete : false,isBegin : false, description : ''}
        ]
		$scope.stages = cartService.getCart().stages;
//		console.log('orderProgressController')
})
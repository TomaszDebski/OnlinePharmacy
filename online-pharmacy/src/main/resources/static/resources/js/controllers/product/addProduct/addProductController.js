/**
 * @author Tomasz Dębski
 *
 */

angular.module('app.controller.addProduct', [])
.controller('addProductController',
		function($scope,$log,$state,$stateParams,$filter,cartService,categoryService,uiUploader,categoryResolve,productService) { 
  
   $scope.newProduct = {};
   $scope.model = {};
   $scope.categories = categoryResolve;
   $scope.imgNumber = ''
   $scope.update = function(){
	   $scope.model.subcategory = $scope.model.mainCategory.subcategory[0];
   }
   $scope.countOfPack = [{id:1,name:'',price:''}];
   $scope.isShouldIncrease = true;
    
    $scope.addProductFnc = function(){
    	if ($scope.addProductForm.$valid) {      
	    }
	    else {
	        $scope.addProductForm.submitted=true;    
	    	return;
	    };
        $scope.newProduct.packages = [];
        for(let i =0 ; i<$scope.countOfPack.length; i++){
            $scope.newProduct.packages.push($scope.countOfPack[i]);
        }
        productService.save({categoryId:$scope.model.subcategory.id},$scope.newProduct,function(data){
        	swal('Powodzenie', 'Dodanie produktu zakończyło się powodzeniem', "success");
        })
    }
    
    $scope.zwieksz = function(){
    	var length = $scope.countOfPack.length;
        $scope.countOfPack.push({id:++length,name:"",price:''})
    }
    
    uiUploader.removeAll();
    $scope.btn_upload = function() {
    	console.log('$scope.model.subcategory.number',$scope.model.subcategory.number);
        uiUploader.startUpload({
            url: '/api/product/upload' + '?categoryNumber=' + $scope.model.subcategory.number,
            concurrency: 1,
            onProgress: function(file) {
            	console.log('onProgress')
                $scope.$apply();
            },
            onCompleted: function(file, response) {
            	console.log('onCompleted',response)
                $scope.imgNumber = response;
                $scope.$apply();
                
            }
        });
    };
    $scope.disableBtnUpload = true;
    $scope.files = {};
    var element = document.getElementById('file1');
    element.addEventListener('change', function(e) {
    	console.log('change')
        var files = e.target.files;
        uiUploader.addFiles(files);
        $scope.files = uiUploader.getFiles();
        $scope.disableBtnUpload = false;
        $scope.$apply();
    });
    
    $scope.btn_remove = function(file){
    	uiUploader.remove(file);
    }
})
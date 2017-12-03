/**
 * New typescript file
 */
angular.module('app.controller.addProduct', [])
.controller('addProductController',
		function($scope,$log,$state,$stateParams,$filter,cartService,categoryService,uiUploader,categoryResolve,productService) { 
  
//   model: any = {};
   $scope.newProduct = {};
   $scope.model = {};
   $scope.categories = categoryResolve;
   $scope.imgNumber = ''
   
   $scope.update = function(){
	   $scope.model.subcategory = $scope.model.mainCategory.subcategory[0];
   }
   console.log('addProduct')
//   imgNumber : string = "";
//   categories : any = [];
//    mainCategory: any = -1;
//   categoryId : any = {id: 0};
//   subcategories : any = [];
//    count:number = 1;
   		$scope.countOfPack = [{id:1,name:'',price:''}];
//    pack : any ="";
   $scope.isShouldIncrease = true;
    
//    ngOnInit(){
//       this.categoryService.getAll()
//            .subscribe(
//                data => {
//                    console.log('categories ' ,data.json());
//                    this.categories = data.json().filter(item => item.id !=10);
////                    this.categories.slice({name:'Wybierz'});
////                    this.mainCategory = ;
////                    this.categories = this.categories.shift();
//                },
//                error => {
//                    console.log("nie udało się");
//               });
//            console.log('this.product ' , this.newProduct);   
//    }
    
//    changeImg(number1: string){
//        console.log('number ',number1);
//        this.imgNumber = number1;
//    }
    
    $scope.addProductFnc = function(){
    	if ($scope.addProductForm.$valid) {      
	    }
	    else {
	        $scope.addProductForm.submitted=true;    
	    	return;
	    };
        console.log('this.newProduct ' , this.newProduct)
        $scope.newProduct.packages = [];
        for(let i =0 ; i<$scope.countOfPack.length; i++){
            $scope.newProduct.packages.push($scope.countOfPack[i]);
        }
        productService.save({categoryId:$scope.model.subcategory.id},$scope.newProduct,function(data){
        	console.log('dodano product',data)
        	swal('Powodzenie', 'Dodanie produktu zakończyło się powodzeniem', "success");
        })
    }
    
    $scope.zwieksz = function(){
//    	alert('111111111');
//        console.log('this.countOfPack[this.countOfPack.length -1]' , this.countOfPack[this.countOfPack.length -1]);
//        if ($scope.countOfPack[$scope.countOfPack.length -1].name == '' ||
//        		$scope.countOfPack[$scope.countOfPack.length -1].price == ''){
//        	$scope.isShouldIncrease = false;
//            return;
//        }
    	console.log('$scope.countOfPack.length',$scope.countOfPack.length)
    	var length = $scope.countOfPack.length;
    	console.log("length ",length)
        $scope.countOfPack.push({id:++length,name:"",price:''})
        console.log('this.countOfPack',$scope.countOfPack);
    }
    
//    changeCategory(category){
//        this.subcategories = category.subcategory;
////        if (this.subcategories.length > 0){
////            this.categoryId = this.subcategories[0];
////        }
////        console.log('categoryyyy ', category);    
//    };
    
    
//    changePack($event){
//       
//        let indexOfEvent = this.countOfPack.findIndex(function findIndexOfPack(pack) {
//             console.log('pack.id',pack.id);
//             console.log('$event.id',$event.id);
//            return pack.id == $event.id});
//        console.log("indexOfEvent ",indexOfEvent);
//        this.countOfPack[indexOfEvent].name = $event.name;
//        this.countOfPack[indexOfEvent].price = $event.price;
////        console.log("countOfPack ",this.countOfPack);
//    }
    
    
//    uploadFile(){
//        this.fileUploadComponent.upload('ddddd').subscribe(
//                data => {
//                    console.log('udało sięeee');
////                    this.alertService.success('Registration successful', true);
////                    this.router.navigate(['/login']);
//                },
//                error => {
//                    console.log('nie udało się');
////                    this.alertService.error(error);
////                    this.loading = false;
//                });
//    }
  
//  register() {
////        this.loading = true;
//        console.log("model " ,this.model);
//        this.userService.create(this.model)
//            .subscribe(
//                data => {
////                    this.alertService.success('Registration successful', true);
////                    this.router.navigate(['/login']);
//                },
//                error => {
////                    this.alertService.error(error);
////                    this.loading = false;
//                });
//}
    
    uiUploader.removeAll();
    $scope.btn_upload = function() {
        $log.info('subCategory...',$scope.model.subcategory.number);
        uiUploader.startUpload({
            url: '/api/product/upload' + '?categoryNumber=' + $scope.model.subcategory.number,
            concurrency: 1,
//            data : {'object' : 'physiotherapist'},
//            headers : {
//                'Content-Type': 'application/x-www-form-urlencoded',
//                xsrfHeaderName: 'XMLHttpRequest',
//            }
//    			,
            
            onProgress: function(file) {
            	
                $log.info('onProgress ' +file.name + '=' + file.humanSize);
                $scope.$apply();
            },
            onCompleted: function(file, response) {
                $log.info('response ' + response);
                $log.info('$scope.imgNumber ' + $scope.imgNumber);
                $scope.imgNumber = response;
                $log.info('$scope.imgNumber ' + $scope.imgNumber);
                $scope.$apply();
                
            }
        });
    };
    $scope.disableBtnUpload = true;
    $scope.files = {};
    var element = document.getElementById('file1');
    element.addEventListener('change', function(e) {
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
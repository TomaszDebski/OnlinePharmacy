/**
 * 
 */
angular.module('app.config', [])
.config(function($stateProvider, $urlRouterProvider,$locationProvider,$compileProvider,$httpProvider) {
	$stateProvider
	.state('home', {
		url:"/",
		templateUrl : 'html/home.html',
		controller : 'homeController',
	})
	.state('home.child', {
		controller : 'menuController',
		resolve : {
			categoryResolve : function($stateParams,categoryService){
				return categoryService.getAll().then(function(result){
					return result.data;
				});
			}
		}
	})
	.state('login', {
		url: '/login',
		templateUrl : 'html/login.html',
		controller : 'loginController'
	})
	.state('logout', {
		url: '/logout',
		templateUrl : 'html/logout.html',
		controller : 'logoutController',
	})
	.state('register', {
		url: '/register',
		templateUrl : 'html/register.html',
		controller : 'registerController',
	})
	.state('medicineList', {
		url: '/medicine',
		templateUrl : 'html/medicineList.html',
		controller : 'medicineListController',
		params : {
			name : 'pain-relief'
		},
		resolve : {
			oneCategoryResolve : function($stateParams,categoryService){
				return categoryService.getByName($stateParams.name).then(function(result){
//						console.log('result111',result);
						return result.data;
//						$scope.products = result.data.products;
//						$scope.category = result.data;
					})
//				}
			},
			productsResolve : function($stateParams,productPaginationService){
				return productPaginationService.getProductByCategory(0,9,$stateParams.name)
				.then(function(result){
			    	return result;
			    })
//				}
			},
			
			
			categoryResolve : function($stateParams,categoryService){
				return categoryService.getAll().then(function(result){
					return result.data;
				});
			}
		}
	})
	.state('product', {
		url: '/product/:id',
		templateUrl : 'html/product/product.html',
		controller : 'productController',
		resolve : {
			productResolve : function($stateParams,productService){
				return productService.get({id:$stateParams.id}).$promise.then(function(data){
					return data;
				});
			},
			categoryResolve : function($stateParams,categoryService){
				return categoryService.getAll().then(function(result){
					return result.data;
				});
			},
			oneCategoryResolve : function($stateParams,categoryService){
				return categoryService.getCategoryByProductId($stateParams.id).then(function(result){
//						console.log('getCategoryByProductId',result);
						return result.data;
//						$scope.products = result.data.products;
//						$scope.category = result.data;
					})
//				}
			},
			
		},
		params : {
			categoryName : ''
		}
	})
	.state('addProduct', {
		url: '/addProduct',
		templateUrl : 'html/product/addProduct/addProduct.html',
		controller : 'addProductController',
		resolve : {
			categoryResolve : function($stateParams,categoryService){
				return categoryService.getAll().then(function(result){
					return result.data;
				});
			}
		}
//		resolve : {
//			productResolve : function($stateParams,productService){
//				return productService.get({id:$stateParams.id}).$promise.then(function(data){
//					return data;
//				});
//			}
//		}
	})
	.state('addCategory', {
		url: '/category/add',
		templateUrl : 'html/category/addCategory.html',
		controller : 'addCategoryController',
		resolve : {
			categoryResolve : function($stateParams,categoryService){
				return categoryService.getAll().then(function(result){
					return result.data;
				});
			}
		}
	})
	.state('shoppingCart', {
		url: '/shoppingCart',
		templateUrl : 'html/orderWorkflow/shoppingCartSummary.html',
		controller : 'shoppingCartSummaryController',
		params : {
			
//			name : 'pain-relief'
		}
	})
	
	.state('order', {
		url: '/order',
		abstract : true,
		templateUrl : 'html/orderWorkflow/orderProgress.html',
		controller : 'orderProgressController',
		params: {
			showMenu : false,
		}
	})
	.state('order.recognize', {
		url: '/recognize',
		templateUrl : 'html/orderWorkflow/steps/zero_step.html',
		controller : 'zero_stepController',
		params: {
			showMenu : false,
		}
	})
	.state('order.delivery', {
		url: '/delivery',
		templateUrl : 'html/orderWorkflow/steps/one_orderDelivery.html',
		controller : 'one_orderDeliveryController',
		params: {
			showMenu : false,
		},
		resolve : {
			loginUserResolve : function($rootScope,$window,userService,$http){
				if ($rootScope.authenticated == 'true' && $window.sessionStorage != undefined){
					return $http({
			            method: 'GET',
			            url: '/api/user/'+$window.sessionStorage.id})
			           .then(function(result){
//						console.log('result.data',result.data)
						return result.data;
					})
//				}else{
//					return null;
				}
			}
		}
	})
	.state('order.shipping', {
		url: '/shipping',
		templateUrl : 'html/orderWorkflow/steps/two_orderShipping.html',
		controller : 'two_orderShippingController',
		params: {
			showMenu : false,
		}
	})
	.state('order.payment', {
		url: '/payment',
		templateUrl : 'html/orderWorkflow/steps/three_orderPayment.html',
		controller : 'three_orderPaymentController',
		params: {
			showMenu : false,
		}
	})
	.state('order.summary', {
		url: '/summary',
		templateUrl : 'html/orderWorkflow/steps/four_orderSummary.html',
		controller : 'four_orderSummaryController',
		params: {
			showMenu : false,
		}
	})
	.state('forgotPassoword', {
		url: '/password/forgot',
		templateUrl : 'html/password/forgotPassword/forgotPassword.html',
		controller : 'forgotPasswordController',
		params : {
//			name : 'pain-relief'
		}
	})
	.state('users', {
		url: '/users',
		templateUrl : 'html/admin/users.html',
		controller : 'usersController',
		params : {
//			name : 'pain-relief'
		},
		resolve : {
			usersResolve : function($stateParams,userPaginationService){
//				console.log('usersResolve')
				return userPaginationService.getAllUser(0,10).then(function(result){
//					console.log('usersResolve.content',result.content)
					return result;
				});
			}
		}
	})
	.state('carts', {
		url: '/user/:id/carts',
		templateUrl : 'html/cart/carts.html',
		controller : 'cartsController',
		params : {
//			name : 'pain-relief'
		},
		resolve : {
			cartResolve : function(cartPaginationService,$stateParams){
				return cartPaginationService.getCartByUser($stateParams.id,0).then(function(result){
					return result;
				})
			}
		}
	})
	.state('cartDetails', {
		url: '/user/:userId/cartDetails/:id',
		templateUrl : 'html/cart/cartDetails.html',
		controller : 'cartDetailsController',
		params : {
//			name : 'pain-relief'
		},
		resolve : {
			cartDetailsResolve : function(cartDetailsService,$stateParams){
//				console.log('config $stateParams id',$stateParams.id)
				return cartDetailsService.getCartDetails($stateParams.id).then(function(result){
					console.log('config result',result)
					return result;
				})
			}
		}
	})
	.state('searchAll', {
		url: '/searchAll',
		templateUrl : 'html/search/searchAll.html',
		controller : 'searchAllController',
		params : {
			name : ''
		},
		resolve : {
			productByNameResolve : function(productUtilsService,$stateParams){
				return productUtilsService.getProductsByName($stateParams.name).then(function(result){
					console.log('config search all result',result)
					return result;
				})
			}
		}
	})
	
	
	
	
	
	
//	
//	
//	.state('showAllPhysiotherapists', {
//		url: '/showAllPhysiotherapists',
//		templateUrl : 'html/allPhysiotherapists.html',
//		controller : 'allPhysiotherapistController',
//	})
//	.state('contact', {
//		url: '/contact',
//		templateUrl : 'html/contact.html',
//		controller : 'contactController',
//	})
//	
//	.state('addPatient', {
//		url: '/addPatient',
//		templateUrl : 'html/addPatient.html',
//		controller : 'addPatientController'
//	})
//	.state('allPatients', {
//	url: '/allPatients',
//	templateUrl : 'html/patients.html',
//	controller : 'patientsController',
//	resolve: {
//		patients: function($http,$rootScope,$window){
//			$rootScope.id = $window.sessionStorage.id;
//			return $http.get('patient/patientsPagination?page=0&size=10&id=' + $rootScope.id)
//				.success(function(data,status,headers,config){
//					return data;
//				}).error(function(data,status,headers,config){
//					console.log("error");
//				})
//			}
//		  }
//	})
//	.state('visits', {
//		url: '/visits',
//		templateUrl : 'html/visits.html',
//		controller : 'visitsController as ctrl',
//		resolve: {
//			visits : function($rootScope,visitPaginationService,$stateParams){
//				var curr = new Date; 
//				var earlierDay = curr.setDate(curr.getDate()-7);
//				if ($stateParams.patient_id != null){
//					return visitPaginationService.getVisit(0,10,earlierDay,new Date(),$stateParams.patient_id)
//					.then(function(result){
//				    	return result.content;
//				    })
//				}
//			},
//			patients : function(allPatientsForPhysiotherapistService,$rootScope,$window){
//				$rootScope.user = $window.sessionStorage.user;
//      		  return allPatientsForPhysiotherapistService.getPatients()
//      		  .then(function(result){
//      	    	return result;
//      	    })
//      	  }
//		},
//		params : {
//			patient_id : null
//		}
//	})
//	.state('visit', {
//		url: '/visit/:id',
//		templateUrl : 'html/visit.html',
//		controller : 'visitController',
//		resolve : {
//			visit : function(visitService,$stateParams){
//				return visitService.get({id:$stateParams.id}).$promise.then(function(data){
//					return data;
//				});
//			}
//		}
//	})
//	.state('addVisit', {
//		url: '/addVisit',
//		templateUrl : 'html/addVisit.html',
//		controller : 'addVisitController as ctrl',
//		resolve : {
//			patients : function(allPatientsForPhysiotherapistService,$rootScope,$window){
//				$rootScope.user = $window.sessionStorage.user;
//      		  return allPatientsForPhysiotherapistService.getPatients()
//      		  .then(function(result){
//      	    	return result;
//      	    })
//      	  },
//      	  	services : function(serviceService){
//      	  		return serviceService.query(function(data) {
//      	  			return data;
//      	  		});
//      	  	}
//		},
//		params : {
//			patientId :null
//		}
//	})
//	.state('patient', {
//		url: '/patient/:id',
//		templateUrl : 'html/patient.html',
//		controller : 'patientController as vm',
//		resolve : {
//			patient : function($stateParams,patientService){
//				return patientService.get({id:$stateParams.id}).$promise.then(function(data){
//					return data;
//				});
//			}
//		}
//	})
//	.state('calendar', {
//		url: '/calendar',
//		params :{
//			id : null
//		},
//		templateUrl : 'html/calendar.html',
//		controller : 'CalendarCtrl',
//	})
//	.state('account', {
//		url: '/account',
//		templateUrl : 'html/account.html',
//		controller : 'accountController',
//		resolve : {
//			user : function(physiotherapistService,$window){
//				return physiotherapistService.get({id:$window.sessionStorage.id},function(data){
//					return data;
//				});
//			},
//			file : function(getFileService,$window){
//				return getFileService.getOneFile($window.sessionStorage.id).then(function(result){
//					return result.data;
//				})
//			}
//		}
//	})
//	.state('addService', {
//		url: '/addService',
//		templateUrl : 'html/addService.html',
//		controller : 'addServiceController',
//	})
//	.state('addKindOfPain', {
//		url: '/addKindOfPain',
//		templateUrl : 'html/addKindOfPain.html',
//		controller : 'addKindOfPainController',
//	})
//	.state('addBodyPlace', {
//		url: '/addBodyPlace',
//		templateUrl : 'html/addBodyPlace.html',
//		controller : 'addBodyPlaceController',
//	})
//	.state('401', {
//		templateUrl : 'html/utils/401.html',
//	})
	
	$urlRouterProvider.otherwise("/");

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	
})


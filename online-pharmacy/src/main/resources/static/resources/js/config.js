/**
 * @author Tomasz Dębski
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
						return result.data;
					})
			},
			productsResolve : function($stateParams,productPaginationService){
				return productPaginationService.getProductByCategory(0,9,$stateParams.name)
				.then(function(result){
			    	return result;
			    })
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
						return result.data;
					})
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
				console.log('$rootScope.authenticated',$rootScope.authenticated);
				if ($rootScope.authenticated == 'true' && $window.sessionStorage != undefined){
					return $http({
			            method: 'GET',
			            url: '/api/user/'+$window.sessionStorage.id})
			           .then(function(result){
						return result.data;
					})
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
		}
	})
	.state('users', {
		url: '/users',
		templateUrl : 'html/admin/users.html',
		controller : 'usersController',
		resolve : {
			usersResolve : function($stateParams,userPaginationService){
				return userPaginationService.getAllUser(0,10).then(function(result){
					return result;
				});
			}
		}
	})
	.state('carts', {
		url: '/user/:id/carts',
		templateUrl : 'html/cart/carts.html',
		controller : 'cartsController',
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
		resolve : {
			cartDetailsResolve : function(cartDetailsService,$stateParams){
				return cartDetailsService.getCartDetails($stateParams.id).then(function(result){
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
					return result;
				})
			}
		}
	})
	$urlRouterProvider.otherwise("/");

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	
})


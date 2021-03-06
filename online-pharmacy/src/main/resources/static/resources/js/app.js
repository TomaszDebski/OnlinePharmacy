/**
 * @author Tomasz Dębski
 *
 */
angular.module('app',
		[ 
		  'app.run',
		  'ngResource',
		  'ngAnimate',
		  'ngSanitize',
		  'ngCookies',
		  'ui.bootstrap',
		  'ui.router',
		  'ui.uploader',
		  
		  'app.config',
		  'app.config.uibPaginationConfig',
		  
		  'app.translate-config',
		  'app.translate-config-pl',
		  'app.translate-config-en',
		  
		  'app.controller.index',
		  'app.controller.home',
		  'app.controller.menu',
		  'app.controller.medicineList',
		  'app.controller.product',
		  'app.controller.addProduct',
		  'app.controller.addCateogry',
		  'app.controller.login',
		  'app.controller.logout',
		  'app.controller.register',
		  'app.controller.userPanel',
		  'app.controller.cart',
		  'app.controller.shoppingCartSummary',
		  'app.controller.orderProgress',
		  'app.controller.zero_step',
		  'app.controller.one_orderDelivery',
		  'app.controller.two_orderShipping',
		  'app.controller.three_orderPayment',
		  'app.controller.four_orderSummary',
		  'app.controller.users',
		  'app.controller.carts',
		  'app.controller.cartDetails',
		  'app.controller.summaryBox',
		  'app.controller.forgotPassword',
		  'app.controller.searchAll',
		  
		  'app.model.product',
		  
		  'app.service.category',
		  'app.service.user',
		  'app.service.product',
		  'app.service.cart',
		  'app.service.authentication',
		  'app.service.categoryResource',
		  'app.service.register',
		  'app.service.login',
		  'app.service.productPagination',
		  'app.service.cartPagination',
		  'app.service.userPagination',
		  'app.service.cartDetails',
		  'app.service.cartResource',
		  'app.service.productUtils',
//		  
		  'app.directive.usernameAvailable',
		  'app.directive.equals',
		  'app.directive.addProductPackages',
//		  
		  'anim-in-out',
]);
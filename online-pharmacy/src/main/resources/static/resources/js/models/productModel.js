/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.model.product', [])
.factory("Product", ['$resource', function($resource) {
	function Book(bookData) {
        if (bookData) {
            this.setData(bookData);
        };
    };
//    Book.prototype = {
//        setData: function(bookData) {
//            angular.extend(this, bookData);
//        },
//        load: function(id) {
//        },
//        isAvailable: function() {
//            if (!this.book.stores || this.book.stores.length === 0) {
//                return false;
//            }
//            return this.book.stores.some(function(store) {
//                return store.quantity > 0;
//            });
//        }
//    };
    return Book;
}]);
/**
 * 
 */

angular.module('app.model.product', [])
.factory("Product", ['$resource', function($resource) {
	function Book(bookData) {
        if (bookData) {
            this.setData(bookData);
        };
        // Some other initializations related to book
    };
    Book.prototype = {
        setData: function(bookData) {
            angular.extend(this, bookData);
        },
        load: function(id) {
            console.log('Wczytuję książkę')
        },
        isAvailable: function() {
            if (!this.book.stores || this.book.stores.length === 0) {
                return false;
            }
            return this.book.stores.some(function(store) {
                return store.quantity > 0;
            });
        }
    };
    return Book;
}]);
/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.directive.equals', [])
.directive('equalsDirective', function() {
  return {
    restrict: 'A', 
    require: '?ngModel', 
    link: function(scope, elem, attrs, ngModel) {
      if(!ngModel) return; 

      scope.$watch(attrs.ngModel, function() {
        validate();
      });

      attrs.$observe('equals', function (val) {
        validate();
      });

      var validate = function() {
        var val1 = ngModel.$viewValue;
        var val2 = attrs.equals;

        ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
      };
    }
  }
})
.directive("passwordVerify", function() {
   return {
      require: "ngModel",
      scope: {
        passwordVerify: '='
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(function() {
            var combined;

            if (scope.passwordVerify || ctrl.$viewValue) {
               combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
            }                    
            return combined;
        }, function(value) {
            if (value) {
                ctrl.$parsers.unshift(function(viewValue) {
                    var origin = scope.passwordVerify;
                    if (origin !== viewValue) {
                        ctrl.$setValidity("passwordVerify", false);
                        return undefined;
                    } else {
                        ctrl.$setValidity("passwordVerify", true);
                        return viewValue;
                    }
                });
            }
        });
     }
   };
});
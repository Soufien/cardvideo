// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('cardviewoCtrl', function($scope) {
      ionic.Platform.ready(function() {
        // hide the status bar using the StatusBar plugin
        StatusBar.hide();
      });
    }).config(['$provide', function($provide) {
        $provide.decorator("$exceptionHandler", ['$delegate', function($delegate) {
            return function(exception, cause) {
                $delegate(exception, cause);

                // Decorating standard exception handling behaviour by sending exception to crashlytics plugin
                var message = exception.toString();
                // Here, I rely on stacktrace-js (http://www.stacktracejs.com/) to format exception stacktraces before
                // sending it to the native bridge
                var stacktrace = $window.printStackTrace({e: exception});
                navigator.crashlytics.logException("ERROR: "+message+", stacktrace: "+stacktrace);
            };
        }]);
    }]);
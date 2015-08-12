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
/*          document.getElementById('video').src = "http://5.153.32.122/videos/therelaxatron2.mp4";
          document.getElementById('video').setAttribute('crossorigin', 'anonymous');
          document.getElementById('video').load(); // must call after setting/changing source
          document.getElementById('video').play();*/
      });
    });

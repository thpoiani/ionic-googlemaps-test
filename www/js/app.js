angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $timeout) {

  var map = null;

  $ionicPlatform.ready(function() {
    map = plugin.google.maps.Map.getMap(document.getElementById('map'), {
      camera: {
        target: {
          lat: -21.797646,
          lng: -48.174644,
        },
        zoom: 16
      },
    });

    map.on(plugin.google.maps.event.MAP_READY, function() {
      cordova.fireDocumentEvent('plugin_touch', {});
    });
  });

  $ionicPlatform.on('pause', function() {
    if (map) {
      map.setDiv(null);
    }
  });

  $ionicPlatform.on('resume', function() {
    if (map) {
      map.setDiv(document.getElementById('map'));

      $timeout(function() {
        cordova.fireDocumentEvent('plugin_touch', {});
      }, 400);
    }
  });

})

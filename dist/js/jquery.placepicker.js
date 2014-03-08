+function ( $, window) {
  
  var $window = $(window);
  var pluginName = 'placepicker';
  
  var defaults = {
    map: '', 
    mapOptions: {
      zoom: 17
    }, 
    autoCompleteOptions: {
      
    }
  };
  
  function PlacePicker(element, options) {
    
    var $element = $(element);
    
    var instance = this;
    
    var geocoder = new google.maps.Geocoder();
    
    var mapElement, map, marker;
    
    var service = null;
    
    var autocomplete;
  
    function codePlace(query) {
      
      if (!query) return;
      
      var request = {
        query: query
      };

      service.textSearch(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            updatePosition(place.geometry.location);
            setupMarker(place);
          }
        }
      });
    }

    
    function codeAddress(address) {
      
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          marker.setPosition(results[0].geometry.location);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

    
    function codeLatLng(latlng) {
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            var address = results[0].formatted_address;
            marker.setPosition(latlng);
            element.value = address;
          } else {
            alert('No results found');
          }
        } else {
          alert('Geocoder failed due to: ' + status);
        }
      });
      
    }
    
    function setupMarker(place) {
      
      if (!map) return;

      marker.setVisible(false);
      
      if (!place.geometry) {
        return;
      }
      
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(options.mapOptions.zoom); 
        }
        
        marker.setIcon(/** @type {google.maps.Icon} */({
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(35, 35)
        }));
        
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }
    }
  
    function initMap() {

      mapElement = $(options.map).get(0);
      
      if (!mapElement) return;

      map = new google.maps.Map(mapElement, options.mapOptions);

      autocomplete.bindTo('bounds', map);
      
      google.maps.event.addListener(map, 'click', function(e) {
        var pos = e.latLng;
        codeLatLng(pos);
        marker.setPosition(pos);
        map.panTo(pos);
        element.blur();
      });
      
      marker = new google.maps.Marker({
        map: map
      });
      
      service = new google.maps.places.PlacesService(map);
      
    }
    
    function initAutoComplete() {
      
      autocomplete = new google.maps.places.Autocomplete(element, options.autoCompleteOptions);
      
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        
        var place = autocomplete.getPlace();
        
        // If the place has a geometry, then present it on a map.
        setupMarker(place);
    
      });
    }
  
    function init() {
      
      initAutoComplete();
      initMap();
      
    }
    
    function updatePosition(pos) {
      marker.setPosition(pos);
      map.setCenter(pos);
    }
    
    this.getMap = function() {
      return map;
    };
    
    this.reloadMap = function() {
      if (map) codePlace(element.value);
    };
    
    this.resizeMap = function() {
      if (map) google.maps.event.trigger(map, "resize");
    };
    
    this.geoLocation = function() {
      // Try HTML5 geolocation
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);
    
          codeLatLng(pos);
          updatePosition(pos);
          
          
        }, function() {
          handleNoGeolocation(true);
        });
      } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
      }

    };
    
    function handleNoGeolocation(bool) {
      //console.log("could not detect geo location");
    }
    
    
    init.call(this);
  }
  
  var pluginClass = PlacePicker;

  // register plugin
  $.fn[pluginName] = function(options) {
    options = $.extend({}, defaults, options);
    return this.each(function() {
      if (!$(this).data(pluginName)) {
          $(this).data(pluginName, new pluginClass(this, options));
      }
      return $(this);
    });
  };
  
  

}( jQuery, window );
jquery-placepicker
==================

A simple placepicker component for the google-maps api. 

Usage
-----

Link to google-maps api and be sure to add the places-library
```html
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=true&libraries=places"></script>
```

```html
<input id="placepicker" class="form-control" data-latitude="53.538764" data-longitude="10.028240"/>
```

```js
$(function() {
  $("#placepicker").placepicker();
})
```

Advanced usage
--------------

### Integrating a map view
This example shows how to integrate a collapsible map-view using bootstrap

```html
<div class="form-group">
  <div class="input-group">
    <span class="input-group-btn">
      <button data-toggle="collapse" href="#collapseOne" class="btn btn-default">
        <i class="glyphicon glyphicon-globe"></i>
      </button>
    </span>
    <input id="placepicker" class="placepicker form-control"/>
  </div>
  </div>
  <div id="collapseOne" class="collapse">
    <div class="placepicker-map thumbnail"></div>
  </div>
</div>
```

```js
$(function() {
        
  $(".placepicker").each(function() {

    // find map-element
    var target = this;
    var $collapse = $(this).parents('.form-group').next('.collapse');
    var $map = $collapse.find('.placepicker-map');

    // init placepicker
    var placepicker = $(this).placepicker({
      map: $map.get(0), 
      placeChanged: function(place) {
        console.log("place changed: ", place.formatted_address, this.getLocation());
      }
    }).data('placepicker');
    
    // reload map after collapse in
    $collapse.on('show.bs.collapse', function () {
      
      window.setTimeout(function() {
        placepicker.resizeMap();
        placepicker.reloadMap();
        if (!$(target).prop('value')) {
          placepicker.geoLocation();
        }
      }, 0);
    });
  });
  
});      
         

Options
-------
<table>
  <tr>
    <th>Name</th><th>Description</th>
  </tr>
  <tr>
    <td>map</td><td>Map selector or map-element</td>
  </tr>
  <tr>
    <td>mapOptions</td><td>An object with google maps api options</td>
  </tr>
</table>

Methods
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Return</th>
  </tr>
  <tr>
    <td>reloadMap</td><td>Reloads map</td><td>void</td>
  </tr>
  <tr>
    <td>resizeMap</td><td>Resizes map</td><td>void</td>
  </tr>
  <tr>
    <td>geoLocation</td><td>Set value to html5 geo-location</td>
  </tr>
</table>

jquery-placepicker
==================

A simple placepicker component for the google-maps api. 

Usage
-----

Link to google-maps api and be sure to add the places-library: `https://maps.googleapis.com/maps/api/js?sensor=true&libraries=places`

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
<form action="/test" method="GET">
  <div class="form-group">
    <div class="input-group">
      <span class="input-group-btn">
        <button data-toggle="collapse" href="#collapseOne" class="btn btn-default">
          <i class="glyphicon glyphicon-globe"></i>
        </button>
      </span>
      <input class="placepicker form-control" name="place"/>
    </div>
  </div>
  <div id="collapseOne" class="collapse">
    <div class="placepicker-map thumbnail"></div>
  </div>
  <button type="submit" value="SUBMIT">submit</button>
</form>
```

```js
$(function() {
        
  $(".placepicker").each(function() {
    var target = this;
    var $collapse = $(this).parents('.form-group').next('.collapse');
    var $map = $collapse.find('.placepicker-map');
    var placepicker = $(this).placepicker({
      map: $map.get(0), 
      placeChanged: function(place) {
        console.log("place changed: ", place.formatted_address, this.getLocation());
      }
    }).data('placepicker');
    $collapse.on('show.bs.collapse', function (e) {
      $(e.target).css('display', 'block');
      if (!$(target).prop('value')) {
        placepicker.geoLocation();
      } else {
        placepicker.resize();
      }
      $(e.target).css('display', '');
    });
  });
  
});      
```

```css
.placepicker-map {
  min-height: 250px
}
```

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
  <tr>
    <td>placeChanged</td><td>This callback is fired when location changed</td>
  </tr>
</table>

Methods
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Return</th>
  </tr>
  <tr>
    <td>reload</td><td>Reloads map</td><td>void</td>
  </tr>
  <tr>
    <td>resize</td><td>Resizes map</td><td>void</td>
  </tr>
  <tr>
    <td>geoLocation</td><td>Set value to html5 geo-location</td>
  </tr>
  <tr>
    <td>getLocation</td><td>Returns an object containing the current location</td><td>void</td>
  </tr>
  <tr>
    <td>getLatLng</td><td>Returns an object of type google.maps.LatLng containing the current location </td>
  </tr>
</table>

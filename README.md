jquery-placepicker
==================

A simple placepicker component for the google-maps api. 

[Demo](http://benignware.github.io/jquery-placepicker)

Usage
-----

Include dependencies.
Be sure to add Google Places.

```html
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://maps.googleapis.com/maps/api/js?sensor=true&libraries=places"></script>
<script src="js/jquery.placepicker.min.js"></script>
```

```html
<input class="placepicker" size="40"/>
```

```js
$(".placepicker").placepicker();
```

Advanced usage
--------------

### Integrating a map view

This example shows how to integrate a collapsible map-view using bootstrap.

Include Bootstrap Collapsible and styles.

```html
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>

```

```html
<div class="form-group">
  <input class="placepicker form-control" data-map-container-id="collapseOne"/>
</div>
<div id="collapseOne" class="collapse">
  <div class="placepicker-map thumbnail"></div>
</div>
```

```js
$(".placepicker").placepicker();
```

```css
.placepicker-map {
  min-height: 250px;
}
```

Options
-------
<table>
  <tr>
    <th>Type</th><th>Name</th><th>Description</th>
  </tr>
  <tr>
    <td>HTML</td><td>data-latitude</td><td>Preset the map's latitude</td>
  </tr>
  <tr>
    <td>HTML</td><td>data-longitude</td><td>Preset the map's longitude</td>
  </tr>
  <tr>
    <td>HTML</td><td>data-latitude-input</td><td>Set the DOM ID of the input field to populate with the latitude</td>
  </tr>
  <tr>
    <td>HTML</td><td>data-longitude-input</td><td>Set the DOM ID of the input field to populate with the longitude</td>
  </tr>
  <tr>
    <td>HTML</td><td>data-map-container-id</td><td>Set the ID of the
      element containing the map's destination element. Configuring this
      will automatically inject an open/close button to show/hide the map.
      The container must have Bootstrap's "collapse" CSS class.</td>
  </tr>
  <tr>
    <td>JavaScript</td><td>map</td><td>Map selector or map-element</td>
  </tr>
  <tr>
    <td>JavaScript</td><td>mapOptions</td><td>An object with google maps api options</td>
  </tr>
  <tr>
    <td>JavaScript</td><td>placeChanged</td><td>This callback is fired when location changed</td>
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
    <td>geoLocation</td><td>Set value to html5 geo-location</td><td>void</td>
  </tr>
  <tr>
    <td>getLocation</td><td>Returns an object containing the current location</td><td>void</td>
  </tr>
  <tr>
    <td>getLatLng</td><td>Returns an object of type google.maps.LatLng containing the current location </td><td>LatLng</td>
  </tr>
</table>

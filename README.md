jquery-placepicker
==================

A simple placepicker component for the google-maps api. 

Usage
-----

Link to google-maps api and be sure to add the places-library: `https://maps.googleapis.com/maps/api/js?sensor=true&libraries=places`

```html
<input class="placepicker" class="form-control" data-latitude="53.538764" data-longitude="10.028240"/>
```

```js
$(function() {
  $(".placepicker").placepicker();
})
```

Advanced usage
--------------

### Integrating a map view

This example shows how to integrate a collapsible map-view using bootstrap

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
  min-height: 250px
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
      The container must have the "collapse" CSS class.</td>
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

var map;
var marker;
function initMap() {
    var myLatLng = {lat: 40.705998, lng: -74.008844};
    map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

    var flightPlanCoordinates = [
        {lat: 40.689249, lng: -74.044500},
        {lat: 40.705998, lng: -74.008844},
        {lat: 40.759011, lng: -73.984472}

    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath.setMap(map);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Statue of Liberty</h1>'+
      '<div id="bodyContent">'+
      '<iframe width="500" height="350"' +
      'src="http://www.youtube.com/embed/OCV-mbeI2Tw">' +
      '</iframe>' +
      '<p>"The Statue of Liberty (Liberty Enlightening the World; French: La Libert&eacute; &eacute;clairant le monde)'+
      ' is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.'+
      ' The copper statue, designed by Fr&eacute;d&eacute;ric Auguste Bartholdi, a French sculptor, was built by Gustave Eiffel and '+
      'dedicated on October 28, 1886. It was a gift to the United States from the people of France."</p>'+
      '<p>Source: <a href="https://en.wikipedia.org/wiki/Statue_of_Liberty">'+
      'https://en.wikipedia.org/wiki/Statue_of_Liberty</a> '+
      '</p>'+
      '</div>'+
      '</div>';

var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Times Square</h1>'+
    '<div id="bodyContent">'+
    '<iframe width="500" height="350"' +
    'src="http://www.youtube.com/embed/Nsec4hWZz2M">' +
    '</iframe>' +
    '<p>"Times Square is a major commercial intersection and neighborhood in Midtown Manhattan, New York City,'+
    ' at the junction of Broadway and Seventh Avenue, and stretching from West 42nd to West 47th Streets.'+
    ' Brightly adorned with billboards and advertisements, Times Square is sometimes referred to as The Crossroads'+
    ' of the World, The Center of the Universe, the heart of The Great White Way, and the "heart of the world". '+
    'One of the world&#39;s busiest pedestrian intersections, it is also the hub of the Broadway Theater District'+
    ' and a major center of the world&#39;s entertainment industry. Times Square is one of the world&#39;s most visited '+
    'tourist attractions, drawing an estimated fifty million visitors annually. Approximately 330,000 people pass'+
    ' through Times Square daily, many of them tourists; while over 460,000 pedestrians walk through Times '+
    'Square on its busiest days."</p>'+
    '<p>Source: <a href="https://en.wikipedia.org/wiki/Times_Square">'+
    'https://en.wikipedia.org/wiki/Times_Square</a> '+
    '</p>'+
    '</div>'+
    '</div>';

    var contentString3 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Wall Street</h1>'+
        '<div id="bodyContent">'+
        '<iframe width="500" height="350"' +
        'src="http://www.youtube.com/embed/JmyNYxIO9kc">' +
        '</iframe>' +
        '<p>"Wall Street is a 0.7-mile-long (1.1 km) street running eight blocks, roughly northwest to southeast, '+
        'from Broadway to South Street on the East River in the Financial District of lower Manhattan, New York City.'+
        ' Over time, the term has become a metonym for the financial markets of the United States as a whole, the '+
        'American financial sector (even if financial firms are not physically located there), or signifying New '+
        'York-based financial interests."</p>'+
        '<p>Source: <a href="https://en.wikipedia.org/wiki/Wall_Street">'+
        'https://en.wikipedia.org/wiki/Wall_Street</a> '+
        '</p>'+
        '</div>'+
        '</div>';

 var infowindow = new google.maps.InfoWindow({
     content: contentString
 });

 var infowindow2 = new google.maps.InfoWindow({
     content: contentString2
 });

 var infowindow3 = new google.maps.InfoWindow({
     content: contentString3
 });

  var marker1 = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 40.689249, lng: -74.044500},
    map: map,
    title: 'Hello World!'
  });

  var marker2 = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 40.759011, lng: -73.984472},
    map: map,
    title: 'Hello World!'
  });

  var marker3 = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 40.705998, lng: -74.008844},
    map: map,
    title: 'Hello World!'
  });

    marker1.addListener('click', function() {
        infowindow.open(map, marker1);
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
    });

}

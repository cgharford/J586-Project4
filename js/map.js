var map;
var marker;
function initMap() {
    var myLatLng = {lat: 38.68551, lng: -97.910156};
    map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var BenCarsonPath = [
      {lat: 27.6648274, lng: -81.51575350000002},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 37.41375360000001, lng: -79.14224639999998},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 34.85261759999999, lng: -82.39401040000001},
      {lat: 36.1699412, lng: -115.13982959999998},
      {lat: 33.6411316, lng: -117.9186689},
      {lat: 30.6953657, lng: -88.0398912},
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 41.6005448, lng: -93.60910639999997},
      {lat: 41.52364370000001, lng: -90.57763669999997},
      {lat: 34.0007104, lng: -81.03481440000002},
      {lat: 36.1699412, lng: -115.13982959999998}
  ];

  var BernieSandersPath = [
      {lat: 34.0007104, lng: -81.03481440000002},
      {lat: 36.1699412, lng: -115.13982959999998},
      {lat: 43.6422934, lng: -72.25175690000003},
      {lat: 41.35804839999999, lng: -93.55743760000001},
      {lat: 41.49932, lng: -81.69436050000002},
      {lat: 32.7764749, lng: -79.93105120000001},
      {lat: 33.7489954, lng: -84.3879824},
      {lat: 42.9956397, lng: -71.45478909999997}
  ]

  var BobbyJindalPath = [
      {lat: 42.0266548, lng: -96.09723759999997},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 41.1399814, lng: -104.82024619999999}
  ]

  var CarlyFiorinaPath = [
      {lat: 36.09985959999999, lng: -80.244216},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 39.978371, lng: -86.1180435},
      {lat: 42.0266548, lng: -96.09723759999997},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 39.9525839, lng: -75.16522150000003},
      {lat: 42.4641498, lng: -92.62824969999997},
      {lat: 39.9525839, lng: -75.16522150000003},
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 39.9525839, lng: -75.16522150000003}
  ]

  var ChrisChristiePath = [
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 42.0227184, lng: -93.45230140000001},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 40.44062479999999, lng: -79.99588640000002},
      {lat: 38.9071923, lng: -77.03687070000001}
  ]

  var DonaldTrumpPath = [
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 39.78172130000001, lng: -89.65014810000002},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 42.49746940000001, lng: -94.16801579999998},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 30.080174, lng: -94.12655619999998},
      {lat: 35.9606384, lng: -83.92073920000001},
      {lat: 41.7033177, lng: -93.05735330000005},
      {lat: 34.9495672, lng: -81.9320482},
      {lat: 33.5206608, lng: -86.80248999999998},
      {lat: 39.9611755, lng: -82.99879420000002},
      {lat: 27.3364347, lng: -82.53065270000002},
      {lat: 40.7127837, lng: -74.00594130000002},
      {lat: 32.8406946, lng: -83.6324022}
  ]

  var GeorgePatakiPath = [
      {lat: 43.19786240000001, lng: -70.87366980000002},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 43.1339545, lng: -70.92643929999997}
  ]

  var HillaryClintonPath = [
      {lat: 41.8781136, lng: -87.62979819999998},
      {lat: 41.7434092, lng: -92.72324559999998},
      {lat: 38.58157189999999, lng: -121.49439960000001},
      {lat: 34.9248667, lng: -81.02507839999998},
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 32.7766642, lng: -96.79698789999998},
      {lat: 38.25266469999999, lng: -85.75845570000001},
      {lat: 36.1626638, lng: -86.78160159999999},
      {lat: 41.8444735, lng: -90.18873789999998},
      {lat: 39.5296329, lng: -119.8138027},
      {lat: 39.7392358, lng: -104.990251},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 42.3600825, lng: -71.05888010000001}
  ]

  var JebBushPath = [
      {lat: 33.9815369, lng: -81.23621070000002},
      {lat: 43.0362094, lng: -71.18338570000003},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 41.61199029999999, lng: -93.88557679999997},
      {lat: 43.4442432, lng: -71.64729879999999},
      {lat: 42.96335990000001, lng: -85.66808630000003},
      {lat: 34.0007104, lng: -81.03481440000002},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 40.7127837, lng: -74.00594130000002},
      {lat: 34.9495672, lng: -81.9320482},
      {lat: 33.45039980000001, lng: -88.81838719999996}
  ]

  var JimGilmorePath = [
      {lat: 43.19786240000001, lng: -70.87366980000002},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 32.8323225, lng: -79.82842579999999}
  ]

  var JohnKasichPath = [
      {lat: 41.9778795, lng: -91.66562320000003},
      {lat: 30.6953657, lng: -88.0398912},
      {lat: 32.2987573, lng: -90.18481029999998},
      {lat: 43.1339545, lng: -70.92643929999997},
      {lat: 41.8781136, lng: -87.62979819999998},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 33.9934867, lng: -81.0739825},
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 42.3600825, lng: -71.05888010000001},
      {lat: 38.9071923, lng: -77.03687070000001},
      {lat: 37.5407246, lng: -77.4360481},
      {lat: 34.9495672, lng: -81.9320482},
      {lat: 44.4686696, lng: -71.18507679999999},
      {lat: 42.5803122, lng: -83.03020329999998},
      {lat: 41.9778795, lng: -91.66562320000003}
  ]

  var LawrenceLessigPath = [
      {lat: 44.4686696, lng: -71.18507679999999}
  ]

  var LindseyGrahamPath = [
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 42.9463291, lng: -71.51320079999999}
  ]

  var MarcoRubioPath = [
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 41.9640877, lng: -73.3001233},
      {lat: 41.52364370000001, lng: -90.57763669999997},
      {lat: 34.0007104, lng: -81.03481440000002},
      {lat: 42.06559860000001, lng: -94.8672793},
      {lat: 32.8323225, lng: -79.82842579999999},
      {lat: 43.5278546, lng: -71.47035089999997}
  ]

  var MartinOMalleyPath = [
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 34.9248667, lng: -81.02507839999998},
      {lat: 30.267153, lng: -97.74306079999997},
      {lat: 42.5348993, lng: -92.44531610000001},
      {lat: 41.8781136, lng: -87.62979819999998},
      {lat: 32.85461970000001, lng: -79.9748103},
      {lat: 42.9463291, lng: -71.51320079999999},
      {lat: 42.9956397, lng: -71.45478909999997}
  ]

  var MikeHuckabeePath = [
      {lat: 34.0007104, lng: -81.03481440000002},
      {lat: 33.5206608, lng: -86.80248999999998},
      {lat: 41.6005448, lng: -93.60910639999997},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 41.03000780000001, lng: -92.811307}
  ]

  var RandPaulPath = [
      {lat: 43.1339545, lng: -70.92643929999997},
      {lat: 34.9495672, lng: -81.9320482},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 41.3308237, lng: -94.01383929999997},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 41.6005448, lng: -93.60910639999997}
  ]

  var RickSantorumPath = [
      {lat: 41.6005448, lng: -93.60910639999997},
      {lat: 41.8781136, lng: -87.62979819999998},
      {lat: 42.9956397, lng: -71.45478909999997},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 42.492786, lng: -92.3425775},
      {lat: 33.6890603, lng: -78.88669429999999}
  ]

  var TedCruzPath = [
      {lat: 41.6005448, lng: -93.60910639999997},
      {lat: 43.0389025, lng: -87.90647360000003},
      {lat: 43.2081366, lng: -71.53757180000002},
      {lat: 28.5383355, lng: -81.37923649999999},
      {lat: 34.85261759999999, lng: -82.39401040000001}
  ]

    addBobbyJindalMarkers();


    function addBenCarsonMarkers() {
        var BenCarsonMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[0],
            map: map
        });
        var BenCarsonMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[1],
            map: map
        });
        var BenCarsonMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[2],
            map: map
        });
        var BenCarsonMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[3],
            map: map
        });
        var BenCarsonMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[4],
            map: map
        });
        var BenCarsonMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[5],
            map: map
        });
        var BenCarsonMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[6],
            map: map
        });
        var BenCarsonMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[7],
            map: map
        });
        var BenCarsonMarker9 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[8],
            map: map
        });
        var BenCarsonMarker10 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[9],
            map: map
        });
        var BenCarsonMarker11 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[10],
            map: map
        });
        var BenCarsonMarker12 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[11],
            map: map
        });
        var BenCarsonMarker13 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BenCarsonPath[12],
            map: map
        });
        BenCarsonMarker1.addListener('click', function() {
            infowindow.open(map, BenCarsonMarker1);
        });
        BenCarsonMarker2.addListener('click', function() {
            infowindow2.open(map, BenCarsonMarker2);
        });
        BenCarsonMarker3.addListener('click', function() {
            infowindow3.open(map, BenCarsonMarker3);
        });
        BenCarsonMarker4.addListener('click', function() {
            infowindow.open(map, BenCarsonMarker4);
        });
        BenCarsonMarker5.addListener('click', function() {
            infowindow2.open(map, BenCarsonMarker5);
        });
        BenCarsonMarker6.addListener('click', function() {
            infowindow3.open(map, BenCarsonMarker6);
        });
        BenCarsonMarker7.addListener('click', function() {
            infowindow.open(map, BenCarsonMarker7);
        });
        BenCarsonMarker8.addListener('click', function() {
            infowindow2.open(map, BenCarsonMarker8);
        });
        BenCarsonMarker9.addListener('click', function() {
            infowindow3.open(map, BenCarsonMarker9);
        });
        BenCarsonMarker10.addListener('click', function() {
            infowindow.open(map, BenCarsonMarker10);
        });
        BenCarsonMarker11.addListener('click', function() {
            infowindow2.open(map, BenCarsonMarker11);
        });
        BenCarsonMarker12.addListener('click', function() {
            infowindow3.open(map, BenCarsonMarker12);
        });
        BenCarsonMarker13.addListener('click', function() {
            infowindow3.open(map, BenCarsonMarker13);
        });
    }

    function addBernieSandersMarkers() {
        var BernieSandersMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[0],
            map: map
        });
        var BernieSandersMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[1],
            map: map
        });
        var BernieSandersMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[2],
            map: map
        });
        var BernieSandersMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[3],
            map: map
        });
        var BernieSandersMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[4],
            map: map
        });
        var BernieSandersMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[5],
            map: map
        });
        var BernieSandersMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[6],
            map: map
        });
        var BernieSandersMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BernieSandersPath[7],
            map: map
        });
        BernieSandersMarker1.addListener('click', function() {
            infowindow.open(map, BernieSandersMarker1);
        });
        BernieSandersMarker2.addListener('click', function() {
            infowindow2.open(map, BernieSandersMarker2);
        });
        BernieSandersMarker3.addListener('click', function() {
            infowindow3.open(map, BernieSandersMarker3);
        });
        BernieSandersMarker4.addListener('click', function() {
            infowindow.open(map, BernieSandersMarker4);
        });
        BernieSandersMarker5.addListener('click', function() {
            infowindow2.open(map, BernieSandersMarker5);
        });
        BernieSandersMarker6.addListener('click', function() {
            infowindow3.open(map, BernieSandersMarker6);
        });
        BernieSandersMarker7.addListener('click', function() {
            infowindow.open(map, BernieSandersMarker7);
        });
        BernieSandersMarker8.addListener('click', function() {
            infowindow2.open(map, BernieSandersMarker8);
        });
    }

    function addBobbyJindalMarkers() {
        var BobbyJindalMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BobbyJindalPath[0],
            map: map
        });
        var BobbyJindalMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BobbyJindalPath[1],
            map: map
        });
        var BobbyJindalMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BobbyJindalPath[2],
            map: map
        });
        var BobbyJindalMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: BobbyJindalPath[3],
            map: map
        });
        BobbyJindalMarker1.addListener('click', function() {
            infowindow.open(map, BobbyJindalMarker1);
        });
        BobbyJindalMarker2.addListener('click', function() {
            infowindow2.open(map, BobbyJindalMarker2);
        });
        BobbyJindalMarker3.addListener('click', function() {
            infowindow3.open(map, BobbyJindalMarker3);
        });
        BobbyJindalMarker4.addListener('click', function() {
            infowindow3.open(map, BobbyJindalMarker3);
        });
    }

    function addCarlyFiorinaMarkers() {
        var CarlyFiorinaMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[0],
            map: map
        });
        var CarlyFiorinaMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[1],
            map: map
        });
        var CarlyFiorinaMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[2],
            map: map
        });
        var CarlyFiorinaMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[3],
            map: map
        });
        var CarlyFiorinaMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[4],
            map: map
        });
        var CarlyFiorinaMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[5],
            map: map
        });
        var CarlyFiorinaMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[6],
            map: map
        });
        var CarlyFiorinaMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[7],
            map: map
        });
        var CarlyFiorinaMarker9 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[8],
            map: map
        });
        var CarlyFiorinaMarker10 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[9],
            map: map
        });
        var CarlyFiorinaMarker11 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[10],
            map: map
        });
        var CarlyFiorinaMarker12 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: CarlyFiorinaPath[11],
            map: map
        });
        CarlyFiorinaMarker1.addListener('click', function() {
            infowindow.open(map, CarlyFiorinaMarker1);
        });
        CarlyFiorinaMarker2.addListener('click', function() {
            infowindow2.open(map, CarlyFiorinaMarker2);
        });
        CarlyFiorinaMarker3.addListener('click', function() {
            infowindow3.open(map, CarlyFiorinaMarker3);
        });
        CarlyFiorinaMarker4.addListener('click', function() {
            infowindow.open(map, CarlyFiorinaMarker4);
        });
        CarlyFiorinaMarker5.addListener('click', function() {
            infowindow2.open(map, CarlyFiorinaMarker5);
        });
        CarlyFiorinaMarker6.addListener('click', function() {
            infowindow3.open(map, CarlyFiorinaMarker6);
        });
        CarlyFiorinaMarker7.addListener('click', function() {
            infowindow.open(map, CarlyFiorinaMarker7);
        });
        CarlyFiorinaMarker8.addListener('click', function() {
            infowindow2.open(map, CarlyFiorinaMarker8);
        });
        CarlyFiorinaMarker9.addListener('click', function() {
            infowindow3.open(map, CarlyFiorinaMarker9);
        });
        CarlyFiorinaMarker10.addListener('click', function() {
            infowindow.open(map, CarlyFiorinaMarker10);
        });
        CarlyFiorinaMarker11.addListener('click', function() {
            infowindow2.open(map, CarlyFiorinaMarker11);
        });
        CarlyFiorinaMarker12.addListener('click', function() {
            infowindow3.open(map, CarlyFiorinaMarker12);
        });
    }

    function addChrisChristieMarkers() {
        var ChrisChristieMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: ChrisChristiePath[0],
            map: map
        });
        var ChrisChristieMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: ChrisChristiePath[1],
            map: map
        });
        var ChrisChristieMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: ChrisChristiePath[2],
            map: map
        });
        var ChrisChristieMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: ChrisChristiePath[3],
            map: map
        });
        var ChrisChristieMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: ChrisChristiePath[4],
            map: map
        });
        var ChrisChristieMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: ChrisChristiePath[5],
            map: map
        });
        ChrisChristieMarker1.addListener('click', function() {
            infowindow.open(map, ChrisChristieMarker1);
        });
        ChrisChristieMarker2.addListener('click', function() {
            infowindow2.open(map, ChrisChristieMarker2);
        });
        ChrisChristieMarker3.addListener('click', function() {
            infowindow3.open(map, ChrisChristieMarker3);
        });
        ChrisChristieMarker4.addListener('click', function() {
            infowindow.open(map, ChrisChristieMarker4);
        });
        ChrisChristieMarker5.addListener('click', function() {
            infowindow2.open(map, ChrisChristieMarker5);
        });
        ChrisChristieMarker6.addListener('click', function() {
            infowindow3.open(map, ChrisChristieMarker6);
        });
    }

    function addDonaldTrumpMarkers() {
        var DonaldTrumpMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[0],
            map: map
        });
        var DonaldTrumpMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[1],
            map: map
        });
        var DonaldTrumpMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[2],
            map: map
        });
        var DonaldTrumpMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[3],
            map: map
        });
        var DonaldTrumpMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[4],
            map: map
        });
        var DonaldTrumpMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[5],
            map: map
        });
        var DonaldTrumpMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[6],
            map: map
        });
        var DonaldTrumpMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[7],
            map: map
        });
        var DonaldTrumpMarker9 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[8],
            map: map
        });
        var DonaldTrumpMarker10 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[9],
            map: map
        });
        var DonaldTrumpMarker11 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[10],
            map: map
        });
        var DonaldTrumpMarker12 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[11],
            map: map
        });
        var DonaldTrumpMarker13 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: DonaldTrumpPath[12],
            map: map
        });
        DonaldTrumpMarker1.addListener('click', function() {
            infowindow.open(map, DonaldTrumpMarker1);
        });
        DonaldTrumpMarker2.addListener('click', function() {
            infowindow2.open(map, DonaldTrumpMarker2);
        });
        DonaldTrumpMarker3.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker3);
        });
        DonaldTrumpMarker4.addListener('click', function() {
            infowindow.open(map, DonaldTrumpMarker4);
        });
        DonaldTrumpMarker5.addListener('click', function() {
            infowindow2.open(map, DonaldTrumpMarker5);
        });
        DonaldTrumpMarker6.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker6);
        });
        DonaldTrumpMarker7.addListener('click', function() {
            infowindow.open(map, DonaldTrumpMarker7);
        });
        DonaldTrumpMarker8.addListener('click', function() {
            infowindow2.open(map, DonaldTrumpMarker8);
        });
        DonaldTrumpMarker9.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker9);
        });
        DonaldTrumpMarker10.addListener('click', function() {
            infowindow.open(map, DonaldTrumpMarker10);
        });
        DonaldTrumpMarker11.addListener('click', function() {
            infowindow2.open(map, DonaldTrumpMarker11);
        });
        DonaldTrumpMarker12.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker12);
        });
        DonaldTrumpMarker13.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker13);
        });
        DonaldTrumpMarker14.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker14);
        });
        DonaldTrumpMarker15.addListener('click', function() {
            infowindow3.open(map, DonaldTrumpMarker15);
        });
    }

    function addGeorgePatakiMarkers() {
        var GeorgePatakiMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: GeorgePatakiPath[0],
            map: map
        });
        var GeorgePatakiMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: GeorgePatakiPath[1],
            map: map
        });
        var GeorgePatakiMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: GeorgePatakiPath[2],
            map: map
        });
        GeorgePatakiMarker1.addListener('click', function() {
            infowindow.open(map, GeorgePatakiMarker1);
        });
        GeorgePatakiMarker2.addListener('click', function() {
            infowindow2.open(map, GeorgePatakiMarker2);
        });
        GeorgePatakiMarker3.addListener('click', function() {
            infowindow3.open(map, GeorgePatakiMarker3);
        });
    }

    function addHillaryClintonMarkers() {
        var HillaryClintonMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[0],
            map: map
        });
        var HillaryClintonMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[1],
            map: map
        });
        var HillaryClintonMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[2],
            map: map
        });
        var HillaryClintonMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[3],
            map: map
        });
        var HillaryClintonMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[4],
            map: map
        });
        var HillaryClintonMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[5],
            map: map
        });
        var HillaryClintonMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[6],
            map: map
        });
        var HillaryClintonMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[7],
            map: map
        });
        var HillaryClintonMarker9 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[8],
            map: map
        });
        var HillaryClintonMarker10 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[9],
            map: map
        });
        var HillaryClintonMarker11 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[10],
            map: map
        });
        var HillaryClintonMarker12 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[11],
            map: map
        });
        var HillaryClintonMarker13 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: HillaryClintonPath[12],
            map: map
        });
        HillaryClintonMarker1.addListener('click', function() {
            infowindow.open(map, HillaryClintonMarker1);
        });
        HillaryClintonMarker2.addListener('click', function() {
            infowindow2.open(map, HillaryClintonMarker2);
        });
        HillaryClintonMarker3.addListener('click', function() {
            infowindow3.open(map, HillaryClintonMarker3);
        });
        HillaryClintonMarker4.addListener('click', function() {
            infowindow.open(map, HillaryClintonMarker4);
        });
        HillaryClintonMarker5.addListener('click', function() {
            infowindow2.open(map, HillaryClintonMarker5);
        });
        HillaryClintonMarker6.addListener('click', function() {
            infowindow3.open(map, HillaryClintonMarker6);
        });
        HillaryClintonMarker7.addListener('click', function() {
            infowindow.open(map, HillaryClintonMarker7);
        });
        HillaryClintonMarker8.addListener('click', function() {
            infowindow2.open(map, HillaryClintonMarker8);
        });
        HillaryClintonMarker9.addListener('click', function() {
            infowindow3.open(map, HillaryClintonMarker9);
        });
        HillaryClintonMarker10.addListener('click', function() {
            infowindow.open(map, HillaryClintonMarker10);
        });
        HillaryClintonMarker11.addListener('click', function() {
            infowindow2.open(map, HillaryClintonMarker11);
        });
        HillaryClintonMarker12.addListener('click', function() {
            infowindow3.open(map, HillaryClintonMarker12);
        });
        HillaryClintonMarker13.addListener('click', function() {
            infowindow3.open(map, HillaryClintonMarker13);
        });
    }
    function addJebBushMarkers() {
        var JebBushMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[0],
            map: map
        });
        var JebBushMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[1],
            map: map
        });
        var JebBushMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[2],
            map: map
        });
        var JebBushMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[3],
            map: map
        });
        var JebBushMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[4],
            map: map
        });
        var JebBushMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[5],
            map: map
        });
        var JebBushMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[6],
            map: map
        });
        var JebBushMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[7],
            map: map
        });
        var JebBushMarker9 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[8],
            map: map
        });
        var JebBushMarker10 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[9],
            map: map
        });
        var JebBushMarker11 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JebBushPath[10],
            map: map
        });
        JebBushMarker1.addListener('click', function() {
            infowindow.open(map, JebBushMarker1);
        });
        JebBushMarker2.addListener('click', function() {
            infowindow2.open(map, JebBushMarker2);
        });
        JebBushMarker3.addListener('click', function() {
            infowindow3.open(map, JebBushMarker3);
        });
        JebBushMarker4.addListener('click', function() {
            infowindow.open(map, JebBushMarker4);
        });
        JebBushMarker5.addListener('click', function() {
            infowindow2.open(map, JebBushMarker5);
        });
        JebBushMarker6.addListener('click', function() {
            infowindow3.open(map, JebBushMarker6);
        });
        JebBushMarker7.addListener('click', function() {
            infowindow.open(map, JebBushMarker7);
        });
        JebBushMarker8.addListener('click', function() {
            infowindow2.open(map, JebBushMarker8);
        });
        JebBushMarker9.addListener('click', function() {
            infowindow3.open(map, JebBushMarker9);
        });
        JebBushMarker10.addListener('click', function() {
            infowindow.open(map, JebBushMarker10);
        });
        JebBushMarker11.addListener('click', function() {
            infowindow2.open(map, JebBushMarker11);
        });
    }

    function addJimGilmoreMarkers() {
        var JimGilmoreMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JimGilmorePath[0],
            map: map
        });
        var JimGilmoreMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JimGilmorePath[1],
            map: map
        });
        var JimGilmoreMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JimGilmorePath[2],
            map: map
        });
        JimGilmoreMarker1.addListener('click', function() {
            infowindow.open(map, JimGilmoreMarker1);
        });
        JimGilmoreMarker2.addListener('click', function() {
            infowindow2.open(map, JimGilmoreMarker2);
        });
        JimGilmoreMarker3.addListener('click', function() {
            infowindow3.open(map, JimGilmoreMarker3);
        });
    }

    function addJohnKasichMarkers() {
        var JohnKasichMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[0],
            map: map
        });
        var JohnKasichMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[1],
            map: map
        });
        var JohnKasichMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[2],
            map: map
        });
        var JohnKasichMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[3],
            map: map
        });
        var JohnKasichMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[4],
            map: map
        });
        var JohnKasichMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[5],
            map: map
        });
        var JohnKasichMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[6],
            map: map
        });
        var JohnKasichMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[7],
            map: map
        });
        var JohnKasichMarker9 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[8],
            map: map
        });
        var JohnKasichMarker10 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[9],
            map: map
        });
        var JohnKasichMarker11 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[10],
            map: map
        });
        var JohnKasichMarker12 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[11],
            map: map
        });
        var JohnKasichMarker13 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[12],
            map: map
        });
        var JohnKasichMarker14 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[13],
            map: map
        });
        var JohnKasichMarker15 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[14],
            map: map
        });
        var JohnKasichMarker16 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: JohnKasichPath[15],
            map: map
        });
        JohnKasichMarker1.addListener('click', function() {
            infowindow.open(map, JohnKasichMarker1);
        });
        JohnKasichMarker2.addListener('click', function() {
            infowindow2.open(map, JohnKasichMarker2);
        });
        JohnKasichMarker3.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker3);
        });
        JohnKasichMarker4.addListener('click', function() {
            infowindow.open(map, JohnKasichMarker4);
        });
        JohnKasichMarker5.addListener('click', function() {
            infowindow2.open(map, JohnKasichMarker5);
        });
        JohnKasichMarker6.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker6);
        });
        JohnKasichMarker7.addListener('click', function() {
            infowindow.open(map, JohnKasichMarker7);
        });
        JohnKasichMarker8.addListener('click', function() {
            infowindow2.open(map, JohnKasichMarker8);
        });
        JohnKasichMarker9.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker9);
        });
        JohnKasichMarker10.addListener('click', function() {
            infowindow.open(map, JohnKasichMarker10);
        });
        JohnKasichMarker11.addListener('click', function() {
            infowindow2.open(map, JohnKasichMarker11);
        });
        JohnKasichMarker12.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker12);
        });
        JohnKasichMarker13.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker13);
        });
        JohnKasichMarker14.addListener('click', function() {
            infowindow2.open(map, JohnKasichMarker14);
        });
        JohnKasichMarker15.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker15);
        });
        JohnKasichMarker16.addListener('click', function() {
            infowindow3.open(map, JohnKasichMarker16);
        });
    }

    function addLawrenceLessigMarkers() {
        var LawrenceLessigMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: LawrenceLessigPath[0],
            map: map
        });
        LawrenceLessigMarker1.addListener('click', function() {
            infowindow.open(map, LawrenceLessigMarker1);
        });
    }

    function addLindseyGrahamMarkers() {
        var LindseyGrahamMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: LindseyGrahamPath[0],
            map: map
        });
        var LindseyGrahamMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: LindseyGrahamPath[1],
            map: map
        });
        var LindseyGrahamMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: LindseyGrahamPath[2],
            map: map
        });
        LindseyGrahamMarker1.addListener('click', function() {
            infowindow.open(map, LindseyGrahamMarker1);
        });
        LindseyGrahamMarker2.addListener('click', function() {
            infowindow2.open(map, LindseyGrahamMarker2);
        });
        LindseyGrahamMarker3.addListener('click', function() {
            infowindow3.open(map, LindseyGrahamMarker3);
        });
    }

    function addMartinOMalleyMarkers() {
        var MartinOMalleyMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[0],
            map: map
        });
        var MartinOMalleyMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[1],
            map: map
        });
        var MartinOMalleyMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[2],
            map: map
        });
        var MartinOMalleyMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[3],
            map: map
        });
        var MartinOMalleyMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[4],
            map: map
        });
        var MartinOMalleyMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[5],
            map: map
        });
        var MartinOMalleyMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[6],
            map: map
        });
        var MartinOMalleyMarker8 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MartinOMalleyPath[7],
            map: map
        });
        MartinOMalleyMarker1.addListener('click', function() {
            infowindow.open(map, MartinOMalleyMarker1);
        });
        MartinOMalleyMarker2.addListener('click', function() {
            infowindow2.open(map, MartinOMalleyMarker2);
        });
        MartinOMalleyMarker3.addListener('click', function() {
            infowindow3.open(map, MartinOMalleyMarker3);
        });
        MartinOMalleyMarker4.addListener('click', function() {
            infowindow.open(map, MartinOMalleyMarker4);
        });
        MartinOMalleyMarker5.addListener('click', function() {
            infowindow2.open(map, MartinOMalleyMarker5);
        });
        MartinOMalleyMarker6.addListener('click', function() {
            infowindow3.open(map, MartinOMalleyMarker6);
        });
        MartinOMalleyMarker7.addListener('click', function() {
            infowindow.open(map, MartinOMalleyMarker7);
        });
        MartinOMalleyMarker8.addListener('click', function() {
            infowindow2.open(map, MartinOMalleyMarker8);
        });
    }

    function addMikeHuckabeeMarkers() {
        var MikeHuckabeeMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MikeHuckabeePath[0],
            map: map
        });
        var MikeHuckabeeMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MikeHuckabeePath[1],
            map: map
        });
        var MikeHuckabeeMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MikeHuckabeePath[2],
            map: map
        });
        var MikeHuckabeeMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MikeHuckabeePath[3],
            map: map
        });
        var MikeHuckabeeMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MikeHuckabeePath[4],
            map: map
        });
        var MikeHuckabeeMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: MikeHuckabeePath[5],
            map: map
        });
        MikeHuckabeeMarker1.addListener('click', function() {
            infowindow.open(map, MikeHuckabeeMarker1);
        });
        MikeHuckabeeMarker2.addListener('click', function() {
            infowindow2.open(map, MikeHuckabeeMarker2);
        });
        MikeHuckabeeMarker3.addListener('click', function() {
            infowindow3.open(map, MikeHuckabeeMarker3);
        });
        MikeHuckabeeMarker4.addListener('click', function() {
            infowindow.open(map, MikeHuckabeeMarker4);
        });
        MikeHuckabeeMarker5.addListener('click', function() {
            infowindow2.open(map, MikeHuckabeeMarker5);
        });
        MikeHuckabeeMarker6.addListener('click', function() {
            infowindow3.open(map, MikeHuckabeeMarker6);
        });
    }

    function addRandPaulMarkers() {
        var RandPaulMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[0],
            map: map
        });
        var RandPaulMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[1],
            map: map
        });
        var RandPaulMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[2],
            map: map
        });
        var RandPaulMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[3],
            map: map
        });
        var RandPaulMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[4],
            map: map
        });
        var RandPaulMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[5],
            map: map
        });
        var RandPaulMarker7 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RandPaulPath[6],
            map: map
        });
        RandPaulMarker1.addListener('click', function() {
            infowindow.open(map, RandPaulMarker1);
        });
        RandPaulMarker2.addListener('click', function() {
            infowindow2.open(map, RandPaulMarker2);
        });
        RandPaulMarker3.addListener('click', function() {
            infowindow3.open(map, RandPaulMarker3);
        });
        RandPaulMarker4.addListener('click', function() {
            infowindow.open(map, RandPaulMarker4);
        });
        RandPaulMarker5.addListener('click', function() {
            infowindow2.open(map, RandPaulMarker5);
        });
        RandPaulMarker6.addListener('click', function() {
            infowindow3.open(map, RandPaulMarker6);
        });
        RandPaulMarker7.addListener('click', function() {
            infowindow.open(map, RandPaulMarker7);
        });
    }

    function addRickSantorumMarkers() {
        var RickSantorumMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RickSantorumPath[0],
            map: map
        });
        var RickSantorumMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RickSantorumPath[1],
            map: map
        });
        var RickSantorumMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RickSantorumPath[2],
            map: map
        });
        var RickSantorumMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RickSantorumPath[3],
            map: map
        });
        var RickSantorumMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RickSantorumPath[4],
            map: map
        });
        var RickSantorumMarker6 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: RickSantorumPath[5],
            map: map
        });
        RickSantorumMarker1.addListener('click', function() {
            infowindow.open(map, RickSantorumMarker1);
        });
        RickSantorumMarker2.addListener('click', function() {
            infowindow2.open(map, RickSantorumMarker2);
        });
        RickSantorumMarker3.addListener('click', function() {
            infowindow3.open(map, RickSantorumMarker3);
        });
        RickSantorumMarker4.addListener('click', function() {
            infowindow.open(map, RickSantorumMarker4);
        });
        RickSantorumMarker5.addListener('click', function() {
            infowindow2.open(map, RickSantorumMarker5);
        });
        RickSantorumMarker6.addListener('click', function() {
            infowindow3.open(map, RickSantorumMarker6);
        });
    }

    function addTedCruzMarkers() {
        var TedCruzMarker1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: TedCruzPath[0],
            map: map
        });
        var TedCruzMarker2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: TedCruzPath[1],
            map: map
        });
        var TedCruzMarker3 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: TedCruzPath[2],
            map: map
        });
        var TedCruzMarker4 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: TedCruzPath[3],
            map: map
        });
        var TedCruzMarker5 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: TedCruzPath[4],
            map: map
        });
        TedCruzMarker1.addListener('click', function() {
            infowindow.open(map, TedCruzMarker1);
        });
        TedCruzMarker2.addListener('click', function() {
            infowindow2.open(map, TedCruzMarker2);
        });
        TedCruzMarker3.addListener('click', function() {
            infowindow3.open(map, TedCruzMarker3);
        });
        TedCruzMarker4.addListener('click', function() {
            infowindow.open(map, TedCruzMarker4);
        });
        TedCruzMarker5.addListener('click', function() {
            infowindow2.open(map, TedCruzMarker5);
        });
    }
}

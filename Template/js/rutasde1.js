document.addEventListener("deviceready", onRutade1Ready, false);
var map;
var directionsDisplay;
var directionsService;
var markerUsuario;
var verifica=0;
function onRutade1Ready() { 
    $("#modal2").openModal();
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 15000 });  
}
//$( document ).ready(function(){
//    $("#modal2").openModal();
//    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 15000 });
//});

function onSuccess(position) {
    $("#modal2").closeModal();
    $("#lat").val(position.coords.latitude);
    $("#lon").val(position.coords.longitude);
    if(verifica==1)
    {
        markerUsuario.setMap(null);
        var lat=position.coords.latitude;
        var lon=position.coords.longitude;
        var latLong = new google.maps.LatLng(lat, lon);

        var markerUsuario = new google.maps.Marker({
                      position: latLong,
                      map: map,
                      title: 'Estoy Aqui',
                      icon: 'img/pasajero.png'
                  });
    }
}

// onError Callback receives a PositionError object
//
function onError(error) {
   
}
function buscarParaderos()
{
    verifica =1;
    $("#modal1").openModal();
    if($("#lon").val()!="")
    {
        var lon = $("#lon").val();
        var lat = $("#lat").val();
        var dis = $("#distancia").val();
        var ruta = $("#ruta").val();
        
        $.ajax({
            type: 'GET',
            url: dirUrlServices+"getParaderosde1/"+lon+"/"+lat+"/"+dis+"/"+ruta,
            headers: {
                "T0K3N1":"T3l3N0t1c14s_p4r4",
                "T0K3N2":"3st4r_b13n_1nf0rm4d0"
            },
            data: {}
        }).done(function(result) 
        {
            $("#modal1").closeModal();
            $("#map").show();
            $("#map2").show();
            $("#busqueda").hide();
            var latLong = new google.maps.LatLng($("#lat").val(), $("#lon").val());

            var mapOptions = {
                center: latLong,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            directionsDisplay = new google.maps.DirectionsRenderer();
            directionsService = new google.maps.DirectionsService();
            
            markerUsuario = new google.maps.Marker({
                  position: latLong,
                  map: map,
                  title: 'Estoy Aqui',
                  icon: 'img/pasajero.png'
              });
              
            $.each(result, function(i, data) {  
                var latLong1 = new google.maps.LatLng(data.lat, data.lon);
                var infowindow1 = new google.maps.InfoWindow({
                    content: "<b>Parada: </b>"+data.nom+"<br/><b>Ruta: </b>"+data.ruta+"<br/><b>Distancia:</b>"+parseInt(data.distance)+"/mts"
                  });
                
                var marker1 = new google.maps.Marker({
                    position: latLong1,
                    map: map,
                    title: data.nom,
                    icon: 'img/paradero.png'
                });
                
                //infowindow1.open(map, marker1);
                marker1.addListener('click', function() {
                    infowindow1.open(map, marker1);
                  });
            }); 
            
            
        });
    }
}

function getDirections(lat, lon){
    alert("Lat "+$("lat").val()+" Long "+$("lon").val());
    $('#start').val();
    $('#end').val(lat+","+lon);
    var start = $('#start').val();
    var end = $('#end').val();
    alert("Start "+start+" End "+end)
    if(!start || !end){
            alert("Es necesario que indique una posicion de Inicio y de Fin de ruta");
            return;
    }
    var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode["WALKING"],
            unitSystem: google.maps.DirectionsUnitSystem["METRIC"],
            provideRouteAlternatives: true
   };
    directionsService.route(request, function(response, status) {
       if (status == google.maps.DirectionsStatus.OK) {
           directionsDisplay.setMap(map);
           //directionsDisplay.setPanel($("#directions_panel").get(0));
           directionsDisplay.setDirections(response);
       } else {
           alert("No se pudo calcular la ruta");
       }
   });
}
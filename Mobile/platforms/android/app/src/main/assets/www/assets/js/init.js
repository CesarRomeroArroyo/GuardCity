document.addEventListener("deviceready", onDeviceReady, false);
var dirUrlServices="http://mycsoftware.com/telenoticias/admin/api1.php/";
function onDeviceReady() {   
    var db = window.sqlitePlugin.openDatabase({name: "telenoticias.db"});
    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nombre text, ciudad text, email text, foto text)');                          
        tx.executeSql('CREATE TABLE IF NOT EXISTS zonasinseguras (id integer primary key, tipo text, nombre text, descripcion text, fecha text)');                          
       
    });
    
    window.plugins.PushbotsPlugin.initialize("566362fc177959a62b8b4568", {"android":{"sender_id":"966030009784"}});
    
    // Should be called once app receive the notification
    window.plugins.PushbotsPlugin.on("notification:received", function(data){
            //alert("received:" + JSON.stringify(data));
            //myApp.alert(data.message, 'InterClub');
    });
    
    // Should be called once the notification is clicked
    window.plugins.PushbotsPlugin.on("notification:clicked", function(data){
        navigator.notification.alert(
            data.message, // message
             null,            // callback to invoke with index of button pressed
            'TeleNoticias',           // title
            'Aceptar'          // buttonLabels
        );
    });
    
    //var Pushbots = PushbotsPlugin.initialize("566362fc177959a62b8b4568", {"android":{"sender_id":"966030009784"}});
    //Pushbots.updateAlias(device.uuid);
    window.plugins.PushbotsPlugin.updateAlias(device.uuid);
   
   
    
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError); 
}

function onSuccess(position) {        
    
    $("#lon").val(position.coords.longitude);
    $("#lat").val(position.coords.latitude);        
}

function onError(error) {
    
}

$( document ).ready(function(){
    $(".button-collapse").sideNav();
    
    new WOW().init();
    $(window).scroll(function() {
        
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(500);
        } else {
            $('.go-top').fadeOut(300);
        }
    });
     //$('.slider').slider({full_width: false});   
});

function currency(value, decimals, separators) {
    decimals = decimals >= 0 ? parseInt(decimals, 0) : 2;
    separators = separators || ['.', "'", ','];
    var number = (parseFloat(value) || 0).toFixed(decimals);
    if (number.length <= (4 + decimals))
        return number.replace('.', separators[separators.length - 1]);
    var parts = number.split(/[-.]/);
    value = parts[parts.length > 1 ? parts.length - 2 : 0];
    var result = value.substr(value.length - 3, 3) + (parts.length > 1 ?
        separators[separators.length - 1] + parts[parts.length - 1] : '');
    var start = value.length - 6;
    var idx = 0;
    while (start > -3) {
        result = (start > 0 ? value.substr(start, 3) : value.substr(0, 3 + start))
            + separators[idx] + result;
        idx = (++idx) % 2;
        start -= 3;
    }
    return (parts.length == 3 ? '-' : '') + result;
}
    
function getGET(){
    var loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var get = {};//this object will be filled with the key-value pairs and returned.

    for(var i = 0, l = GET.length; i < l; i++){
       var tmp = GET[i].split('=');
       get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
}

function myMsgClickHandler(msg){        
	navigator.notification.alert(
            msg.message, // message
             null,            // callback to invoke with index of button pressed
            'TeleNoticias',           // title
            'Aceptar'          // buttonLabels
        );	
}
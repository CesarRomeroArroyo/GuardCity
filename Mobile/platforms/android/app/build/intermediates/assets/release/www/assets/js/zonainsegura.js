document.addEventListener("deviceready", onMicuentaReady, false);
function onMicuentaReady() {    
    var db = window.sqlitePlugin.openDatabase({name: "telenoticias.db"});
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM zonasinseguras ORDER BY id DESC LIMIT 0, 5',[], function(tx, res) {                        
            if (res != null && res.rows != null) {
                for (var i = 0; i < res.rows.length; i++) {
                    var row = res.rows.item(i);                                                 
                    $("#listaZonaInsegura").append('<li class="collection-item avatar" ><i class="mdi-maps-place circle" style="background: #227595"></i><span class="title">'+row.nombre+'</span><p>'+row.fecha+'</p></li>');
                }
            }            
        });                                  
    });
}

$( document ).ready(function(){
    $('.modal-trigger').leanModal(); 
});


function guardarDatos()
{
    var f = new Date();    
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    $("#modal1").openModal();
    var db = window.sqlitePlugin.openDatabase({name: "telenoticias.db"});
    db.transaction(function(tx) {                   
        tx.executeSql("INSERT INTO zonasinseguras (tipo, nombre, descripcion, fecha) VALUES(?,?,?,?)",
        [$("#tipo").val(),$('#tipo option:selected').text(),$("#descripcion").val(), fecha], function (){                
            navigator.geolocation.getCurrentPosition(onSuccessZona, onErrorZona); 
        });       
    });   
}

function onSuccessZona(position) {        
    
    $("#lonzona").val(position.coords.longitude);
    $("#latzona").val(position.coords.latitude);        
    $.ajax({
        type: 'POST',
        url: dirUrlServices+"setZonaInsegura",
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {"tipo":$("#tipo").val(),"nombre":$('#tipo option:selected').text(), "descripcion":$("#descripcion").val(),"lat":$("#latzona").val(),"lon":$("#lonzona").val()}                    
    }).done(function(data) {    
        $("#modal1").closeModal();
        navigator.notification.alert(
            "Su reporte fue registrado correctamente, gracias por usar Se Civico",  // message
            redirectIndex,
            'Se Civico',            // title
            'Aceptar'                  // buttonName
        ); 
    });
    
}

function onErrorZona(error) {
    $("#modal1").closeModal();
    navigator.notification.alert(
        "No fue posible enviar tu reporte ya que hubo un error al momento de ubicarte, es necesario que tu equipo tenga la ubicacion gps activa",  // message
        redirectIndex,
        'Se Civico',            // title
        'Aceptar'                  // buttonName
    ); 
}


function redirectIndex()
{
    location.href = "secivico.html";
}
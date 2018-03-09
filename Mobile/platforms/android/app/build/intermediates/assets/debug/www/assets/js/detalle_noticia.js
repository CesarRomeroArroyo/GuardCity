document.addEventListener("deviceready", onDetallesReady, false);
function onDetallesReady() {    
    $(".load").show();
    $(".nota").hide();  
    cargarNoticia(); 
    navigator.geolocation.getCurrentPosition(onDetalleGpsSuccess, onDetalleGpsError);      
}

function onDetalleGpsSuccess(position) {        
    registroMasLeidos();
    $("#lon").val(position.coords.longitude);
    $("#lat").val(position.coords.latitude);        
}

function onDetalleGpsError(error) {
    
}

$( document ).ready(function(){
//$(".load").show();
//    $(".nota").hide();  
//    cargarNoticia(); 
//    navigator.geolocation.getCurrentPosition(onDetalleGpsSuccess, onDetalleGpsError)
});

function cargarNoticia()
{
    
    var get = getGET();
    $("#idunico").val(get.id);
    $.ajax({
        type: 'GET',
        url: dirUrlServices+"getNoticia/"+get.id,
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {}
    }).done(function(result) {  
        $(".load").hide();    
        $(".nota").show();
        
        $.each(result, function(i, data) {                        
            if(data.tipo==3 || data.tipo==4)
            {
                var info = '<img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg">';
                $("#imageDIV").append(info);
            }
           
            if(data.tipo==5)
            {
                var info = '<iframe width="100%" height="480" src="'+data.video+'" frameborder="0" allowfullscreen></iframe>';
                $("#imageDIV").html(info);
            }
            $("#fotoPeriodistaDiv").html('<img src="http://telenoticias.myssoftware.com/admin/camara/'+data.idusuario+'.jpeg" alt="" class="circle" style="width: 70px;height: 70px">');
            $("#fechaDiv").text(data.fecha);
            $("#contenidoDiv").append("<b>"+data.titulo+"</b><br/>");
            $("#contenidoDiv").append(data.contenido+"<br/><br/><br/>");
            $("#periodistaDiv").html("Siguenos en:");            
                     
            $("#seccion").val(data.seccion);            
        });
        $(".load").hide();
        $(".nota").show();
        cargarRelacionadas();        
    });
}

function cargarRelacionadas()
{
    var get = getGET();
    var seccion = $("#seccion").val();
    $.ajax({
        type: 'GET',
        url: dirUrlServices+"getListas/"+get.id+"/"+seccion,
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {}
    }).done(function(result) {  
        
        $.each(result, function(i, data) {                        
               $("#noticiaLista").append('<li class="collection-item avatar" ><a href="detalle_noticia.html?id='+data.idunico+'"><i class="material-icons circle" style="background:#de1f20">'+data.letra+'</i><span class="title" style="color:black">'+data.titulo+'</span><p style="color:black"></p><a href="detalle_noticia.html?id='+data.idunico+'" class="secondary-content"></a></a></li>');         
        });
        cargarComentarios();
    });
}

function cargarComentarios()
{
    var get = getGET();
    
    $.ajax({
        type: 'GET',
        url: dirUrlServices+"getComentarios/"+get.id,
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {}
    }).done(function(result) {  
        
        $.each(result, function(i, data) {                        
            
                var info = '<div style="width: 100%; text-align: center"><img src="img/user.png" alt="" class="circle" style="width: 60px;height: 60px"><br/><b>'+data.nombre+'</b><br/><br/></div><div id="comentariosDiv"><span class="black-text" style="text-align: justify">'+data.contenido+'</span><hr/>';
                $("#comentariosDiv").append(info);
            
        });
    });
}

function crearComentario()
{
    
    if($("#nombreCom").val()!="" && $("#EmailCom").val()!="" && $("#contedio").val()!="")
    {
        $.ajax({
            type: 'POST',
            url: dirUrlServices+"setComentario/",
            headers: {
                "T0K3N1":"T3l3N0t1c14s_p4r4",
                "T0K3N2":"3st4r_b13n_1nf0rm4d0"
            },
            data: {"idunico":$("#idunico").val(), "contenido":$("#contenido").val(), "nombre":$("#nombreCom").val(), "email":$("#emailCom").val()}
        }).done(function() {  
            $("#comentariosDiv").empty();
            cargarComentarios();
    //        $("#nombreCom").val("");
    //        $("#emailCom").val("");
    //        $("#contenido").val("");

        });
    }
    else
    {
         navigator.notification.alert(
                "Debes ingresar todos los campos para poder realizar un comentario.",  // message
                null,
                'TeleNoticias',            // title
                'Aceptar'                  // buttonName
            ); 
    }
}

function registroMasLeidos()
{       
    $.ajax({
        type: 'POST',
        url: dirUrlServices+"setReporteMasLeido/",
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {"idunico":$("#idunico").val(), "lat":$("#lat").val(), "lon":$("#lon").val()}
    }).done(function() {              

    });
}
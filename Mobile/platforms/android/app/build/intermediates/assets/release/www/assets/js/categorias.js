document.addEventListener("deviceready", onCategoriasReady, false);
function onCategoriasReady() { 
    $(".load").hide();
    $(".nota").hide();
    $(".noconection").hide();
    nombreCategoria();
    cargarNoticias();      
}

$( document ).ready(function(){
//    $(".load").hide();
//    $(".nota").hide();
//    $(".noconection").hide();
//   nombreCategoria();
//    cargarNoticias(); 
});

function cargarNoticias()
{
//    if(navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.UNKNOWN) {          
//        $(".noconection").show();        
//    }
//    else
//    {
        var get = getGET();
        $.ajax({
            type: 'GET',
            url: dirUrlServices+"getNoticiasCategoria/"+get.id,
            headers: {
                "T0K3N1":"T3l3N0t1c14s_p4r4",
                "T0K3N2":"3st4r_b13n_1nf0rm4d0"
            },
            data: {}
        }).done(function(result) {  
            $(".load").hide();
            $(".nota").show();
            $.each(result, function(i, data) {                        
                if(data.tipo==3)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title">'+data.titulo+'</span></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==4)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>  ';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==5)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image video-container"><iframe width="853" height="480" src="'+data.video+'" frameborder="0" allowfullscreen></iframe></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==6)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card blue-grey darken-1"><div class="card-content white-text" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><span class="card-title">'+data.titulo+'</span><p>'+data.contenido+'</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'" style="color: white">Leer Mas...</a></div></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==7)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><a href="detalle_noticia.html?id='+data.idunico+'"> <div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title"><b>'+data.titulo+'</b> <br/> <label style="color:white">'+data.contenido+'</label></span></div></a></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                $("#limit").val(data.limite);
            });
        });
    //}
}

function cargarMasNoticias()
{
    
        $("#masNoticiasDiv").show();
        var lim = parseInt($("#limit").val())+9;
        var get = getGET();
        $.ajax({
            type: 'GET',
            url: dirUrlServices+"getMasNoticiasCategoria/"+get.id+"/"+lim,
            headers: {
                "T0K3N1":"T3l3N0t1c14s_p4r4",
                "T0K3N2":"3st4r_b13n_1nf0rm4d0"
            },
            data: {}
        }).done(function(result) {   
            $("#masNoticiasDiv").hide();
            $.each(result, function(i, data) {                        
                if(data.tipo==3)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title">'+data.titulo+'</span></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==4)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>  ';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==5)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image video-container"><iframe width="853" height="480" src="'+data.video+'" frameborder="0" allowfullscreen></iframe></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==6)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card blue-grey darken-1"><div class="card-content white-text" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><span class="card-title">'+data.titulo+'</span><p>'+data.contenido+'</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'" style="color: white">Leer Mas...</a></div></div></div>';
                    $("#notiInicialDiv").append(info);
                }
                if(data.tipo==7)
                {
                    var info = '<div class="col s12 m12 l12"><div class="card big"><a href="detalle_noticia.html?id='+data.idunico+'"> <div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title"><b>'+data.titulo+'</b> <br/> <label style="color:white">'+data.contenido+'</label></span></div></a></div></div>';
                    $("#notiInicialDiv").append(info);
                }
            });
        });
    
}

function nombreCategoria()
{
    $(".load").show();
        var get = getGET();

        $.ajax({
            type: 'GET',
            url: dirUrlServices+"getNombreCategoria/"+get.id,
            headers: {
                "T0K3N1":"T3l3N0t1c14s_p4r4",
                "T0K3N2":"3st4r_b13n_1nf0rm4d0"
            },
            data: {}
        }).done(function(result) 
        {             
            $.each(result, function(i, data) { 

                $("#nombreCatDiv").text(data.text);
            });

        });    
}
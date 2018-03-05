document.addEventListener("deviceready", onIndexReady, false);
function onIndexReady() {  
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
    $(".load").hide();
    $(".nota").hide();
    $(".noconection").hide();
    cargarNoticias();  
      
}

$( document ).ready(function(){
    $(".load").show();
    $(".nota").hide();
    $(".noconection").hide();
    cargarNoticias();  
});



function cargarNoticias()
{        
        debugger;
        //PushbotsPlugin.setAlias(device.uuid);          
        $(".load").show();
        var stream = '';
        
        $(".noconection").hide();
        
        var estadoStreaming=0;
        $.ajax({
            type: 'GET',
            url: dirUrlServices+"getEstadoStreaming",
            headers: {
                "T0K3N1":"T3l3N0t1c14s_p4r4",
                "T0K3N2":"3st4r_b13n_1nf0rm4d0"
            },
            data: {}
        }).done(function(result) 
        {
            debugger;
            alert(result);
            $.each(result, function(i, data) { 
                
                estadoStreaming = data.valor;                
                if(estadoStreaming==1)
                {
                    stream = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image video-container"><iframe style="border: 0px none transparent;" src="http://www.ustream.tv/embed/16935976?v=3&wmode=direct" width="480" height="302" frameborder="0" scrolling="no"></iframe></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;"></label><b>Se&ntilde;al en Vivo</b><br/><p>Noticiero TeleNoticias<br/>Veanos en nuestras emisiones <br/>En vivo: <b>6:30 pm a 7:30 pm</b> <br/>Repeticiones: <b>10:00 pm y 6:00 am</b></p></div></div></div>';
                    $("#notiInicialDiv").append(stream);
                }
            });
            stream = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="img/deuno.png"><span class="card-title"></span></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">Rutas de Uno</label><p>Busca las rutas de tu convenecia, Telenoticias te ayuda a buscarla</p></div><div class="card-action"  style="text-align: right"><a href="rutasde1.html"><i class="fa fa-search"></i>Ver mas...</a></div></div></div>';
            $("#notiInicialDiv").append(stream);
            
            $.ajax({
                type: 'GET',
                url: dirUrlServices+"getNoticias",
                headers: {
                    "T0K3N1":"T3l3N0t1c14s_p4r4",
                    "T0K3N2":"3st4r_b13n_1nf0rm4d0"
                },
                data: {}
                }).done(function(result) 
                {  
                    debugger;
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
                    });

                    cargarPublicidad();

                });
        });
}

function cargarPublicidad()
{
    $.ajax({
        type: 'GET',
        url: dirUrlServices+"getPublicidad",
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {}
    }).done(function(result) {   
        var cabe ='<div class="col s12 m12  l12"><div class="slider"><ul class="slides" id="slides">';
        $("#publicidadDiv").append(cabe);
        $.each(result, function(i, data) {                                    
            var info = '<li><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><div class="caption right-align"><h3>'+data.titulo+'!</h3><h5 class="light grey-text text-lighten-3">'+data.contenido+'.</h5></div></li>';
            $("#slides").append(info);            
        });
        var cabe ='</ul></div></div>';
        $("#publicidadDiv").append(cabe);
        $('.slider').slider({full_width: false}); 
        cargarMasNoticias();
    });
    
}

function cargarMasNoticias()
{
    $.ajax({
        type: 'GET',
        url: dirUrlServices+"getMasNoticias/10",
        headers: {
            "T0K3N1":"T3l3N0t1c14s_p4r4",
            "T0K3N2":"3st4r_b13n_1nf0rm4d0"
        },
        data: {}
    }).done(function(result) {             
        $.each(result, function(i, data) {                        
            if(data.tipo==3)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title">'+data.titulo+'</span></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==4)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>  ';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==5)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image video-container"><iframe width="853" height="480" src="'+data.video+'" frameborder="0" allowfullscreen></iframe></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==6)
            {
                var info = '<div class="col s12 m12 l12"><div class="card blue-grey darken-1"><div class="card-content white-text" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><span class="card-title">'+data.titulo+'</span><p>'+data.contenido+'</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'" style="color: white">Leer Mas...</a></div></div></div>';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==7)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><a href="detalle_noticia.html?id='+data.idunico+'"> <div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title"><b>'+data.titulo+'</b> <br/> <label style="color:white">'+data.contenido+'</label></span></div></a></div></div>';
                $("#notiFinalDiv").append(info);
            }
            $("#limit").val(data.limite);
        });
        
    });
}

function btnCargarMasNoticias()
{
    $("#masNoticiasDiv").show();
    var lim = parseInt($("#limit").val())+9;
    $.ajax({
        type: 'GET',
        url: dirUrlServices+"getMasNoticias/"+lim,
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
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==4)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action"  style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>  ';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==5)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><div class="card-image video-container"><iframe width="853" height="480" src="'+data.video+'" frameborder="0" allowfullscreen></iframe></div><div class="card-content" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><label class="rigth" style="color: #de1f20;margin: 15px 0;display: block;font-size: 12px;">'+data.fecha+'</label><b>'+data.titulo+'</b><p>'+data.contenido+'...</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'">Ver mas...</a></div></div></div>';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==6)
            {
                var info = '<div class="col s12 m12 l12"><div class="card blue-grey darken-1"><div class="card-content white-text" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 5px"><span class="card-title">'+data.titulo+'</span><p>'+data.contenido+'</p></div><div class="card-action" style="text-align: right"><a href="detalle_noticia.html?id='+data.idunico+'" style="color: white">Leer Mas...</a></div></div></div>';
                $("#notiFinalDiv").append(info);
            }
            if(data.tipo==7)
            {
                var info = '<div class="col s12 m12 l12"><div class="card big"><a href="detalle_noticia.html?id='+data.idunico+'"> <div class="card-image"><img src="http://telenoticias.myssoftware.com/admin/publicacion/'+data.idunico+'/imagenes/imagen.jpg"><span class="card-title"><b>'+data.titulo+'</b> <br/> <label style="color:white">'+data.contenido+'</label></span></div></a></div></div>';
                $("#notiFinalDiv").append(info);
            }
            $("#limit").val(data.limite);
        });
        
        //$("#masNoticiasDiv").append('<button class="btn btn-large" onclick="btnCargarMasNoticias()" style="background: #de1f20; width: 100%"><i class="large mdi-content-add"></i> Noticias...</button> ');
    });
}
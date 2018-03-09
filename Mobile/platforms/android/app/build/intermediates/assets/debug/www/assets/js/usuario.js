document.addEventListener("deviceready", onMicuentaReady, false);
function onMicuentaReady() {    
    var db = window.sqlitePlugin.openDatabase({name: "telenoticias.db"});
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM usuario',[], function(tx, res) {                        
            if (res != null && res.rows != null) {
                for (var i = 0; i < res.rows.length; i++) {
                    var row = res.rows.item(i);                                                 
                    $("#nombre").val(row.nombre);                    
                    $("#ciudad").val(row.ciudad);                    
                    $("#correo").val(row.email);                                        
                    $("#nombre").focus();
                    $("#ciudad").focus();
                    $("#correo").focus();
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
    $("#modal1").openModal();
    var db = window.sqlitePlugin.openDatabase({name: "telenoticias.db"});
    db.transaction(function(tx) {
        tx.executeSql("SELECT count (id) as cant FROM usuario",[], function(tx, res){
            if(res.rows.item(0).cant>0)
            {
                tx.executeSql("DELETE FROM usuario WHERE id != '';", []);
            }
            tx.executeSql("INSERT INTO usuario (nombre, ciudad, email) VALUES(?,?,?)",
            [$("#nombre").val(),$("#ciudad").val(),$("#correo").val()], function (){
                
            $.ajax({
                type: 'POST',
                url: dirUrlServices+"setUsuario",
                headers: {
                    "T0K3N1":"T3l3N0t1c14s_p4r4",
                    "T0K3N2":"3st4r_b13n_1nf0rm4d0"
                },
                data: {"nombre":$("#nombre").val(), "ciudad":$("#ciudad").val(),"email":$("#correo").val()}                    
            }).done(function(data) {    
                $("#modal1").closeModal();
                navigator.notification.alert(
                    "El Usuario fue Creado Correctamente, Bienvenid@ a Se Civico",  // message
                    redirectIndex,
                    'Se Civico',            // title
                    'Aceptar'                  // buttonName
                ); 
            });
                
                
            });
        });
    });   
}

function redirectIndex()
{
    location.href = "secivico.html";
}
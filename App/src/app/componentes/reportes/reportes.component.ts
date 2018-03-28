import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';
import { LocalStorageService } from '../../servicios/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { OnesignalService } from '../../servicios/onesignal.service';
import { DomSanitizer } from '@angular/platform-browser';

import * as $ from 'jquery';
import * as $$ from 'materialize-css';

declare var $: any;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit, AfterViewInit {
  reporte: any =
  {comentario: '', estado: 1, fecha: '', idunico: '', latitud: '', longitud: '', tipo: 'Robo',  usuario: '',
    usuario_estado: '', imagen: '', hora: ''};
  tipo_reporte: any = {texto: ''};
  imagen: any = {src: 'assets/img/camara.jpg', width: '50%', height: '50%'};
  cameraConfiguration: CameraOptions;
  base64Image = '';

  constructor( private service: FirebaseService, private appSettings: AppSettings,
    private local: LocalStorageService, private route: ActivatedRoute,
    private router: Router, private geolocation: Geolocation, private oneSignal: OnesignalService,
    private camera: Camera, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.obtenerTipoReportes();
    this.cameraConfiguration = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }

  obtenerFotografia() {
    this.camera.getPicture(this.cameraConfiguration).then((imageData) => {
      this.base64Image = imageData;
      const img = 'data:image/jpeg;base64,' + imageData;
      this.imagen = {src: this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%'};
     }, (err) => {
        this.base64Image = '';
     });
  }

  obtenerTipoReportes() {
    this.service.obtenerDatosTipoReporte('Tipo_Reporte').subscribe(
      result => {
        this.tipo_reporte = result;
      }
    );
  }

  enviarReporte() {
    $('#modalCargando').modal('open');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.reporte.latitud = resp.coords.latitude;
      this.reporte.longitud = resp.coords.longitude;
      const ciudad = JSON.parse(this.local.obtener('GUARDCITY_CITY'))[0];
      const distaCiudad = this.appSettings.obtenerDistancia(ciudad.longitud, ciudad.latitud, resp.coords.longitude,
        resp.coords.latitude);
      if (parseFloat(ciudad.limite) > distaCiudad) {
          this.reporte.imagen = this.base64Image;
          this.reporte.hora = this.appSettings.getCurrentHour();
          const usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
          this.reporte.fecha = this.appSettings.getCurrentDay();
          this.reporte.usuario = usuario.id;
          this.service.guardarDatos('Reportes', this.reporte);
          setTimeout(() => {
            // this.oneSignal.enviarPush(`Se ha reportado ${this.reporte.tipo}, ${this.reporte.comentario}`);
            this.inicializarReporte();
            $('#modalCargando').modal('close');
            $('#modalGuardado').modal('open');
          }, 17000);
      } else {
        $('#modalCargando').modal('close');
        $('#modalError').modal('open');
      }
   }).catch((error) => {
     alert('Existe un problema con sus GPS o no tiene instalado un modulo de GPS');
   });
  }

  mostrarReportesHoy() {
    $('#modalGuardado').modal('close');
    this.imagen = {src: 'assets/img/camara.jpg', width: '50%', height: '50%'};
    this.router.navigate(['/reportedia']);
  }

  ocultarCargando() {
    $('#modalError').modal('close');
  }

  inicializarReporte() {
    this. reporte = { comentario: '', estado: 1, fecha: '', idunico: '', latitud: '', longitud: '',
       tipo: 'Robo',  usuario: '', usuario_estado: '', imagen: '', hora: '' };
  }


  ngAfterViewInit(): void {
      $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '20%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function() {  } // Callback for Modal close
      }
    );
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LocalStorageService } from '../../servicios/local-storage.service';
import { Geolocation } from '@ionic-native/geolocation';
import { Vibration } from '@ionic-native/vibration';
import { OnesignalService } from '../../servicios/onesignal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';

declare var $: any;
declare var Materialize: any;
@Component({
  selector: 'app-reportes-seguimiento',
  templateUrl: './reportes-seguimiento.component.html',
  styleUrls: ['./reportes-seguimiento.component.css']
})
export class ReportesSeguimientoComponent implements OnInit, AfterViewInit {
  reporte: any;
  seguimientos: any;
  seguimiento: any = {comentario: '', fecha: '', idunico: '', latitud: '', longitud: '', imagen: '', hora: ''};
  idReporte: string;
  ciudad: any;
  imagen: any = {src: 'assets/img/camara.jpg', width: '50%', height: '50%'};
  imagen2: any = {src: 'assets/img/camara.jpg', width: '50%', height: '50%'};
  cameraConfiguration: CameraOptions;
  base64Image = '';

  constructor(private service: FirebaseService, private activatedRoute: ActivatedRoute, private appSettings: AppSettings,
    private local: LocalStorageService, private geolocation: Geolocation, private vibration: Vibration,
    private oneSignal: OnesignalService, private domSanitizer: DomSanitizer, private camera: Camera) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.ciudad = JSON.parse(this.local.obtener('GUARDCITY_CITY'))[0];
      this.ciudad.latitud = parseFloat(this.ciudad.latitud);
      this.ciudad.longitud = parseFloat(this.ciudad.longitud);
      this.idReporte = params['id'];
      this.buscarReporte();
      this.cameraConfiguration = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
    });
  }

  obtenerFotografia() {
    this.camera.getPicture(this.cameraConfiguration).then((imageData) => {
      this.base64Image = imageData;
      const img = 'data:image/jpeg;base64,' + imageData;
      this.imagen2 = {src: this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%'};
     }, (err) => {
       alert('Ocurrio un error al tratar de usar la camara');
     });
  }

  buscarReporte() {
    this.service.obtenerDatosPorIdUnico('Reportes', this.idReporte).subscribe(
      result => {
        this.reporte = this.appSettings.getIconosMapasIndividual(result);
        if (this.reporte.imagen !== '') {
          const img = 'data:image/jpeg;base64,' + this.reporte.imagen;
          this.imagen = {src: this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%'};
        }
        this.buscarSeguimiento();
      }
    );
  }

  buscarSeguimiento() {
    this.service.obtenerDatosPorIdUnico('Seguimientos', this.idReporte).subscribe(
      result => {
        let verificar = false;
        if (this.seguimientos && this.seguimientos.length !== result.length) {
          verificar = true;
        }
        if (verificar) {
          Materialize.toast('Nuevo Reporte de Seguimiento', 3000, 'rounded');
          this.vibration.vibrate(1000);
        }
        this.seguimientos = result;
        for (let i  = 0; i < this.seguimientos.length; i++) {
            const img = 'data:image/jpeg;base64,' + this.seguimientos[i].imagen;
            this.seguimientos[i].imagen = this.domSanitizer.bypassSecurityTrustUrl(img);
        }
      }
    );
  }

  registrarSeguimiento() {
    if (this.seguimiento.comentario !== '') {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.seguimiento.latitud = resp.coords.latitude;
        this.seguimiento.longitud = resp.coords.longitude;
        this.seguimiento.fecha = this.appSettings.getCurrentDay();
        this.seguimiento.idunico = this.idReporte;
        this.seguimiento.hora = this.appSettings.getCurrentHour();
        this.seguimiento.imagen = this.base64Image;
        this.imagen2 = {src: 'assets/img/camara.jpg', width: '50%', height: '50%'};
        this.service.guardarSeguimientoDatos('Seguimientos', this.seguimiento);
        this.oneSignal.enviarPush(`Se ha reportado un Seguimiento a ${this.reporte.tipo}, ${this.seguimiento.comentario}`);
        this.buscarSeguimiento();
        this.reiniciarSeguimiento();
      }).catch((error) => {
        alert('Existe un problema con sus GPS o no tiene instalado un modulo de GPS');
      });
    }
  }

  reiniciarSeguimiento() {
    this.seguimiento = {comentario: '', fecha: '', idunico: '', latitud: '', longitud: '', hora: '', imagen: ''};
  }

  abrirModalSeguimiento() {
    $('#modalSeguimiento').modal('open');
  }

  ngAfterViewInit(): void {
      $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '80%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          },
          complete: function() {  } // Callback for Modal close
        }
      );
  }

  obtenerFlotante(valor) {
    return parseFloat(valor);
  }
}

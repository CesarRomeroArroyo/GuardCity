import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';
import { LocalStorageService } from '../../servicios/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation';
import { OnesignalService } from '../../servicios/onesignal.service';

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
  {comentario: '', estado: 1, fecha: '', idunico: '', latitud: '', longitud: '', tipo: 'Robo',  usuario: '', usuario_estado: ''};
  tipo_reporte: any = {texto: ''};
  constructor( private service: FirebaseService, private appSettings: AppSettings,
    private local: LocalStorageService, private route: ActivatedRoute,
    private router: Router, private geolocation: Geolocation, private oneSignal: OnesignalService) { }

  ngOnInit() {
    this.obtenerTipoReportes();
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
      const usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
      this.reporte.fecha = this.appSettings.getCurrentDay();
      this.reporte.usuario = usuario.id;
      this.service.guardarDatos('Reportes', this.reporte);
      setTimeout(() => {
        this.oneSignal.enviarPush(`Se ha reportado ${this.reporte.tipo}`);
        this.inicializarReporte();
        $('#modalCargando').modal('close');
        this.router.navigate(['/reportedia']);
      }, 3000);
   }).catch((error) => {
     alert('Existe un problema con sus GPS o no tiene instalado un modulo de GPS');
   });
  }

  inicializarReporte() {
    this. reporte = { comentario: '', estado: 1, fecha: '', idunico: '', latitud: '', longitud: '',
       tipo: 'Robo',  usuario: '', usuario_estado: '' };
  }


  ngAfterViewInit(): void {
      $('#modalCargando').modal({
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

import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LocalStorageService } from '../../servicios/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';

declare var $: any;


@Component({
  selector: 'app-reporte-historico',
  templateUrl: './reporte-historico.component.html',
  styleUrls: ['./reporte-historico.component.css']
})
export class ReporteHistoricoComponent implements OnInit, AfterViewInit {

  reporte: any;
  seguimientos: any;
  seguimiento: any = {comentario: '', fecha: '', idunico: '', latitud: '', longitud: ''};
  idReporte: string;
  ciudad: any;
  imagen: any = {src: 'assets/img/camara.jpg', width: '50%', height: '50%'};

  constructor(private service: FirebaseService, private activatedRoute: ActivatedRoute, private appSetting: AppSettings,
    private local: LocalStorageService, private domSanitizer: DomSanitizer, private camera: Camera) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.ciudad = JSON.parse(this.local.obtener('GUARDCITY_CITY'))[0];
      this.ciudad.latitud = parseFloat(this.ciudad.latitud);
      this.ciudad.longitud = parseFloat(this.ciudad.longitud);
      this.idReporte = params['id'];
      console.log();
      this.buscarReporte();
    });
  }

  buscarReporte() {
    this.service.obtenerDatosPorIdUnico('Reportes', this.idReporte).subscribe(
      result => {
        this.reporte = this.appSetting.getIconosMapasIndividual(result);
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
        this.seguimientos = result;
        console.log(this.seguimientos);
      }
    );
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

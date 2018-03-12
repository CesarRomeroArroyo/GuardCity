import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { LocalStorageService } from '../../servicios/local-storage.service';
import * as $ from 'jquery';
import * as $$ from 'materialize-css';
import { AppSettings } from '../../app.settings';
import { Geolocation } from '@ionic-native/geolocation';
declare var $: any;

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit, AfterViewInit, OnDestroy {
  ciudad: any;
  usuario: any;
  tipo: any;
  tipo_reporte: any = {texto: ''};
  reportes: any;
  subscription: any;
  miPosition: any = {longitud: '', latitud: '', icon: {} };
  constructor(private service: FirebaseService, private local: LocalStorageService, private appSettings: AppSettings,
    private geolocation: Geolocation) {
    this.tipo = '0';
  }

  ngOnInit() {
    this.obtenerTodosReportes();
    this.ciudad = JSON.parse(this.local.obtener('GUARDCITY_CITY'))[0];
    this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
    this.ciudad.latitud = parseFloat(this.ciudad.latitud);
    this.ciudad.longitud = parseFloat(this.ciudad.longitud);
    this.obtenerTipoReportes();
    this.subscription = this.geolocation.watchPosition()
                                  .filter((p) => p.coords !== undefined)
                                  .subscribe(position => {
      console.log(position.coords.longitude + ' ' + position.coords.latitude);
      this.miPosition.longitud = position.coords.longitude;
      this.miPosition.latitud = position.coords.latitude;
      this.miPosition.icon = {
        url: 'assets/img/iconNegro.png',
        scaledSize: {
          height: 50,
          width: 50
        }
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  obtenerTodosReportes() {
    this.service.obtenerDatos('Reportes').subscribe(
      result => {
        this.reportes = this.appSettings.getIconosMapas(result);
        console.log(this.reportes);
      }
    );
  }

  obtenerReportesPorTipo() {
    if (this.tipo === '0') {
      this.obtenerTodosReportes();
    } else {
      this.service.obtenerDatosPorTipo(this.tipo).subscribe(
        result => {
          this.reportes = this.appSettings.getIconosMapas(result);
          console.log(this.reportes);
        }
      );
    }
  }

  obtenerTipoReportes() {
    this.service.obtenerDatosTipoReporte('Tipo_Reporte').subscribe(
      result => {
        this.tipo_reporte = result;
      }
    );
  }

  obtenerFlotante(valor) {
    return parseFloat(valor);
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

  abrirModal() {
    $('#modal1').modal('open');
  }

}

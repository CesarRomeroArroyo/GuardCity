import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { LocalStorageService } from '../../servicios/local-storage.service';

import * as $ from 'jquery';
import * as $$ from 'materialize-css';

declare var $: any;

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {
  ciudad: any;
  tipo: any;
  tipo_reporte: any = {texto: ''};
  reportes: any;
  constructor(private service: FirebaseService, private local: LocalStorageService) {
    this.tipo = '0';
  }

  ngOnInit() {
    this.obtenerTodosReportes();
    this.ciudad = JSON.parse(this.local.obtener('GUARDCITY_CITY'))[0];
    this.ciudad.latitud = parseFloat(this.ciudad.latitud);
    this.ciudad.longitud = parseFloat(this.ciudad.longitud);
    this.obtenerTipoReportes();
  }

  obtenerTodosReportes() {
    this.service.obtenerDatos('Reportes').subscribe(
      result => {
        this.reportes = result;
      }
    );
  }

  obtenerReportesPorTipo() {
    if (this.tipo === '0') {
      this.obtenerTodosReportes();
    } else {
      this.service.obtenerDatosPorTipo(this.tipo).subscribe(
        result => {
          this.reportes = result;
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

}

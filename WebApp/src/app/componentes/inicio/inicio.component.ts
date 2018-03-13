import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as $ from 'jquery';
import * as $$ from 'materialize-css';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @Output() mostrarSeguimiento = new EventEmitter<string>();
  ciudad: any;
  usuario: any;
  tipo: any;
  tipo_reporte: any = {texto: ''};
  reportes: any;
  subscription: any;

  constructor(private service: FirebaseService, private appSettings: AppSettings) { }

  ngOnInit() {
    this.tipo = 0;
    this.obtenerTipoReportes();
    this.obtenerTodosReportes();
  }

  obtenerTodosReportes() {
    this.service.obtenerDatos('Reportes').subscribe(
      result => {
        this.reportes = this.appSettings.getIconosMapas(result);
        console.log(this.reportes);
      }
    );
  }

  mostrarSegumientos(id) {
    this.mostrarSeguimiento.emit(id);
  }

  eliminarReporte(id) {
    alert('esta seguro de eliminar el reporte? ' + id);
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

}

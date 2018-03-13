import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as $ from 'jquery';
import * as $$ from 'materialize-css';
import { AppSettings } from '../../app.settings';

declare var $: any;
declare var Materialize: any;
@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit, OnChanges {
  @Input() idSeguimiento;
  @Output() ocultarSeguimiento = new EventEmitter<void>();
  reporte: any;
  seguimientos: any;
  seguimientoId: any;
  constructor(private service: FirebaseService, private appSettings: AppSettings) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.seguimientoId = this.idSeguimiento;
    this.buscarReporte();
  }

  buscarReporte() {
    this.service.obtenerDatosPorIdUnico('Reportes', this.seguimientoId).subscribe(
      result => {
        this.reporte = this.appSettings.getIconosMapasIndividual(result);
        this.buscarSeguimiento();
      }
    );
  }

  ocultarSeguimientos() {
    this.ocultarSeguimiento.emit();
  }

  buscarSeguimiento() {
    this.service.obtenerDatosPorIdUnico('Seguimientos', this.seguimientoId).subscribe(
      result => {
        let verificar = false;
        if (this.seguimientos && this.seguimientos.length !== result.length) {
          verificar = true;
        }
        if (verificar) {
          Materialize.toast('Nuevo Reporte de Seguimiento', 3000, 'rounded');
        }
        this.seguimientos = result;
      }
    );
  }

  obtenerFlotante(valor) {
    return parseFloat(valor);
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';
import { LocalStorageService } from '../../servicios/local-storage.service';

@Component({
  selector: 'app-reportes-dia',
  templateUrl: './reportes-dia.component.html',
  styleUrls: ['./reportes-dia.component.css']
})
export class ReportesDiaComponent implements OnInit {
  reportes: any;
  tipo: string;
  usuario: any;
  constructor(private service: FirebaseService, private appSettings: AppSettings, private local: LocalStorageService) {
    this.tipo = '1';
  }

  ngOnInit() {
    this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
    this.obtenerTodosReportes();
  }

  seleccionarTipo() {
    if (this.tipo === '1') {
      this.obtenerTodosReportes();
    } else {
      this.obtenerReportesPropios();
    }
  }

  obtenerTodosReportes() {
    this.service.obtenerDatosPorFecha('Reportes', this.appSettings.getCurrentDay()).subscribe(
      result => {
        this.reportes = result;
      }
    );
  }

  obtenerReportesPropios() {
    this.service.obtenerDatosPorUsuarioFecha('Reportes', this.usuario.id, this.appSettings.getCurrentDay()).subscribe(
      result => {
        this.reportes = result;
      }
    );
  }

}

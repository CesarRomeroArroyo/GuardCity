import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';
import { LocalStorageService } from '../../servicios/local-storage.service';

@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.css']
})
export class HistoricosComponent implements OnInit {
  reportes: any;
  usuario: any;
  constructor(private service: FirebaseService, private appSettings: AppSettings, private local: LocalStorageService) {
  }

  ngOnInit() {
    this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
    this.obtenerTodosReportes();
  }

  obtenerTodosReportes() {
    this.service.obtenerDatosPorUsuario('Reportes', this.usuario.id).subscribe(
      result => {
        this.reportes = result;
        console.log(this.reportes);
      }
    );
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as $$ from 'materialize-css';
import { FirebaseService } from '../../servicios/firebase.service';
import { AppSettings } from '../../app.settings';

declare var $: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewInit {
  numReportes: number;
  constructor(private service: FirebaseService, private appSettings: AppSettings) {
    this.numReportes = 0;
  }

  ngOnInit() {
    this.service.obtenerDatosPorFecha('Reportes', this.appSettings.getCurrentDay()).subscribe(
      result => {
        this.numReportes = result.length;
        console.log(this.numReportes);
      }
    );
  }

  ngAfterViewInit(): void {
    $('.button-collapse').sideNav({
        menuWidth: 250,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      }
    );
  }
}

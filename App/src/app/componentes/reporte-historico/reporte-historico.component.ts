import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as $$ from 'materialize-css';

declare var $: any;


@Component({
  selector: 'app-reporte-historico',
  templateUrl: './reporte-historico.component.html',
  styleUrls: ['./reporte-historico.component.css']
})
export class ReporteHistoricoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  abrirModal() {
    $('#modal').modal('open');
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
}

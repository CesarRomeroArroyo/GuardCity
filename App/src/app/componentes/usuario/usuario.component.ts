import { LocalStorageService } from '../../servicios/local-storage.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';


import * as $ from 'jquery';
import * as $$ from 'materialize-css';

declare var $: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  usuario: any = {barrio: '', celular: '',  ciudad: '',  correo: '', nombre: '',  password: '', placa: '', id: ''};
  ciudades: any;
  constructor( private local: LocalStorageService, private service: FirebaseService) { }

  ngOnInit() {
    this.service.obtenerDatos('Ciudades').subscribe(
      result => {
        this.ciudades = result;
      }
    );
    this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
  }

  actualizarDatos() {
    $('#modal1').modal('open');
    this.local.eliminar('GUARDCITY_USER');
    this.local.eliminar('GUARDCITY_CITY');
    this.service.actualizarDatos('Usuario', this.usuario, this.usuario.id);
    setTimeout(() => {
      this.actualizarStorage();
    }, 3000);
  }

  actualizarStorage() {
    $('#modal1').modal('close');
    const dataUser: any[] = [];
    this.obtenerCiudad(this.usuario);
    dataUser.push(this.usuario);
    this.local.agregar('GUARDCITY_USER', JSON.stringify(dataUser));
    this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
  }

  obtenerCiudad(usuario) {
    this.service.obtenerDatosCiudadUsuario(usuario.ciudad).subscribe(
      result => {
        this.local.agregar('GUARDCITY_CITY', JSON.stringify(result));
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
        endingTop: '20%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function() {  } // Callback for Modal close
      }
    );
  }

}

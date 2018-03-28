import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { LocalStorageService } from '../../servicios/local-storage.service';

import * as $ from 'jquery';
import * as $$ from 'materialize-css';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @Output() logIn = new EventEmitter<void>();
  usuario: any = {correo: '', password: ''};
  nuevoUsuario: any = {barrio: '', celular: '',  ciudad: '',  correo: '', nombre: '',  password: '', placa: ''};
  mensaje: string;
  ciudades: any;
  constructor(private service: FirebaseService, private local: LocalStorageService) { }

  ngOnInit() {
    if (this.local.obtener('GUARDCITY_USER')) {
      this.logIn.emit();
    } else {
      this.service.obtenerDatos('Ciudades').subscribe(
        result => {
          this.ciudades = result;
        }
      );
    }
  }

  ngAfterViewInit(): void {
      $('#modal1').modal({
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
      $('#modalCargando').modal({
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
      $('#modal').modal({
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
      $('#modalError').modal({
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

  mostrarNuevoUsuario() {
    $('#modal').modal('open');
  }

  logearse() {
    this.service.obtenerDatosLogin(this.usuario.correo, this.usuario.password).subscribe(
      result => {
        if (result.length > 0) {
          this.obtenerCiudad(result[0]);
          this.local.agregar('GUARDCITY_USER', JSON.stringify(result));
          this.logIn.emit();
        } else {
          this.mensaje = 'El email o la contraseña no son correctos';
          $('#modal1').modal('open');
        }
      }
    );
  }

  obtenerCiudad(usuario) {
    this.service.obtenerDatosCiudadUsuario(usuario.ciudad).subscribe(
      result => {
        this.local.agregar('GUARDCITY_CITY', JSON.stringify(result));
      }
    );
  }

  agregarNuevoUsuario() {
    $('#modal').modal('close');
    $('#modalCargando').modal('open');
      this.service.obtenerDatosUsuarioCorreo(this.nuevoUsuario.correo).subscribe(
        result => {
          if (result.length > 0) {
            $('#modalError').modal('open');
          } else {
            this.service.guardarDatos('Usuario', this.nuevoUsuario);
            setTimeout(() => {
              $('#modalCargando').modal('close');
              this.mensaje = 'Usuario Creado Correctamente';
              $('#modal1').modal('open');
            }, 3000);
          }
        }
      );
  }

  ocultarError() {
    $('#modalCargando').modal('close');
    $('#modalError').modal('close');
  }

}

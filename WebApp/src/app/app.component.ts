import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seguimiento: any = false;
  idSeguimiento: any;
  mostrarSeguimiento (id) {
    this.seguimiento = true;
    this.idSeguimiento = id;
  }

  ocultarSeguimiento () {
    this.seguimiento = false;
  }
}

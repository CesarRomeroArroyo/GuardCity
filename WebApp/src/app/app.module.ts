import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';

import { FirebaseService } from './servicios/firebase.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeguimientoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbYaH_udpTgmdVulwBcv4Lc_0auNY9bS4'
    })
  ],
  providers: [
    FirebaseService,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

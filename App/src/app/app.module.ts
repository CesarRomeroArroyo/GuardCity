import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { HistoricosComponent } from './componentes/historicos/historicos.component';
import { ReporteHistoricoComponent } from './componentes/reporte-historico/reporte-historico.component';
import { ReportesDiaComponent } from './componentes/reportes-dia/reportes-dia.component';
import { ReportesSeguimientoComponent } from './componentes/reportes-seguimiento/reportes-seguimiento.component';

import { FirebaseService } from './servicios/firebase.service';
import { LocalStorageService } from './servicios/local-storage.service';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ZonasComponent } from './componentes/zonas/zonas.component';

import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrincipalComponent,
    LoginComponent,
    ReportesComponent,
    HistoricosComponent,
    ReporteHistoricoComponent,
    ReportesDiaComponent,
    ReportesSeguimientoComponent,
    UsuarioComponent,
    ZonasComponent
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
    LocalStorageService,
    AppSettings,
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

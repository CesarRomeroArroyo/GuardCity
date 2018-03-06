import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { HistoricosComponent } from './componentes/historicos/historicos.component';
import { ReporteHistoricoComponent } from './componentes/reporte-historico/reporte-historico.component';
import { ReportesDiaComponent } from './componentes/reportes-dia/reportes-dia.component';
import { ReportesSeguimientoComponent } from './componentes/reportes-seguimiento/reportes-seguimiento.component';
import { ZonasComponent } from './componentes/zonas/zonas.component';
import { EncuentrameComponent } from './componentes/encuentrame/encuentrame.component';



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
    ZonasComponent,
    EncuentrameComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

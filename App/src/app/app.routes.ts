import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { HistoricosComponent } from './componentes/historicos/historicos.component';
import { ReporteHistoricoComponent } from './componentes/reporte-historico/reporte-historico.component';
import { ReportesDiaComponent } from './componentes/reportes-dia/reportes-dia.component';
import { ReportesSeguimientoComponent } from './componentes/reportes-seguimiento/reportes-seguimiento.component';
import { ZonasComponent } from './componentes/zonas/zonas.component';
import { EncuentrameComponent } from './componentes/encuentrame/encuentrame.component';

const APP_ROUTES: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'reportedia', component: ReportesDiaComponent },
  { path: 'historicos', component: HistoricosComponent },
  { path: 'reportehistorico/:id', component: ReporteHistoricoComponent },
  { path: 'reporteseguimiento/:id', component: ReportesSeguimientoComponent },
  { path: 'zonas', component: ZonasComponent },
  { path: 'encuentrame', component: EncuentrameComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
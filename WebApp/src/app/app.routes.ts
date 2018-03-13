import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';

const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'seguimiento/:id', component: SeguimientoComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

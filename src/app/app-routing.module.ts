import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { MapaComponent } from './vistas/mapa/mapa.component';
import { AdminComponent } from './vistas/admin/admin.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registry', component:RegistroComponent},
  {path:'map', component:MapaComponent},
  {path:'admin', component:AdminComponent},
  {path:'profile', component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistroComponent, AdminComponent, MapaComponent, PerfilComponent]

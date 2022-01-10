import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
//import { LoginComponent } from './vistas/login/login.component';
//import { MapaComponent } from './vistas/mapa/mapa.component';
//import { RegistroComponent } from './vistas/registro/registro.component';
//import { AdminComponent } from './vistas/admin/admin.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { PerfilComponent } from './vistas/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
//    PerfilComponent
//    LoginComponent,
//    MapaComponent,
//    RegistroComponent,
//    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

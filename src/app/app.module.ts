import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { Parte1Component } from './parte1/parte1.component';
import { Parte2Component } from './parte2/parte2.component';
import { Parte3Component } from './parte3/parte3.component';

import { HttpClientModule } from '@angular/common/http';
import { FormusuarioComponent } from './parte1/formusuario.component';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LoginFormComponent } from './parte2/login-form.component';

const routers: Routes = [
  { path: '', redirectTo: '/parte1', pathMatch: 'full' },

  { path: 'parte1', component: Parte1Component },
  { path: 'parte1/form', component: FormusuarioComponent },
  { path: 'parte1/form/:id', component: FormusuarioComponent },

  { path: 'parte2', component: Parte2Component },
  { path: 'parte2/form', component: LoginFormComponent },
  { path: 'parte2/form/:id', component: LoginFormComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    Parte1Component,
    Parte2Component,
    Parte3Component,
    FormusuarioComponent,
    LoginFormComponent,
    BarraLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    HttpClientModule,

    FormsModule,

    RouterModule.forRoot(routers)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Parte1Component } from './parte1/parte1.component';
import { Parte2Component } from './parte2/parte2.component';
import { Parte3Component } from './parte3/parte3.component';


const routes: Routes = [

  {
    path:'parte1',
    component:Parte1Component
  },
  {
    path:'parte2',
    component:Parte2Component
  },
  {
    path:'parte3',
    component:Parte3Component
  },  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

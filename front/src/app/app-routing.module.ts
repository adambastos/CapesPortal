import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ManuaisComponent } from './view/manuais/manuais.component';
import { SoftComponent } from './view/soft/soft.component';

const routes: Routes = [

{
  path: "home",
  component: HomeComponent
},
{
  path: "softwares",
  component: SoftComponent
},
{
  path: "manuais",
  component: ManuaisComponent
}
];



@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

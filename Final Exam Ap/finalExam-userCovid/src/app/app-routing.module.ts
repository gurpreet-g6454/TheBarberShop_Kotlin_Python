import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
// import { UnderConstComponent } from './under-const/under-const.component';

import { CylinderComponent } from './cylinder/cylinder.component';

import { SearchbookedComponent } from './searchbooked/searchbooked.component';
import { AboutCovidComponent } from './about-covid/about-covid.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { CovidFormComponent } from './covid-form/covid-form.component'



const routes: Routes = [


  { path: '', component: TableComponent, pathMatch: 'full'},

  { path: 'cylinders', component: CylinderComponent},
  { path: 'booking', component: SearchbookedComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'about', component: AboutCovidComponent},
  { path: 'form', component: CovidFormComponent},

  
  
  

  
  
  // { path: 'under-construction', component: UnderConstComponent},
  { path: '**', redirectTo: '/under-construction'} // wild card route

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

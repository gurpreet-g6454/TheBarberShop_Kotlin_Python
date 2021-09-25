import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UnderConstComponent } from './under-const/under-const.component';
import { CylindersComponent } from './cylinders/cylinders.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutCovidComponent } from './about-covid/about-covid.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [


  { path: '', component: TableComponent, pathMatch: 'full'},

  { path: 'cylinders1', component: CylindersComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'about', component: AboutCovidComponent},
  
  

  
  
  { path: 'under-construction', component: UnderConstComponent},
  { path: '**', redirectTo: '/under-construction'} // wild card route

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

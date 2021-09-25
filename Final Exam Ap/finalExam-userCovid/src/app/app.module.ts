import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ApiService } from './services/api.services';


import { HeaderComponent } from './header/header.component';
import { TableComponent , bedBookingDialog } from './table/table.component';
import { CylinderComponent , CylinderBookingDialog   } from './cylinder/cylinder.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutCovidComponent } from './about-covid/about-covid.component';
import { SearchbookedComponent } from './searchbooked/searchbooked.component';

import { cylinderModule } from './cylinder/cylinder-module';
import { CovidFormComponent } from './covid-form/covid-form.component';

@NgModule({
  entryComponents: [CylinderComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    CylinderComponent,
    bedBookingDialog,
    CylinderBookingDialog,
    AboutusComponent,
    AboutCovidComponent,
    SearchbookedComponent,
    CovidFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule,  
    
    // MatFormFieldModule,  
    ReactiveFormsModule,
    cylinderModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

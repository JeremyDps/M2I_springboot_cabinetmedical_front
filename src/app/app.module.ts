import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ListPatientsComponent } from './modules/patient/list-patients/list-patients.component';
import { ListInfirmieresComponent } from './modules/infirmiere/list-infirmieres/list-infirmieres.component';
import { ListAdressesComponent } from './modules/adresse/list-adresses/list-adresses.component';
import { DeplacementsComponent } from './modules/deplacement/deplacements/deplacements.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './modules/patient/patient/patient.component';
import { InfirmiereComponent } from './modules/infirmiere/infirmiere/infirmiere.component';
import { DeplacementComponent } from './modules/deplacement/deplacement/deplacement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListPatientsComponent,
    ListInfirmieresComponent,
    ListAdressesComponent,
    DeplacementsComponent,
    PatientComponent,
    InfirmiereComponent,
    DeplacementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

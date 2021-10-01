import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeplacementsComponent } from './modules/deplacement/deplacements/deplacements.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ListInfirmieresComponent } from './modules/infirmiere/list-infirmieres/list-infirmieres.component';
import { ListPatientsComponent } from './modules/patient/list-patients/list-patients.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'patients', component: ListPatientsComponent, pathMatch: 'full'},
  {path: 'infirmieres', component: ListInfirmieresComponent, pathMatch: 'full'},
  {path: 'deplacements', component: DeplacementsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

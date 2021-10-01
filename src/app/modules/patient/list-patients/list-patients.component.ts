import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/Patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients().subscribe((p: Patient[]) => {
      console.log(p);
      this.patients = p;
      
    })
  }

}

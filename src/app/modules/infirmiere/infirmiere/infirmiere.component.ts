import { Component, Input, OnInit } from '@angular/core';
import { Infirmiere } from 'src/app/shared/models/Infirmiere';

@Component({
  selector: 'app-infirmiere',
  templateUrl: './infirmiere.component.html',
  styleUrls: ['./infirmiere.component.css']
})
export class InfirmiereComponent implements OnInit {

  @Input() infirmiere !: Infirmiere;

  constructor() { }

  ngOnInit(): void {
  }

}

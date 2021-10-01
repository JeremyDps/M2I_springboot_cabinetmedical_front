import { Component, OnInit } from '@angular/core';
import { Infirmiere } from 'src/app/shared/models/Infirmiere';
import { InfirmiereService } from 'src/app/shared/services/infirmiere.service';

@Component({
  selector: 'app-list-infirmieres',
  templateUrl: './list-infirmieres.component.html',
  styleUrls: ['./list-infirmieres.component.css']
})
export class ListInfirmieresComponent implements OnInit {

  infirmieres : Infirmiere[] = [];

  constructor(private infirimiereService: InfirmiereService) { }

  ngOnInit(): void {
    this.getInfirmieres();
  }

  getInfirmieres() {
    this.infirimiereService.getInfirmieres().subscribe((i: Infirmiere[]) => {
      console.log(i);
      this.infirmieres = i;
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Deplacement } from 'src/app/shared/models/Deplacement';
import { DeplacementService } from 'src/app/shared/services/deplacement.service';

@Component({
  selector: 'app-deplacements',
  templateUrl: './deplacements.component.html',
  styleUrls: ['./deplacements.component.css']
})
export class DeplacementsComponent implements OnInit {

  deplacements : Deplacement[] = [];

  constructor(private deplacementService: DeplacementService) { }

  ngOnInit(): void {
    this.getInfirmieres();
  }

  getInfirmieres() {
    this.deplacementService.getDeplacements().subscribe((i: Deplacement[]) => {
      console.log(i);
      this.deplacements = i;
      
    })
  }

}

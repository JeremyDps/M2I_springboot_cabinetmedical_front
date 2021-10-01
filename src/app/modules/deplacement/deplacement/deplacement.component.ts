import { Component, Input, OnInit } from '@angular/core';
import { Deplacement } from 'src/app/shared/models/Deplacement';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.component.html',
  styleUrls: ['./deplacement.component.css']
})
export class DeplacementComponent implements OnInit {

  @Input() deplacement !: Deplacement;

  constructor() { }

  ngOnInit(): void {
  }

}

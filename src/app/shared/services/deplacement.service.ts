import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deplacement } from '../models/Deplacement';

@Injectable({
  providedIn: 'root'
})
export class DeplacementService {

  constructor(private http: HttpClient) { }

  getDeplacements(): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(`${environment.myurl}/deplacements`);
  }
}

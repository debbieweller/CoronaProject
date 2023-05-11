import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Vaccination } from './models/vaccination';

@Injectable({
  providedIn: 'root',
})
export class VaccinationService {
  private url = 'ProjValues';
  constructor(private http: HttpClient) {}

  public getPerson(): Observable<Vaccination[]> {
    return this.http.get<Vaccination[]>(`${environment.apiUrl}/${this.url}`);
  }
}

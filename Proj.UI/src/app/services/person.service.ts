import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Vaccination } from '../models/vaccination';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = 'ProjValues';
  constructor(private http: HttpClient) {}

  public getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getVaccinationByPersonId(personId: number): Observable<Vaccination[]> {
    return this.http.get<Vaccination[]>(
      `${environment.apiUrl}/${this.url}/personId?personId=${personId}`
    );
  }

  public createPerson(person: Person): Observable<Person[]> {
    return this.http.post<Person[]>(
      `${environment.apiUrl}/${this.url}`,
      person
    );
  }
  public createVaccine(vaccination: Vaccination): Observable<Vaccination[]> {
    return this.http.post<Vaccination[]>(
      `${environment.apiUrl}/${this.url}/vaccination`,
      vaccination
    );
  }
}

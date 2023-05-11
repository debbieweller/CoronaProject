import { Component } from '@angular/core';
import { Person } from './models/person';
import { PersonService } from './services/person.service';
import { Vaccination } from './models/vaccination';
import { isEmpty } from 'rxjs';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proj.UI';
  persons: Person[] = [];
  currentPersonId: number = -1;
  //vaccinations: Vaccination[] = [];
  personToEdit?: Person;
  currentVaccinations: Vaccination[] = [];
  newVaccine: Vaccination = { date_vac: new Date(), manufacturer: '' };

  constructor(private personService: PersonService) {}
  showVaccinationTable: boolean = false;

  ngOnInit(): void {
    this.personService
      .getPerson()
      .subscribe((result: Person[]) => (this.persons = result));
    Chart.register(...registerables);
  }

  updatePersonList(person: Person[]) {
    this.persons = person;
  }

  initNewPerson() {
    this.personToEdit = new Person();
  }

  addVaccine() {
    this.newVaccine.person_id = this.currentPersonId;
    this.personService
      .createVaccine(this.newVaccine)
      .subscribe(
        (result: Vaccination[]) => (this.currentVaccinations = result)
      );
  }

  ToShowVaccinationTable(personId: number): void {
    this.currentPersonId = personId;
    this.showVaccinationTable = true;
    this.personService
      .getVaccinationByPersonId(personId)
      .subscribe(
        (result: Vaccination[]) => (this.currentVaccinations = result)
      );
  }

  GetNumNotVac(): number {
    debugger;
    let count = 0;
    let vaccinations: boolean = false;
    for (let p of this.persons) {
      vaccinations = false;
      this.personService
        .getVaccinationByPersonId(p.id ?? -1)
        .subscribe(
          (result: Vaccination[]) =>
            (vaccinations = result.length == 0 ? false : true)
        );
      if (!vaccinations) {
        count++;
      }
    }
    return count;
  }
}

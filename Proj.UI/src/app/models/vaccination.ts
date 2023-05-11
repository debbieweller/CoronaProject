export class Vaccination {
  date_vac: Date;
  manufacturer: string;
  person_id?: number;

  constructor(date_vac: Date, manufacturer: string, person_id?: number) {
    this.date_vac = date_vac;
    this.manufacturer = manufacturer;
    this.person_id = person_id;
  }
}

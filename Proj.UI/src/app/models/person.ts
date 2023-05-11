import { Vaccination } from './vaccination';

export class Person {
  f_name = '';
  l_name = '';
  id?: number;
  city = '';
  street = '';
  street_num = '';
  date_birth?: Date;
  phone = '';
  cell_phone = '';
  picture = '';
  date_positive?: Date;
  date_recovery?: Date;
  arr_vac: Vaccination[] = [];
}

import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/pages/tables/tables.component';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, flag:boolean): string {

    return ( flag ) ? '*'.repeat(value.length) : value

  }

}

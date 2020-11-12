import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'catalogFilter'
})
export class CatalogFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => row.nombre.indexOf(query) > -1);
    }
    return array;

   }
}

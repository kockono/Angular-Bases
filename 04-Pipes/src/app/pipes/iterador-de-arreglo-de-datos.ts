import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'catalogFilter'
})
export class CatalogFilterPipe implements PipeTransform {

transform(value: any, arg:any): any {

     const resultPosts = [];

     for(const post of value) {

     if(post.nombre.toLowerCase().indexOf(arg.toLowerCase())  > -1){
         resultPosts.push(post);
       }
   }
    return resultPosts;

  }


}

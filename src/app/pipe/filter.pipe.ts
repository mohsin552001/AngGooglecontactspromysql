import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: unknown[]): unknown {
    return value.filter(function (search: any) {
      return search.Name.indexOf(searchTerm) > -1;
    });
  }
}

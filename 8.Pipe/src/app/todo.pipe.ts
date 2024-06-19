import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
  standalone: true
})
export class TodoPipe implements PipeTransform {

  transform(value: string[], search: string): string[] {
    if(!search) return value;
    return value.filter((v) => v.includes(search));
  }

}

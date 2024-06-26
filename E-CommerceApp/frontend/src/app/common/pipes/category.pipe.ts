import { Pipe, PipeTransform } from '@angular/core';
import { CategoryModel } from '../../components/categories/models/category.model';

@Pipe({
  name: 'categoryPipe',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: CategoryModel[], search:string): CategoryModel[] {
    return value.filter( category =>  category.name.toLowerCase().includes(search.toLowerCase()));
  }

}

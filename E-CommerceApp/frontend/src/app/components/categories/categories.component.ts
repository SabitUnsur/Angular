import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}

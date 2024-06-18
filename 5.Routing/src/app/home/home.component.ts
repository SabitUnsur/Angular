import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private route: Router
  ) { }

  method(){
    this.route.navigate(['about']);
    this.route.navigateByUrl('/about');
  }
}

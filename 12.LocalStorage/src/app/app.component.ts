import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
    <h1>LOCAL STORAGE</h1>
  `
})
export class AppComponent {
  constructor() {
    localStorage.setItem('token', 'dfsjsklfnklslasfnjkwerhoq');
    localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.clear();
  }


}

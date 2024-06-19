import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExampleComponent],
  template:`
    <h1>State Management - Input/Output</h1>
    <p>My name is {{name}}</p>
    <hr>
    <app-example [name]='name' (nameChangeEvent)="changeName($event)"></app-example>
  `
})
export class AppComponent {
  name:string = "Sabit";

  changeName(event:string){
    this.name = event;
  }
}

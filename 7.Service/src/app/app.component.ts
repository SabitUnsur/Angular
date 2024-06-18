import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MyFirstService } from './my-first.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  template:`
    <input [(ngModel)]="_myFirstService.name" type="text">
    <button (click)="_myFirstService.save()">Submit</button>

    <hr>

    <ul>
      <li *ngFor="let n of _myFirstService.names">{{n}}</li>
    </ul>
  `
})
export class AppComponent {
  constructor(
    public _myFirstService: MyFirstService
  ) { 

  }
}

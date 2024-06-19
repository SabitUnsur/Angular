import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { TodoPipe } from './todo.pipe';
import { FormsModule } from '@angular/forms';
import { NamePipe } from './name.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoPipe,NamePipe,FormsModule,CommonModule],
  template: `
    <h1>Pipe</h1>
    <div>
      <input  [(ngModel)]="work">
      <button (click)="save()">Save</button>
    </div>
    <h1>{{name | name}}</h1>
    <div>
      <input type="search" [(ngModel)]="search" placeholder="Search">
      <ul>
        @for (t of todos | todo:search; track t) {
          <li>{{t}}</li>
        }
      </ul>
    </div>

    <h2>Angular Pipe</h2>
    <h2>{{name | titlecase }}</h2>   
    <h2>{{date | date : 'dd.MMMM.yyy HH:mm:ss'}}</h2>
    <h2>{{number | currency : 'TRY' : 'symbol-narrow' : '1.0-0'}}</h2>
        
  `
})
export class AppComponent {
  work:string="";
  todos:string[] = ["Learn Angular","Learn TypeScript","Learn JavaScript"];
  search:string = "";
  name:string = "Sabit Ünsür";

  //ANGULAR PIPE
  name2:string="Sabit";
  date:Date = new Date();
  number:number = 17002.25;

  save(){
    this.todos.push(this.work);
    this.work = "";
  }
}

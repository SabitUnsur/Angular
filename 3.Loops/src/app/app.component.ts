import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` 
    <h1>Angular Loops</h1>

    <ul>
      <!-- <li *ngFor="let todo of todos">{{todo}}</li> eski yöntem -->
      @for (item of todos; track item) {
        <li> {{$index}} {{$first}} {{$last}} {{item.work}} {{item.isCompleted}}</li>
      }
    </ul>
  `
})
export class AppComponent {
  todos: TodoModule[] = [ 
    {work: 'Learn Angular', isCompleted: false},
    {work: 'Learn React', isCompleted: false},
    {work: 'Learn Vue', isCompleted: false}
  ]


  constructor() {
    this.save();    
  }

  save(){
    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work);
    }

    console.log("***********");

    this.todos.forEach(element => {
      console.log(element.work);
    });

    console.log("***********");

    for(let item of this.todos){
      console.log(item.work);
    } //verinin kendisi döner
      //of , asenkron işlemlerde kullanılır

    console.log("***********");

    for(let item in this.todos){
      console.log(this.todos[item].work);
    }  //in index döner
  }
}


export class TodoModule { 
  work: string= "";
  isCompleted: boolean= false;
}
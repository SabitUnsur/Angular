import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `

    <h1> Todo App </h1>
  
    @if(!isUpdateWorkFormActive){
      <div>
      <label>Work</label>
      <hr/>
      <input type="text" [(ngModel)]="work">
      <button (click)="save()">Save</button>
    </div>
    }@else {
      <div>
        <label>Update Work</label>
        <hr/>
        <input type="text" [(ngModel)]="updateWork">
        <button (click)="update()">Update</button>
    </div>
  }
    
    <hr/>
    
    <div>
     <ul>
      @for (item of todos; track item) {
        <li>
          {{ item }}

          @if(!isUpdateWorkFormActive){
            <button (click)="get($index)">Update</button>
            <button (click)="delete($index)">Delete</button>
          }
    
        </li>
      }
     </ul>

    </div>
  `
})

export class AppComponent {
  work: string = "";
  updateWork: string = "";
  todos: string[] = [];
  updateIndex: number = 0;
  isUpdateWorkFormActive: boolean = false;

  save() {
    this.todos.push(this.work);
    this.work = "";
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index]; //burada update edilecek veriyi alıyoruz.
    this.isUpdateWorkFormActive = true;
  }

  update() {
    this.todos[this.updateIndex] = this.updateWork; // burada update edilen veriyi array içerisindeki ilgili index'e atıyoruz.
    this.updateWork = "";
    this.isUpdateWorkFormActive = false;
  }
}

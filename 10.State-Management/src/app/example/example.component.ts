import { Component,Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  @Input({required:true}) name:string = " ";
  @Output() nameChangeEvent = new EventEmitter<string>();

  changeName(){
    this.nameChangeEvent.emit(this.name);
  }
}

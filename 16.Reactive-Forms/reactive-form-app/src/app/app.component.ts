import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
  });

  add(){
    if(this.addForm.valid){
      console.log(this.addForm.value);
      this.addForm.reset();
    }
  }
}

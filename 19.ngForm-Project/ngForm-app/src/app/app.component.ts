import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addModel = new Employee();
  updateModel = new Employee();
  employees:Employee[] = [];
  index:number = 0;
  isUpdateFormActive:boolean = false;

  constructor(
    private _date:DatePipe
  ){
    this.addModel.startingDate = this._date.transform(new Date(),'yyyy-MM-dd')!;
  }

  save(form:NgForm){
    if(form.valid){
      this.employees.push(this.addModel);
      this.addModel = new Employee(); //clear the form
      this.addModel.startingDate = this._date.transform(new Date(),'yyyy-MM-dd')!;
    }
  }

  get(model:Employee,index:number){
    this.index = index;
    this.updateModel = {...model}; //referans yerine kopyasını almak için
    this.isUpdateFormActive = true;
  }

  cancel(){
    this.isUpdateFormActive = false;
  }

  update(form:NgForm){
    if(form.valid){
      this.employees[this.index] = this.updateModel;
      this.isUpdateFormActive = false;
    }
  }

}

class Employee{
  name:string="";
  profession:string="";
  startingDate:string="";
}
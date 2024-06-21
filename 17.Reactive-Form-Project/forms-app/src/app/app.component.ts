import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule,Validators,FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,DatePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit{
  addForm:FormGroup = new FormGroup({});
  updateForm:FormGroup = new FormGroup({});

  employess:Employee[] = [];
  isUpdateFormActive:boolean=false;
  udpateIndex:number=0;

  constructor(
    private _date:DatePipe
  ){}

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      startingDate:new FormControl(this._date.transform(new Date(),'yyyy-MM-dd')),
      profession:new FormControl('',[Validators.required,Validators.minLength(3)]),
    })
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      startingDate:new FormControl(this._date.transform(new Date(),'yyyy-MM-dd')),
      profession:new FormControl('',[Validators.required,Validators.minLength(3)]),
    })
  }

  addPersonel(){
    if(this.addForm.valid){
      this.employess.push(this.addForm.value);
     // this.addForm.reset();
      //this.addForm.controls['startingDate'].setValue(this._date.transform(new Date(),'yyyy-MM-dd'));
      this.createAddForm();
    }
  }

  get(model:Employee,index:number){
    this.createUpdateForm();
    this.updateForm.controls['name'].setValue(model.name);
    this.updateForm.controls['startingDate'].setValue(model.startingDate);
    this.updateForm.controls['profession'].setValue(model.profession);
    this.isUpdateFormActive = true;
    this.udpateIndex = index;
  }

  cancel(){
    this.isUpdateFormActive = false;
  }

  updatePersonel(){
    if(this.updateForm.valid){
      this.employess[this.udpateIndex] = this.updateForm.value;
      this.cancel();
    }
  }

}


class Employee{
  name:string="";
  startingDate:string="";
  profession:string="";
}
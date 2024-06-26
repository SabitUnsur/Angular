import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { CategoryModel } from './models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  categories: CategoryModel[] = [];

  constructor(private _toastr: ToastrService,
    private _categoryService: CategoryService){
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._categoryService.getAll(res=>{
      this.categories = res;
    }); 
  }

  add(form:NgForm){
    if(form.valid){
      this._categoryService.add(form.controls["name"].value,res=>{
        this._toastr.success(res.message);
        let element = document.getElementById("addModalCloseBtn");
        element?.click();
        form.reset();
        this.getAll();
      });
    }
  }

}

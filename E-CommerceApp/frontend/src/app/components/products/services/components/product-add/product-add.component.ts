import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../common/shared/shared.module';
import { CategoryModel } from '../../../../categories/models/category.model';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../../../categories/services/category.service';
import { ProductService } from '../../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{
categories:CategoryModel[] = [];
images: File[] = [];
imageUrls:any[] = [];

constructor(
  private categoryService:CategoryService,
  private productService:ProductService,
  private toastrService:ToastrService
) {}

ngOnInit() {
  this.getCategories();
}

getCategories() { 
  this.categoryService.getAll(res=>this.categories = res);
}

 getImages(event:any) {
  const file:File[] = Array.from(event.target.files);
  this.images.push(...file);
  for(let i=0; i<event.target.files.length; i++){
    const element = event.target.files[i];
    const reader = new FileReader();
    reader.readAsDataURL(element);

    reader.onload = () => {
      const imageUrl = reader.result as string;
      this.addImage(imageUrl,file);
    }
  }
 }

 addImage(imageUrl:string,file:any){
  this.imageUrls.push({imageUrl:imageUrl,name:file.name,size:file.size});
 }

 removeImage(name:string,size:number,index:number){
  this.imageUrls.splice(index,1);
  let i = this.images.findIndex(x=>x.name == name && x.size == size);
  this.images.splice(i,1);
 }


 add(form:NgForm){
  if(form.value["categoriesSelect"].length == 0){ 
    this.toastrService.error("Please select category");
    return;
  }
    if(form.valid){
      let product = form.value;
      let categories:string[] = product["categoriesSelect"];
      let price = product["price"];
      price = price.toString().replace(",",".");
      let name = product["name"];
      let description = product["description"];
      let stock = product["stock"];
      let formData = new FormData(); //bunu yapma sebebimiz resimlerle birlikte formu göndermek
      formData.append("name",name);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("stock",stock); 
      for(let i=0; i<categories.length; i++){
        formData.append("categories",categories[i]);
      }
      for (const image of this.images) {
        formData.append("images", image, image.name);
      }
      this.productService.add(formData,res=>{
        if(res){
          this.toastrService.success(res.message);
          form.reset();
          this.imageUrls = [];
        }
      });
    }
 }
}

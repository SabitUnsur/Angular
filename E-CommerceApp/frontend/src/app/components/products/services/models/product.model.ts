import { CategoryModel } from "../../../categories/models/category.model";

export class ProductModel{
    _id:string='';
    name:string='';
    categories:CategoryModel[]=[];
    price:number=0; 
    stock:number=0;
    isActive:boolean=true;
    createdDate:string='';
    imageUrls:any[] = []; 
}
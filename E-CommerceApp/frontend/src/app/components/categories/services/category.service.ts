import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../common/services/generic-http.service';
import { CategoryModel } from '../models/category.model';
import { MessageResponseModel } from '../../../common/models/message.response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http:GenericHttpService
  ) { }

  getAll(callBack:(res:CategoryModel[])=>void){
    this._http.get<CategoryModel[]>('categories',res=>callBack(res));
  }

  add(name:string,callBack:(res:MessageResponseModel)=>void){
    this._http.post<MessageResponseModel>('categories/add',{name},res=>callBack(res));
  }

  update(_id:string,name:string,callBack:(res:MessageResponseModel)=>void){
    this._http.post<MessageResponseModel>('categories/updateById/${_id}',{name},res=>callBack(res));
  }

  removeById(_id:string,callBack:(res:MessageResponseModel)=>void){
    this._http.post<MessageResponseModel>('categories/removeById/${_id}',{_id},res=>callBack(res));
  }
}


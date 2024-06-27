import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../common/services/generic-http.service';
import { MessageResponseModel } from '../../../common/models/message.response.model';
import { RequestModel } from '../../../common/models/request.model';
import { PaginationResultModel } from '../../../common/models/pagination-result.model';
import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http:GenericHttpService
  ) { }

  add(model:FormData,callBack:(res:MessageResponseModel)=>void){
    this._http.post<MessageResponseModel>('products/add',model,res=>callBack(res))
  }

  update(_id:string,model:FormData,callBack:(res:MessageResponseModel)=>void){
    this._http.update<MessageResponseModel>(_id,'products/update',model,res=>callBack(res))
  }

  getAll(model:RequestModel,callBack:(res:PaginationResultModel<ProductModel>[])=>void){
    this._http.get<PaginationResultModel<ProductModel>[]>('products/',res=>callBack(res))
  }

  removeById(_id:string,callBack:(res:MessageResponseModel)=>void){
    this._http.delete<MessageResponseModel>(`${_id}`,'products/removeById',res=>callBack(res))
  }

  getById(_id:string,callBack:(res:ProductModel)=>void){
    this._http.getById<ProductModel>(`${_id}`,'products/getById',res=>callBack(res))
  }

  changeActiveStatus(_id:string,callBack:(res:MessageResponseModel)=>void){
    this._http.post<MessageResponseModel>(`products/changeActiveStatus/${_id}`,{},res=>callBack(res))
  }

  removeImageByProductIdAndIndex(_id:string,index:number,callBack:(res:MessageResponseModel)=>void){
    this._http.post<MessageResponseModel>(`products/removeImageByProductIdAndIndex/${_id}`,{index},res=>callBack(res))
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { GnericHttpServiceService } from './gneric-http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http:GnericHttpServiceService,
    private _errorService: ErrorService
  ) { }

  get(callback:(res:any) => void){ 
    this._http.get('todos',res=>callback(res)); 
  }

  post(model: any,callback:(res:any) => void) {
    this._http.post('posts',model,res=>callback(res)); 
  }

  // get() {
  //   return this._http.get('https://jsonplaceholder.typicode.com/todos/1');
  // }

  // post(model: any) {
  //   return this._http.post('https://jsonplaceholder.typicode.com/posts', model).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //     },
  //     error: (error: any) => {
  //       this._errorService.errorHandle(error);
  //     }
  //   });
  // }
}

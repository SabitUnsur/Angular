import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GnericHttpServiceService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/';

  constructor(private _http: HttpClient, private _errorService:ErrorService) { }

  get(api:string,callback:(res:any) => void){

    let headers = {
      headers: {
        "authorizaton": localStorage.getItem("token")
      }
    }

    this._http.get(this.apiUrl + api,headers).subscribe({
      next: (res:any) => {
        callback(res);
      },
      error: (error:HttpErrorResponse) => {
        this._errorService.errorHandle(error);
      }
    });
  }

  post(api:string,model:any,callback:(res:any) => void){
    let headers = {
      headers: {
        "authorizaton": localStorage.getItem("token")
      }
    }
   this._http.post(this.apiUrl+api,model,headers).subscribe({
      next: (res:any) => {
        callback(res); //bu fonksiyonu çağıran yerdeki callback fonksiyonunu çalıştırır.
      },
      error: (error:HttpErrorResponse) => {
        this._errorService.errorHandle(error);
      }
   })
  }

}

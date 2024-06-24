import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
  api: string = 'http://localhost:5000/api/v1';

  constructor(
    private _http: HttpClient
  ) { }

  get<T>(url:string,callBack:(res:T)=>void){
    this._http.get<T>(`${this.api}/${url}`).subscribe({
      next:(res:T)=>callBack(res),
      error:(err:HttpErrorResponse)=>{console.log(err)}
    });
  }

  post<T>(url: string, model: T, callBack: (res: T) => void) {
    this._http.post<T>(`${this.api}/${url}`, model,{}).subscribe({
      next: (res: T) => callBack(res),
      error: (err: HttpErrorResponse) => { console.log(err) }
    });
  }
}


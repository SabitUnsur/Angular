import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
  api: string = 'http://localhost:5000/api/v1';

  constructor(
    private _http: HttpClient,
    private _spinner:NgxSpinnerService,
    private _toastr: ToastrService
  ) { }

  get<T>(url:string,callBack:(res:T)=>void){
    this._spinner.show();
    this._http.get<T>(`${this.api}/${url}`).subscribe({
      next:(res:T)=>{
        callBack(res);
        this._spinner.hide();
      },
      error:(err:HttpErrorResponse)=>{
        this._toastr.error(err.error.message)
        this._spinner.hide();
      }
    });
  }

  post<T>(url: string, model: any, callBack: (res: T) => void) {
    this._spinner.show();
    this._http.post<T>(`${this.api}/${url}`, model,{}).subscribe({
      next: (res: T) => {
        callBack(res);
        this._spinner.hide();
      },
      error: (err: HttpErrorResponse) => { 
        this._toastr.error(err.error.message)
        this._spinner.hide();
      }
    });
  }

  update<T>(_id:string,url: string, model: any, callBack: (res: T) => void) {
    this._spinner.show();
    this._http.post<T>(`${this.api}/${url}/${_id}`, model,{}).subscribe({
      next: (res: T) => {
        callBack(res);
        this._spinner.hide();
      },
      error: (err: HttpErrorResponse) => { 
        this._toastr.error(err.error.message)
        this._spinner.hide();
      }
    });
  }


  delete<T>(_id:string,url: string, callBack: (res: T) => void) {
    this._spinner.show();
    this._http.post<T>(`${this.api}/${url}/${_id}`,{}).subscribe({
      next: (res: T) => {
        callBack(res);
        this._spinner.hide();
      },
      error: (err: HttpErrorResponse) => { 
        this._toastr.error(err.error.message)
        this._spinner.hide();
      }
    });
  }
  
}


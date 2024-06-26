import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() { }

  callSwal(text:string,title:string,btnName:string,callBack: ()=>void){
    Swal.fire({
      text:text,
      title:title,
      showConfirmButton:true,
      confirmButtonText:btnName,
      showCancelButton:true,
      cancelButtonText:"Cancel",
      icon:"question"
    }).then((result)=>{ 
      if(result.isConfirmed){
        callBack();
      };
    })
  }
}

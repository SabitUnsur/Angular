import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <!-- <input [(ngModel)]="model.title"> -->
    <!-- <button (click)="save()">Save</button> -->
  `
})
export class AppComponent {

  model: {
    title: string,
    body: string,
    userId: number
  } = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }

  constructor(
    //private _http: HttpClient,
    private appService: AppService
  ) {

  //   appService.get().subscribe(res => {
  //     console.log(res);
  //   })
  // }

  // save(){
  //   this.appService.post(this.model);

    /*this._http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (error:HttpErrorResponse) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      } //api başarılı ya da başarısız olsa da çalışır.
    });*/

    //POST

    // this._http.post('https://jsonplaceholder.typicode.com/posts', model).subscribe({ 
    //   next: (res:any) => {
    //     console.log(res);
    //   }, 
    //   error: (error:HttpErrorResponse) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('Complete');
    //   } //api başarılı ya da başarısız olsa da çalışır.
    // });


    // //HEADER 
    // let headers = {
    //   headers: {
    //     "Authorizations": "Bearer token"
    //   }
    // }
    // this._http.get('https://jsonplaceholder.typicode.com/todos/1',headers).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('Complete');
    //   } //api başarılı ya da başarısız olsa da çalışır.
    // });

  }
  /*save() {
    this._http.post('https://jsonplaceholder.typicode.com/posts', this.model).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      }
    });*/
}


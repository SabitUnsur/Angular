import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _http:HttpClient) {  }

  getApi(){
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
      console.log(res);
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  name:string = '';
  names:string[] = [];
  constructor() { }

  save(){
    this.names.push(this.name);
    this.name = '';
  }
}

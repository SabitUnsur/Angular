import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `

    <h1>Angular Conditions</h1>
    <!-- <p *ngIf="showFirst" style="color: red;">First Yazı</p> eski usül -->

    @if(showFirst){
      <p style="color: {{showFirst === true ? 'red' : ''}};">First Yazı</p>
    }
    
    @if(showSecond) {
      <p style="color: green;">Second Yazı</p>
    }

    <hr>

    <button (click)="show(1)">Birinci Yazıyı Göster</button>
    <button (click)="show(2)">İkinci Yazıyı Göster</button>
  `
})
export class AppComponent {
  showFirst: boolean = false;
  showSecond: boolean = false;

  show(num: number){
    if(num === 1){
      this.showFirst = true;
      this.showSecond = false;
    }else{
      this.showFirst = false;
      this.showSecond = true;
    }
  }
}

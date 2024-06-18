import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: ` 
    <h1>Kredi Hesaplama</h1>
    
    <div>
      <label>Kredi Tutarı:</label>
      <input [(ngModel)]="krediTutari">
    </div>

    <div>
      <label>Taksit Sayısı:</label>
      <select [(ngModel)]="taksitSayisi">
        @for (item of taksitler; track $index) {
          <option>{{item}}</option>
        }
      </select>
    </div>

    <div>
      <button (click)="hesapla()">Hesapla</button>
    </div>

    <hr>
    <div>
      <h2>Sonuç</h2>
      <p>{{result}}</p>
    </div>
      
    <hr>

    <table class="table">
      <thead>
        <tr>
        <th>Taksit Sayısı</th>
          <th>Taksit Tutarı</th>
          <th>Kalan Geri Ödeme</th>
        </tr>
      </thead>
      <tbody>
        @for (item of odemePlani; track $index) {
          <tr>
            <td>{{$index+1}}</td>
            <td>{{item.taksitTutari}}</td>
            <td>{{item.kalanGeriOdeme}}</td>
          </tr>
        }
      </tbody>

  `,
})
export class AppComponent {
  krediTutari: number = 0;
  taksitSayisi: number = 3;
  taksitler: number[] = [3,6,12,24];
  result : string = "";
  odemePlani : {taksitTutari: number, kalanGeriOdeme: number} [] = [];

  hesapla() {
    const taksitTutari : number = (this.krediTutari / this.taksitSayisi)*1.29;
    let toplamGeriOdeme : number = taksitTutari * this.taksitSayisi;
    this.result = `Aylık Taksit Tutarı: ${taksitTutari} Toplam Geri Ödeme: ${toplamGeriOdeme}`;

    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
       toplamGeriOdeme -= taksitTutari;
       const data = {
          taksitTutari: taksitTutari, // odeme plani içinde bulunan taksit tutari
          kalanGeriOdeme: toplamGeriOdeme //odeme plani içinde bulunan kalanGeriOdeme değeri
        }
        this.odemePlani.push(data);
      }
    }
}


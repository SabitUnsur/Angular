import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- <router-outlet><router-outlet> !--burada router-outlet componentini kullanarak sayfalar arasında geçiş yapmamızı sağlar.-- -->
   
    <router-outlet><router-outlet>
  `
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslateModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '24.ngx-translate';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'tr'])
    translate.setDefaultLang('tr')
    const browserLang = translate.getBrowserLang()
    translate.use(browserLang?.match(/en|tr/) ? browserLang : 'tr');
  }
}

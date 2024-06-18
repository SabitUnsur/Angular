import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router //byunun yapılma sebebi, login işlemi başarılı olduğunda yönlendirme yapmak için router servisini kullanmamız gerekiyor.
  ) { }

  signIn() { 
    this.router.navigateByUrl("/"); //login işlemi başarılı olduğunda anasayfaya yönlendirme yapılıyor.
  }
}

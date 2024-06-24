import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginModel } from './models/login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private _authService: AuthService,
    private _toastService: ToastrService,
    private _router: Router
  ) { }

  login(form: NgForm) {
    if (form.valid) {
      let model = new LoginModel();
      model.email = form.controls["email"].value;
      model.password = form.controls["password"].value;

      this._authService.login(model, res => {
        this._toastService.success('Login successful');
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this._router.navigateByUrl('/');
      })
    }
  }
}

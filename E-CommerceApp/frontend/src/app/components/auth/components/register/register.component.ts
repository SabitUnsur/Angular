import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../../models/register-model';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model:RegisterModel = new RegisterModel();

  constructor(
    private _authService:AuthService,
    private _toastrService:ToastrService,
    private _router:Router
  ) { }

 register(form:NgForm){
    if(form.valid){
     this._authService.register(this.model,res=>{
       localStorage.setItem('token',res.token);
       localStorage.setItem('user',JSON.stringify(res.user));
        this._toastrService.success('Register success');
        this._router.navigateByUrl('/');
     })
    }
 }
}

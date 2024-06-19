import { CanActivateChildFn,Router } from '@angular/router';
import { inject } from '@angular/core';


export const auth2Guard: CanActivateChildFn = (route, state) => {
  const token = localStorage.getItem("token");
  const router = inject(Router);
  if(!token){
    router.navigateByUrl("/login");
    return false;
  }
  return true;
};

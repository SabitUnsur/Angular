import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError,of } from 'rxjs';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  let newRequest = req.clone({
    headers: req.headers.set('Authentication', 'Bearer' + token)
  });
  return next(newRequest).pipe(catchError((err: HttpErrorResponse) => {
    //errorHandler
    console.log(err);
    return of()
  }));
};

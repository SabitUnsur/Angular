import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {

        //canActivate: [authGuard],
        canActivateChild: [() => {inject(AuthService).isAuthenticated();}], 
        //guard olursa doğrudan yazabilirsin,birden fazla örneğin layout altındaki componentler için tek tek canActivate vermek yerine canActivateChild ile tekte o guardı verebilirim.
        children: [
            {
                path: "",
                canDeactivate: [checkGuard],
                component: AppComponent
            }
        ]

    },
    {
        path: "login",
        component: AppComponent //LoginComponent olmalı.
    }
];

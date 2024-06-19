import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {

        //canActivate: [authGuard],
        canActivateChild: [() => {
            inject(AuthService).isAuthenticated();
        }],
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

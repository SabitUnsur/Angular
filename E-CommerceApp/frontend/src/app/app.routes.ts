import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/auth/components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./components/auth/components/register/register.component').then(m => m.RegisterComponent)
    },
    {    
        path: '',
        loadComponent: () => import('./components/layouts/layouts.component').then(m => m.LayoutsComponent),
        children: [
            {
                path: "",
                loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: "categories",
                loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent)
            }
        ]
    }
];

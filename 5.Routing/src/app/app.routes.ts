import { Routes,Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';


//burada adres çubuğuna yazılan değere karşılık gelen componentlerin tanımlarını yapıyoruz.

export const HomeRoute: Route = 
    {
        path: "",
        component: HomeComponent
    };



export const routes: Routes = [

    {
        path: "login",
        component: LoginComponent

    },
    //login component layoutun dışında kaldı.
    {
        path: "",
        component: LayoutsComponent,
        children: [
            HomeRoute,
            { 
                path: "about",
                component: AboutComponent
            },
        
            {
                path: "contact",
                component: ContactComponent
            },
        
            {
                path: "contact/:params",
                component: ContactComponent
            }
        ]
            
    } 

];

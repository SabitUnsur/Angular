import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-about',
   standalone: true,
    templateUrl: './about.component.html',
    styleUrl: "./about.component.css",
    imports: [], //dış kaynaktan bir modül eklemek için kullanılır.
    providers: [], //servis eklemek için kullanılır.
    encapsulation: ViewEncapsulation.None  //html çıktılarında içindeki propertyleri yönetmek için kullanılır.
})

export class AboutComponent{
    title = 'About Page';
    description = 'This is the about page of my first angular app';
}
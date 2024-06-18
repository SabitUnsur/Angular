import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  helloWorld: string = "Hello World! from TS ";
  pClassName:string = "red";

    clickMe() {
      alert('Button Clicked');
    }

    changeHelloWorldVariable(event: any) {
      this.helloWorld = event.target.value;
    }
}

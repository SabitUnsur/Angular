import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = "";
  constructor(
    private router : Router,
  ) { }

  checkStatus(){ 
    
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

}

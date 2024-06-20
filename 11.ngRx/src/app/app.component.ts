import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyCounterComponent],
  template: `
      <app-my-counter></app-my-counter> 
      <!-- <h1>{{count$ | async}}</h1> -->
      <h1>{{count}}</h1>
  `
})

export class AppComponent {
  count$: Observable<number>;
  count:number=0;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    this.store.select("count").subscribe((res) => {
      this.count = res;
    }); //2. bir yöntem
  }
}


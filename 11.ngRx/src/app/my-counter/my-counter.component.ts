import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment,decrement, reset } from '../counter.action';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>) //bu, bizim reducer içindeki initial state'i takip eder, count ismi app.module.ts'de tanımlanmıştır
    {
      this.count$ = store.select('count');
    }

  increment() {
    this.store.dispatch(increment()); //counter.action.ts'de tanımlanmış olan increment fonksiyonunu çağırır
  }

  decrement() { 
     this.store.dispatch(decrement());
  }

  reset() { 
    this.store.dispatch(reset());
  }
}

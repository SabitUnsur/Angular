import { CanDeactivateFn } from '@angular/router';
import { AppComponent } from './app.component';

export const checkGuard: CanDeactivateFn<AppComponent> = (component, currentRoute, currentState, nextState) => {
  component.checkStatus(); //componentteki metodlara, değişkenlere erişebiliriz.
  var result = confirm("Are you sure you want to leave?");
  return result;
};

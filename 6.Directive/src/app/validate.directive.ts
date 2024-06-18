import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]',
  standalone: true
})
export class ValidateDirective {

  constructor(
    private element: ElementRef,
  ) { }

  @HostListener("keyup") keyup() { 
    this.checkInputValidation(this.element.nativeElement);
  }

  checkInputValidation(element: any) {
    const valid = element.validity.valid;
    const id = element.id;
    const divElement = document.querySelector(`#${id} + div`); //bu kod, input elementinin hemen sonrasındaki div elementini seçer.
    if (!valid) {
      element.className = 'invalid'
      divElement!.innerHTML = element.validationMessage;
    }else{
      element.className = ''
      divElement!.innerHTML = '';
    }
  }
}

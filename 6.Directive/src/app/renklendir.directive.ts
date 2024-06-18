import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {

  // @Input("renklendir") color:string | undefined;

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'red';
    console.log('Mouse enter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
    console.log('Mouse leave');
  }

}

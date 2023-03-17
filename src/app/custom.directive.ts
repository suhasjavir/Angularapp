import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  // constructor(private el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'gray';
  //   el.nativeElement.style.color = "blue";
  //   el.nativeElement.style.fontSize = '30px'
  //   el.nativeElement.style.textAlign='center';
  //   // el.nativeElement.style.display = 'none';
  //  }
// using the above method sometimes user open website in different browser or 
// open on mobile then he got some errors, 
// so avoid this situation we follow the following renderer2 method.
  constructor(private el: ElementRef, private render: Renderer2) {
    render.setStyle(el.nativeElement, 'backgroundColor', 'aqua');
    render.setStyle(el.nativeElement, 'color', 'red');
    render.setStyle(el.nativeElement, 'fontSize', '30px');
    render.setStyle(el.nativeElement, 'textAlign', 'center')
   }
}

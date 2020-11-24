import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') onMouseOver(){
    this.changeBackgroundColor("red")
  }
  @HostListener('mouseleave') onMouseLeave(){

       this.changeBackgroundColor("yellow")

  }
  constructor(private el:ElementRef,private render :Renderer2) {
   }
  changeBackgroundColor(color){

    this.render.setStyle(this.el.nativeElement , "backgroundColor",color)

  }
}



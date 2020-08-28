import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) {
  }

  highlight(color: string): void {
    this.el.nativeElement.style.background = color;
  }

}

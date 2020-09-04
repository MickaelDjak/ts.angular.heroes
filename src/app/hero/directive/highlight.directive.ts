import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  constructor(private el: ElementRef) {
  }

  highlight(color: string): void {
    this.el.nativeElement.style.background = color;
    this.el.nativeElement.style.transition = 'all 200ms';
  }

}

import { HostListener, Input } from '@angular/core';
import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imageSrc]'
})
export class MainDirective implements AfterViewInit {

  @Input() imageMouseEnter;
  @Input() imageMouseLeave;
  constructor(private elementRef: ElementRef, private render: Renderer2) { }


  ngAfterViewInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer')
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.elementRef.nativeElement.src = this.imageMouseEnter;

  }

  @HostListener("mouseleave") onMouseLeave() {

    this.elementRef.nativeElement.src = this.imageMouseLeave;
  }

}

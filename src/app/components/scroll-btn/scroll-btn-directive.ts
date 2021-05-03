import { HostListener } from '@angular/core';
import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollBtn]'
})
export class ScrollBtnDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }
  ngAfterViewInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'opacity', '0')
  }

  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.render.setStyle(this.elementRef.nativeElement, 'opacity', '1')
    } else {
      this.render.setStyle(this.elementRef.nativeElement, 'opacity', '0')
    }
  }

  @HostListener("click")
  gotoTop() {

    window.scroll({ top: 0, behavior: "smooth" });
  }

}

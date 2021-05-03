import { HostListener, OnInit } from '@angular/core';
import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, Event, NavigationStart, NavigationError } from '@angular/router';

@Directive({
  selector: '[fixedNavbar]'
})
export class FixedNavbarDirective implements OnInit {
  sticky: boolean = false;
  elementPosition: any;
  url: string = '';
  splitUrl;
  constructor(
    private elementRef: ElementRef,
    private render: Renderer2,
    private router: Router) { }
  ngOnInit(): void {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        if (event.url) {
          this.url = event.url;
          let split = event.url.split(";", 1);
          this.splitUrl = split.join("");
          if (event.url == '/' || event.url == '/main' ||
            event.url == '/shop' || this.splitUrl == "/product" || event.url == '/faqs' || event.url == '/about-us') {
            this.render.setStyle(this.elementRef.nativeElement, 'position', 'absolute')
            this.elementPosition = this.elementRef.nativeElement.offsetTop;
            this.removeClass();

          } else {
            this.render.setStyle(this.elementRef.nativeElement, 'position', 'relative');
            this.render.addClass(this.elementRef.nativeElement, 'sticky');
            this.render.addClass(this.elementRef.nativeElement, 'nav-style');
            this.render.removeClass(this.elementRef.nativeElement, 'shadow');

          }
        }
      }
    });
  }

  @HostListener('document:scroll', [])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (this.url == '/' || this.url == '/main' ||
      this.url == '/shop' || this.splitUrl == "/product"
      || this.url == '/faqs' || this.url == '/about-us') {
      if (windowScroll > this.elementPosition) {
        this.render.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
        this.render.addClass(this.elementRef.nativeElement, 'sticky');
      }
      else {
        this.render.removeClass(this.elementRef.nativeElement, 'sticky')
      }
    } else {

      if (windowScroll == 0) {
        this.render.removeClass(this.elementRef.nativeElement, 'shadow');
        this.render.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      } else {
        this.render.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
        this.addClass()
      }

    }
  }


  removeClass() {
    this.render.removeClass(this.elementRef.nativeElement, 'sticky');
    this.render.removeClass(this.elementRef.nativeElement, 'shadow')
    this.render.removeClass(this.elementRef.nativeElement, 'nav-style');
  }

  addClass() {
    this.render.addClass(this.elementRef.nativeElement, 'sticky');
    this.render.addClass(this.elementRef.nativeElement, 'shadow');
    this.render.addClass(this.elementRef.nativeElement, 'nav-style');
  }

}



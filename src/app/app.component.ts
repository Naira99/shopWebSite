import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, Event } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  windowWidth: number = 500;
  constructor() { }

  ngOnInit() {
    AOS.init();

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 414) {
      this.windowWidth = event.target.innerWidth;
    } else {
      this.windowWidth = 500
    }
    console.log(event.target.innerWidth);
  }


}

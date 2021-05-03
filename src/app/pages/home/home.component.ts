import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  carouselOptions = {
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        loop: true
      },
      1500: {
        items: 1,
        loop: true
      }
    }
  }

  images = [
    {
      text: `New Cocktail  Dresses `,
      image: "../../../assets/img/curly_hair_girl-1.webp"
    },
    {
      text: `Night Summer Dressis `,
      image: "../../../assets/img/curly_hair_white-1.webp"
    },
    {
      text: `The Weekent Getaway`,
      image: "../../../assets/img/monigote.webp"
    }
  ]



  vegetables: Vegetable[] = [
    { name: '50%OFF' },

  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);

  }
}

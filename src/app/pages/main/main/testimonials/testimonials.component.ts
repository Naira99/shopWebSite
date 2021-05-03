import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  carouselOptions = {
    nav: true,
    navText: ["", ""],
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
      text: `Disrupt single-origin coffee hammock quinoa cronut jean shorts  coloring book brooklyn seitan authentic craft beer`,
      image: "../../../assets/img/main/men-shirt-a1-150x150.webp"
    },
    {
      text: `Pok pok flannel drinking vinegar, succulents lumbersexual XOXO  artisan.Succulents tousled drinking vinegar, cardigan `,
      image: "../../../assets/img/main/woman-abstract-b1-150x150.webp"
    },

  ]


}

import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  selectedValue: string;


  foods: Food[] = [
    { value: 'lang-1', viewValue: 'ru' },
    { value: 'lang-2', viewValue: 'arm' },
    { value: 'lang-3', viewValue: 'france' }
  ];

  ngOnInit(): void {

  }


}

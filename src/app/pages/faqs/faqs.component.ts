import { Component, OnInit } from '@angular/core';
import { FaqsService } from 'src/app/service/faqs.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  panelOpenState = true;
  questionsList: any[];
  constructor(private service: FaqsService) { }

  ngOnInit(): void {
    this.service.getAskedQuestions().subscribe((response) => {

      this.questionsList = response;

    })
  }



}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalService } from 'src/app/service/journal.service';

import { Journal } from '../../models/journal';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  constructor(private journal: JournalService) { }

  journalList: Journal[] = [];

  ngOnInit(): void {
    this.journal.getJournal().subscribe((journal) => {
      this.journalList = journal;
      console.log("journal", this.journalList)
    });
  }

}

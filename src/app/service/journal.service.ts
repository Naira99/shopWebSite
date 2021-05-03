import { Injectable } from '@angular/core';
import { journalUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Journal } from '../models/journal';


@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }

  getJournal() {
    return this.http.get<Journal[]>(journalUrl);
  }
}

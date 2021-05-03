import { Injectable } from '@angular/core';
import { faqsUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http: HttpClient) { }

  getAskedQuestions() {
    return this.http.get<any[]>(faqsUrl);
  }

}

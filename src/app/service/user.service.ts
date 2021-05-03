import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { userUrl, accountUrl } from '../config/api';
import { User } from '../models/user';
import { Account } from '../models/account';
import { OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private behaviourSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  private subject = new Subject<string>()
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  sendMessage(boolValue) {
    return this.behaviourSubject.next(boolValue);
  }

  getMessage() {
    return this.behaviourSubject.asObservable();
  }


  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(userUrl);
  }


  addRegister(user: User[]) {
    return this.http.post(userUrl, user);
  }

  getAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(accountUrl);
  }

  addAccount(account: Account[]) {
    return this.http.post(accountUrl, account);
  }

  deleteAccount(id) {
    return this.http.delete(accountUrl + '/' + id).subscribe((s: Headers) => {
      console.log("delete", s);
    });
  }

  addSearch(searchRes) {
    return this.subject.next(searchRes);
  }
  getSearch() {
    return this.subject.asObservable();
  }

}

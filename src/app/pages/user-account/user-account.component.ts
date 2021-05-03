import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  account: Account[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAccount().subscribe((res) => {
      this.account = res;
      console.log("resget", res);
    })
  }
  logOut(id) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/main']);
    this.userService.deleteAccount(id);
    this.userService.sendMessage(false);
  }

}

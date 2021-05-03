
import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { NavigationService } from 'src/app/service/navigation.service';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  links = [];
  account: Boolean = false;
  login: Boolean = true;
  constructor(
    private navService: NavigationService,
    private router: Router,
    private dialogService: DialogService,
    private userService: UserService,

  ) { }

  ngOnInit(): void {

    this.userService.getAccount().subscribe((account) => {

      if (account.length && this.userService.getMessage()) {
        this.userService.sendMessage(true);
      } else {
        this.userService.sendMessage(false);
      }
    })

    this.links = this.navService.getNavList();
    this.userService.getMessage().subscribe((res) => {
      this.account = res;
      this.login = !res;
    })

  }

  toggleSideNav() {

    this.navService.setShowNav(true);
  }

  onNavigationSelectionLIst(listLink) {
    this.router.navigate([listLink.router])
  }

  userAccount() {
    this.router.navigate(['/my-account'])
  }

  openLoginDialog() {
    this.dialogService.open(LoginComponent);
  }



}

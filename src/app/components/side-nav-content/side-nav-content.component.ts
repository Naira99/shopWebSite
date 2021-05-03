import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


import { NavigationService } from 'src/app/service/navigation.service';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SideNavContentComponent implements OnInit {

  account:Boolean=false;
  login:Boolean=true;
  navItems=[];

  constructor(
    private router: Router,
    private navigationService:NavigationService,
    private dialogService:DialogService,
    private userService:UserService
    ) {}

  ngOnInit(): void {
    this.navItems=this.navigationService.getNavList();
    this.userService.getMessage().subscribe((res)=>{
     this.account=res;
     this.login=!res;
     
    })
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.router]);
  }
  openLoginDialog(){
    this.dialogService.open(LoginComponent)
    this.closeNavigation()
  }
  userAccount(){
    this.router.navigate(['/my-account']);
    this.closeNavigation();
  }

  closeNavigation(){
     this.navigationService.setShowNav(false);
  }
}

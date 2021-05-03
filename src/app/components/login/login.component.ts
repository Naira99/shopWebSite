import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/service/user.service';

import {DialogService} from 'src/app/service/dialog.service';

import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account:Boolean=false;
  loginForm:FormGroup;
  submitted:Boolean=false;
  incorrect:Boolean=false;
  constructor(private formBuilder:FormBuilder,
    public dialog: MatDialog,
    private userService:UserService,
    private router:Router,
    private dialogServcice:DialogService
    ) { }

  ngOnInit(): void {
  	this.loginForm=this.formBuilder.group({
  		email:['',[Validators.required]],
  		password:['',[Validators.required]]
  	})


  }
  get formVal() { return this.loginForm.controls; }

	onSubmit(){
		this.submitted=true;
		if (this.loginForm.invalid) {
			return;
		}

    this.userService.getUserList().subscribe((result)=>{
      if (result.find((f)=>f.email===this.formVal.email.value &&
       f.password===this.formVal.password.value)) {
           this.dialogServcice.close();
         this.load();

           this.userService.sendMessage(true);
           this.userService.addAccount(this.loginForm.value).subscribe((res)=>{
             console.log("add",res);
           });

          }else{
            this.incorrect=true;
          }
       })
	}

  openRegistrationDialog(){
  this.dialogServcice.open(RegistrationComponent)
  }

  load(){

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/my-account']);
}

}

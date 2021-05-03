import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  open: Boolean = true;
  alredyEmail: Boolean = false;
  registerForm: FormGroup;
  submitted: Boolean = false;
  success: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private userService: UserService,
    private dialogServcice: DialogService) { }

  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  get formVal() { return this.registerForm.controls }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.getUserList().subscribe((result) => {
      if (result.find(f => f.email === this.formVal.email.value)) {
        this.alredyEmail = true;
        return new Error(`email is alredy token`);
      }

      this.alredyEmail = false;
      this.userService.addRegister(this.registerForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.success = true;

            setTimeout(() => {
              this.dialogServcice.close()
            }, 1000);
            setTimeout(() => {
              this.openLoginDialog();
            }, 1500)
          },
          error => {
            console.log("error");
          });;
    }

    )
  }



  openLoginDialog() {
    this.dialogServcice.open(LoginComponent);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { init } from 'emailjs-com';
init("user_Q5E8RuQUhcAHQmzr24eyI");
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitForm: FormGroup;
  templateParams;
  successfully: boolean = false;
  submitBtn: boolean = true

  emailRequest = 'nar.grig.1999@mail.ru';
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required])
    })

  }


  public sendEmail(e: Event) {
    
    if (this.submitForm.valid) {
        this.submitBtn = false;
    e.preventDefault();
    let templateParams = {
      "user_id": "user_a0rPfiuul2ss5RjTI7dOM",
      "service_id": "service_x7g22z7",
      "template_id": "template_g4veswq",
      template_params: {
        to_name: "Naira",
        from_name: this.submitForm.value.name,
        message: this.submitForm.value.message,
        reply_to: this.submitForm.value.email,
      }
    };
  
    this.http.post('https://api.emailjs.com/api/v1.0/email/send', templateParams, { responseType: 'text' })
      .subscribe((result) => {
        this.successfully = true;
      }, (error) => {
        alert('Oops... ' + error.message + error);
      });
    }else{
      return
    }
  }
}






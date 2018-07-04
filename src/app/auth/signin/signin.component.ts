import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private location: Location
  ) { }

  onSubmit() {
    // console.log(this.loginForm.value);
    this.authService.signinUser(this.loginForm.value)
      .subscribe((logStat) => {
          if(logStat){
            this.router.navigate(['/contacts']);
          }
      });
  }

  private initForm() {
    let email = '';
    let password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(email),
      'password': new FormControl(password)
    }); 
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.initForm();
  }

}

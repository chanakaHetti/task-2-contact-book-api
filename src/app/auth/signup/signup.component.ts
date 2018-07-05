import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.authService.signupUser(this.registerForm.value)
      .subscribe((logStat) => {
          if(logStat){
            this.router.navigate(['/contacts']);
          }
      });
  }

  private initForm() {
    let email = '';
    let password = '';

    this.registerForm = new FormGroup({
      'email': new FormControl(email),
      'password': new FormControl(password)
    }); 
  }
}

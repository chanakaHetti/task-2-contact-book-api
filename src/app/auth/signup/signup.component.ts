import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.registerForm.value);
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

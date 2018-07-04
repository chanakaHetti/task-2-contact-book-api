import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private location: Location) { }

  ngOnInit() {
    this.intitForm();
  }

  onSubmit() {
    this.contactService.addContact(this.contactForm.value)
      .subscribe( () => this.goBack() );
  }

  goBack(): void {
    // this.router.navigate(['../'], {relativeTo: this.route});
    this.location.back();
  }

  private intitForm() {
    let name = '';
    let email = '';
    let number = '';

    this.contactForm = new FormGroup({
      'name': new FormControl(name),
      'email': new FormControl(email),
      'number': new FormControl(number)
    });
  }

}

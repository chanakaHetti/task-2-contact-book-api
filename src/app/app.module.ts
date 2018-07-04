import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ContactService } from './contact.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactAddComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [ContactService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

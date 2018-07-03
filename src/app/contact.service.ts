import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private ajaxUrl = 'api/contacts'; // ajax url is array name from in-memory-data.service

  constructor( private http: HttpClient ) { }

  // Get contact list from server
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.ajaxUrl)
      .pipe(
        catchError(this.handleError('getContacts', []))
      );
  }

  getContact(id: number): Observable<Contact> {
    return of(CONTACTS.find(contact => contact.id === id));
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}


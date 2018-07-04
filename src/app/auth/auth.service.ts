import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class AuthService {
    logStatus: boolean = false;
    token: string = 'fdfd';

    constructor(private http: HttpClient) {}

    signinUser(user: User):Observable<any> {
        if(user.email == USERS[0].email && user.password == USERS[0].password) {
            this.logStatus = true;
            this.getToken();
        } else {
            this.logStatus = false;
        }

        return of(this.logStatus);
    }

    getToken() {
        this.token = 'asd';
        return this.token;
    }

    logout() {
        return this.token = null;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
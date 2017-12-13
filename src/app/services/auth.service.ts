import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {
  private user: User;

  constructor(private http: Http) {}

  private setUser(user: User = null) {
    this.user = user;
  }

  signup(user: User) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/signup', user, options).map(res => {
      this.setUser(new User(res.json()));
      return user;
    });
  }

  login(user: User) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/login', user, options).map(res => {
      this.setUser(new User(res.json()));
      return user;
    });
  }

  logout() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/logout', {}, options).map(res => {
      this.setUser();
      return null;
    });
  }

  me() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(apiUrl + '/me', options)
      .toPromise()
      .then(res => {
        const user = new User(res.json());
        this.setUser(user);
        return user;
      })
      .catch(err => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }
}

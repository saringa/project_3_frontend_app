import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  getBookings() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking', options)
      .map((res: Response) => res.json());
  }

  getBookingByUserId() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking/user', options)
      .map((res: Response) => res.json());
  }

  getBookingsAvailable() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking/available', options)
      .map((res: Response) => res.json());
  }

  getBookingsPending() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking/pending', options)
      .map((res: Response) => res.json());
  }
  getBookingsConfirmed() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking/confirmed', options)
      .map((res: Response) => res.json());
  }
  getBookingsRejected() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking/rejected', options)
      .map((res: Response) => res.json());
  }

  putBookingRequested(booking) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .put(baseUrl + '/booking/' + booking._id + '/request', booking, options)
      .map((res: Response) => res.json());
  }

  // WORKING ON CONFIRM AND REJECT(NOT AVAILABLE)
  putBookingConfirmed(booking) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .put(baseUrl + '/booking/' + booking._id + '/confirm', booking, options)
      .map((res: Response) => res.json());
  }

  putBookingNotAvailable(booking) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .put(baseUrl + '/booking/' + booking._id + '/reject', booking, options)
      .map((res: Response) => res.json());
  }

  // --

  getBookingById(id) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .get(baseUrl + '/booking/' + id, options)
      .map((res: Response) => res.json());
  }
}

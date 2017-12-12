import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

const baseUrl = 'http://localhost:3000';

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  getBookings() {
    return this.http
      .get(baseUrl + '/booking')
      .map((res: Response) => res.json());
  }

  getBookingsAvailable() {
    return this.http
      .get(baseUrl + '/booking/available')
      .map((res: Response) => res.json());
  }

  getBookingsPending() {
    return this.http
      .get(baseUrl + '/booking/pending')
      .map((res: Response) => res.json());
  }

  putBookingRequested(booking) {
    return this.http
      .put(baseUrl + '/booking/' + booking._id + '/request', booking)
      .map((res: Response) => res.json());
  }

  getBookingById(id) {
    return this.http
      .get(baseUrl + '/booking/' + id)
      .map((res: Response) => res.json());
  }
}

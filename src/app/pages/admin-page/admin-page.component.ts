import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  bookingsPending = [];
  bookingsConfirmed = [];
  bookingsRejected = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBookingsPending().subscribe(data => {
      this.bookingsPending = data;
    });
    this.bookingService.getBookingsConfirmed().subscribe(data => {
      this.bookingsConfirmed = data;
    });
    this.bookingService.getBookingsRejected().subscribe(data => {
      this.bookingsRejected = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  bookings = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBookingsPending().subscribe(data => {
      this.bookings = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-detail-page',
  templateUrl: './booking-detail-page.component.html',
  styleUrls: ['./booking-detail-page.component.css']
})
export class BookingDetailPageComponent implements OnInit {
  booking = null;

  constructor(
    private bookingService: BookingService,
    // private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookingService.getBookingById(params['id']).subscribe(data => {
        this.booking = data;
      });
    });
  }
}

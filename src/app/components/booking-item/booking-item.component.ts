import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { BookingService } from '../../services/booking.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {
  @Input() booking;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {}

  request() {
    this.bookingService.putBookingRequested(this.booking).subscribe(
      () => {
        this.router.navigate(['/booking', this.booking._id]);
      },
      err => console.log(err)
    );
  }
}

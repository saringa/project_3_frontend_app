import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  bookings = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService
      .getBookingByUserId()
      .subscribe(data => (this.bookings = data), err => console.log(err));
  }
}

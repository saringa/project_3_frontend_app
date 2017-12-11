import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBookingsAvailable().subscribe(data => {
      this.bookings = data;
    });
  }
}

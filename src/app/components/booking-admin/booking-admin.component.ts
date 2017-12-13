import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { BookingService } from '../../services/booking.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-admin',
  templateUrl: './booking-admin.component.html',
  styleUrls: ['./booking-admin.component.css']
})
export class BookingAdminComponent implements OnInit {
  @Input() booking;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {}

  confirm() {
    this.bookingService.putBookingConfirmed(this.booking).subscribe(
      data => {
        this.router.navigate(['/admin']);
        console.log(data);
      },
      err => console.log(err)
    );
  }

  reject() {
    this.bookingService.putBookingNotAvailable(this.booking).subscribe(
      data => {
        this.router.navigate(['/admin']);
        console.log(data);
      },
      err => console.log(err)
    );
  }
}

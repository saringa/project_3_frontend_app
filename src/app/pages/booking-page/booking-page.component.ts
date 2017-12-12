import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  private allBookings = [];

  dateFilter;
  bookingsOfTheDay = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBookingsAvailable().subscribe(data => {
      this.allBookings = data;
      this.getCurrentDate();
      this.filterByDate();
    });
  }

  filterByDate() {
    console.log(this.dateFilter);
    this.bookingsOfTheDay = this.allBookings.filter(elem => {
      const date = elem.date.split('T')[0];
      if (this.dateFilter === date) {
        return true;
      }
    });
  }

  getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    this.dateFilter = year + '-' + month + '-' + day;
  }
}

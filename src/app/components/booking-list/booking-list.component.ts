import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  @Input() bookings = [];

  constructor() {}

  ngOnInit() {}
}

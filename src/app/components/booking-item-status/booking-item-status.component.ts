import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-item-status',
  templateUrl: './booking-item-status.component.html',
  styleUrls: ['./booking-item-status.component.css']
})
export class BookingItemStatusComponent implements OnInit {
  @Input() booking;

  constructor() {}

  ngOnInit() {}
}

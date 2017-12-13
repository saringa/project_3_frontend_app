import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingItemStatusComponent } from './booking-item-status.component';

describe('BookingItemStatusComponent', () => {
  let component: BookingItemStatusComponent;
  let fixture: ComponentFixture<BookingItemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingItemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

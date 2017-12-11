import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { BookingDetailPageComponent } from './pages/booking-detail-page/booking-detail-page.component';

import { BookingService } from './services/booking.service';
import { AuthService } from './services/auth.service';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingItemComponent } from './components/booking-item/booking-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'bookings', component: BookingPageComponent },
  { path: 'booking/:id', component: BookingDetailPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminPageComponent,
    BookingPageComponent,
    BookingDetailPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    BookingListComponent,
    BookingItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookingService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

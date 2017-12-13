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
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { BookingService } from './services/booking.service';
import { AuthService } from './services/auth.service';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingItemComponent } from './components/booking-item/booking-item.component';
import { BookingAdminComponent } from './components/booking-admin/booking-admin.component';
import { BookingItemStatusComponent } from './components/booking-item-status/booking-item-status.component';

import { AuthGuard } from './guards/auth.guard';
import { AnonGuard } from './guards/anon.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bookings', pathMatch: 'full' },
  {
    path: 'auth/login',
    canActivate: [AnonGuard],
    component: LoginPageComponent
  },
  {
    path: 'auth/signup',
    canActivate: [AnonGuard],
    component: SignupPageComponent
  },
  { path: 'admin', canActivate: [AdminGuard], component: AdminPageComponent },
  {
    path: 'bookings',
    canActivate: [AuthGuard],
    component: BookingPageComponent
  },
  {
    path: 'booking/:id',
    canActivate: [AuthGuard],
    component: BookingDetailPageComponent
  },
  {
    path: 'my-bookings',
    canActivate: [AuthGuard],
    component: ProfilePageComponent
  }
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
    BookingItemComponent,
    BookingAdminComponent,
    BookingItemStatusComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookingService, AuthService, AuthGuard, AnonGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

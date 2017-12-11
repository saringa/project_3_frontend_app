import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  user = new User({
    username: '',
    password: ''
  });

  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.error = null;
    this.authService
      .signup(this.user)
      .subscribe(
        () => this.router.navigate(['/bookings']),
        err => (this.error = err)
      );
  }
}

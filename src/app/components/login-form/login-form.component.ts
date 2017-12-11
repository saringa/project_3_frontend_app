import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = new User({
    username: '',
    password: ''
  });

  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.error = null;
    this.authService
      .login(this.user)
      .subscribe(
        () => this.router.navigate(['/bookings']),
        err => (this.error = err)
      );
  }
}

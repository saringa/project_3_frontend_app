import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  anon: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.userChange$.subscribe(user => {
      this.user = user;
      this.anon = !user;
    });
  }

  logout() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigate(['/auth/login']));
  }
}

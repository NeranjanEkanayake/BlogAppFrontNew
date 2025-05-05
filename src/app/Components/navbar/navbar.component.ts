import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private loginSubscription!: Subscription;
  role: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginSubscription = this.authService.loginStatus().subscribe(status => { this.isLoggedIn = status; });
    this.role = this.authService.getUserRole();
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/']);
  }

  isAdmin(): boolean {
    return this.role === 'Admin';
  }
}

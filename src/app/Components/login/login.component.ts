import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  userData: any;
  loginFailed: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userData = this.authService.getUserData();
    if (this.userData) {
      console.log('User data: ', this.userData);
      return this.userData;
    } else {
      console.log('No data found');
    }

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const credentials = {
      username: this.form.value.username,
      password: this.form.value.password
    };

    this.authService.login(credentials.username, credentials.password).subscribe({
      next: (response) => {
        this.authService.storeToken(response.token);
        this.router.navigate(['/']);
        this.loginFailed = false;
      },
      error: (error) => {
        console.error('Login failed', error);
        this.loginFailed = true;
      }
    });
  }
}

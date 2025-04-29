import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
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

    this.authService.login(credentials.username, credentials.password).subscribe(
      (response) => {
        this.authService.storeToken(response.token);
        this.router.navigate(['/']);
      }
      // error: error => {
      //   console.error('Login failed', error);
      // }
    );
  }
}

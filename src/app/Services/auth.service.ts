import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiAuthUrl = 'https://localhost:7064/api/auth';
  private tokenKey = 'jwt_token';

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiAuthUrl}/login`, { username, password });
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.loggedIn.next(true);
    console.log("Got the JWT: ", token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  loginStatus(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  decodeToken(): any | null {
    const token = this.getToken();

    if (!token) {
      return null;
    } else {
      console.log("JWT decoded data: ", jwtDecode(token));
      return jwtDecode(token);
    }
  }

  getUserData(): any | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken : null;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  clearToken() {
    localStorage.removeItem('jwt_token');
    this.loggedIn.next(false);
  }
}

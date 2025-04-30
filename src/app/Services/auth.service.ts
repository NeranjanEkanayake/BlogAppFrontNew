import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiAuthUrl = 'https://localhost:7064/api/auth';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiAuthUrl}/login`, { username, password });
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    console.log("Got the JWT: ", token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
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
  
  clearToken() {
    localStorage.removeItem('jwt_token');
  }
}
